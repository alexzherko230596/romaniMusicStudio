import React, {useState} from "react";
import classes from './ItemFeedback.module.scss'
import dataFeedback from "./dataFeedback";
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import arrow from '../../img/arrowLeft.svg'

const ItemFeedback = (props) => {
    const [currentAmount, setCurrentAmount] = useState(1)
    const [arrayFeedback, setArrayFeedback] = useState(dataFeedback)
    const firstArr = arrayFeedback.slice(0, 2)
    firstArr.unshift(dataFeedback[dataFeedback.length - 1])
    const [showFeedbacks, setShowFeedbacks] = useState(firstArr)


    const handleFeedbacks = (num) => {
        let count = currentAmount + num
        let temproraryVar = []
        if(count > 1 && count < 12){
            temproraryVar = arrayFeedback.slice(count - 2, count + 1)
            setShowFeedbacks(temproraryVar)
            setCurrentAmount(prev => prev + num)
        }
        else if(count === 0 || count === 12) {
            temproraryVar =  arrayFeedback.slice(10, 12)
            temproraryVar.push(dataFeedback[0])
            setShowFeedbacks(temproraryVar)
            console.log(temproraryVar)
            setCurrentAmount(12)
        }
        else if(count === 1 || count === 13) {
            temproraryVar = arrayFeedback.slice(0, 2)
            temproraryVar.unshift(dataFeedback[dataFeedback.length - 1])
            setShowFeedbacks(temproraryVar)
            if(count === 1){
                setCurrentAmount(prev => prev + num)
            }
            else{
                setCurrentAmount(1)
            }
            
        }
        
    }

  return (
    <div className={classes.feedback}>
        <div className={classes.feedback__wrapper}>
                <div className={classes.feedback__wrapper__secondaryBlock}>
                    <img src={showFeedbacks[0].image} alt={showFeedbacks[0].alt} className={classes.feedback__wrapper__secondaryBlock_logo}/>
                    <p className={classes.feedback__wrapper__secondaryBlock_title}>{showFeedbacks[0].name}</p>
                    <p className={classes.feedback__wrapper__secondaryBlock_text}>
                    {showFeedbacks[0].text}
                    </p>
                    {showFeedbacks[0].instagram ? 
                        <a href={showFeedbacks[0].instagram} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__secondaryBlock_social}>
                        <img src={instagram} alt='instagram' className={classes.itemFeedback__social_img}/>
                        </a>
                    :
                        <a href={showFeedbacks[0].facebook} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__secondaryBlock_social}>
                            <img src={facebook} alt='facebook' className={classes.itemFeedback__social_img}/>
                        </a>
                    }
                </div>

                <div className={classes.feedback__wrapper__mainBlock}>
                    <img src={showFeedbacks[1].image} alt={showFeedbacks[1].alt} className={classes.feedback__wrapper__mainBlock_logo}/>
                    <p className={classes.feedback__wrapper__mainBlock_title}>{showFeedbacks[1].name}</p>
                    <p className={classes.feedback__wrapper__mainBlock_text}>
                        {showFeedbacks[1].text}
                    </p>
                    {showFeedbacks[1].instagram ? 
                    <a href={showFeedbacks[1].instagram} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__mainBlock_social}>
                        <img src={instagram} alt='instagram' className={classes.itemFeedback__social_img}/>
                    </a>
                    :
                    <a href={showFeedbacks[1].facebook} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__mainBlock_social}>
                        <img src={facebook} alt='facebook' className={classes.itemFeedback__social_img}/>
                    </a>
                    }
                </div>

            <div className={classes.feedback__wrapper__secondaryBlock}>
                <img src={showFeedbacks[2].image} alt={showFeedbacks[2].alt} className={classes.feedback__wrapper__secondaryBlock_logo}/>
                <p className={classes.feedback__wrapper__secondaryBlock_title}>{showFeedbacks[2].name}</p>
                <p className={classes.feedback__wrapper__secondaryBlock_text}>
                    {showFeedbacks[2].text}
                </p>
                {showFeedbacks[2].instagram ? 
                    <a href={showFeedbacks[2].instagram} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__secondaryBlock_social}>
                        <img src={instagram} alt='instagram' className={classes.itemFeedback__social_img}/>
                    </a>
                :
                    <a href={showFeedbacks[2].facebook} target="_blank" rel="noreferrer" className={classes.feedback__wrapper__secondaryBlock_social}>
                        <img src={facebook} alt='facebook' className={classes.itemFeedback__social_img}/>
                    </a>
                }
            </div>
        </div>
        <div className={classes.feedback__arrows}>
            <img src={arrow} alt='left Feedback' className={classes.feedback__arrows_arrowLeft} onClick = {() => handleFeedbacks(-1)}/>
            <p className={classes.feedback__arrows_count}>{currentAmount}/12</p>
            <img src={arrow} alt='right Feedback' className={classes.feedback__arrows_arrowRight} onClick = {() => handleFeedbacks(1)}/>
        </div>
    </div>
  )
}

export default ItemFeedback