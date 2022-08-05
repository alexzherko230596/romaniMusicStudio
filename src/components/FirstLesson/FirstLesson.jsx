import React, {useState, useEffect} from "react";
import emailjs from 'emailjs-com';
import classes from './FirstLesson.module.scss'
import lina from '../../img/makeAnAppointment.svg'
import telegram from '../../img/telegram.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'

const FirstLesson = () => {
    const [inputName, setInputName] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [isDisabled, setDisabled] = useState(true)
    const [isEmailUnsend, setEmailUnsend] = useState(true)
    const [isErrorPhone, setErrorPhone] = useState(false)
    var regExPhoneNumber = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
    useEffect(() => {
        if(inputName && inputPhone){
            setDisabled(false)
        }
        else(
            setDisabled(true)
        )
        if(inputPhone){
            setErrorPhone(false)
        }
    }, [inputName, inputPhone]);

    const handleInput = (input, e) => {
        input(e.target.value)
    }

    const handleSendForm = (e) => {
        e.preventDefault();
        if(regExPhoneNumber.test(inputPhone)){
            console.log('sending')
            // emailjs.sendForm('service_kwgk1rc', 'template_pekporr', e.target, 'bb1bXokpE7uxisysC')
            // emailjs.sendForm('service_kwgk1rc', process.env.REACT_APP_MESSAGE_TEMPLATE, e.target, 'bb1bXokpE7uxisysC')
            emailjs.sendForm(process.env.REACT_APP_MAIL_TEMPLATE, process.env.REACT_APP_MESSAGE_TEMPLATE, e.target, process.env.REACT_APP_USER_NAME)
              .then((result) => {
                  console.log(result.text);
                  setEmailUnsend(false)
              }, (error) => {
                  console.log(error.text);
              });
        }
        else{
            console.log('doesnt send form')
            setErrorPhone(true)
            setInputPhone('')
        }
    }

    return(
        <div className={classes.lesson} id = 'BlockToScrollMakeAnAppoitment'>
            <div className="g-container">
                <div className={classes.lesson__wrapper}>
                    <img src={lina} alt='Teacher' className={classes.lesson__wrapper_img}/>
                    <div className={classes.lesson__wrapper__form}>
                        <p className={classes.lesson__wrapper__form_title}>Записаться на первое занятие</p>
                       {isEmailUnsend
                       ?
                       <form style = {{flexDirection: 'column', display: 'flex', alignItems: 'center'}} onSubmit={handleSendForm}>
                       <input 
                           className={classes.lesson__wrapper__form_name}
                           type={'text'} 
                           placeholder={"Enter your name"}
                           maxLength={25}
                           value = {inputName}
                           autoComplete="off"
                           name="name" 
                           onChange={(e) => handleInput(setInputName, e)}/>
                       <input 
                           className={classes.lesson__wrapper__form_name}
                           type={'text'} 
                           placeholder={"Enter your phone number"}
                           autoComplete="off" 
                           value = {inputPhone}
                           name="number" 
                           onChange={(e) => handleInput(setInputPhone, e)}/>
                       <div className={isErrorPhone ? `${classes.lesson__wrapper__form__styleError} ${classes.lesson__wrapper__form_showError}` : classes.lesson__wrapper__form__styleError}>
                           <p>Ошибка. Пример правильного ввода "+48123456789"</p>
                       </div>
                       <button type = 'submit' className={classes.lesson__wrapper__form_btn} disabled={isDisabled}>Записаться на первое занятие</button>
                   </form>
                        :
                        <div className={classes.lesson__wrapper__form__sendForm}> 
                            <p className={classes.lesson__wrapper__form__sendForm_greeting}>Спасибо</p>
                            <p className={classes.lesson__wrapper__form__sendForm_info}>Наши специалисты свяжутся с вами в ближайшее время по указанному вами номеру телефона <span>{inputPhone}</span></p>
                        </div>
                        }
                        <div className={classes.lesson__wrapper__form_devider}/>
                        <p className={classes.lesson__wrapper__form_descr}>Или напишите нам</p>
                        <div className={classes.lesson__wrapper__form_icons}>
                            <a href="https://t.me/studio_romani" target="_blank" rel="noreferrer" className={classes.lesson__wrapper__form_icons__link}>
                                <img src={telegram} alt='telegram' className={classes.lesson__wrapper__form_icons__link_element}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100077656080031" target="_blank" rel="noreferrer" className={classes.lesson__wrapper__form_icons__link}>
                                <img src={facebook} alt='telegram' className={classes.lesson__wrapper__form_icons__link_element}/>
                            </a>
                            <a href="https://www.instagram.com/studio_romani/" target="_blank" rel="noreferrer" className={classes.lesson__wrapper__form_icons__link}>
                                <img src={instagram} alt='telegram' className={classes.lesson__wrapper__form_icons__link_element}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstLesson