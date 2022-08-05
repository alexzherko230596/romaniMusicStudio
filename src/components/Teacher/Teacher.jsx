import React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Teacher.module.scss'
import teacher from '../../img/teacher.svg'
import bg from '../../img/backgroundNota.svg'
import checkMark from '../../img/checkMark.svg'

const Teacher = () => {
    return(
        <div className={classes.teacher} id = 'BlockToScrollTeacher'>
            <div className="g-container">
                <TitleBlock title = {'преподаватель'}/>
                <div className={classes.teacher__wrapper}>
                    <img src={bg} alt='background' className={classes.teacher__wrapper_bg}/>
                    <h3 className={classes.teacher__wrapper_title}>Галина</h3>
                    <div className={classes.teacher__wrapper__block}>
                        <div className={classes.teacher__wrapper__block__text}>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Преподаватель вокала и театра</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>5+ лет опыта работы</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Режиссер и постановщик спектаклей</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Более 18 лет поет на сцене</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Индивидуальный подход в обучении</p>
                            </div>
                            <div className={classes.teacher__wrapper__block__text__wrapper}>
                                <img src={checkMark} className = {classes.teacher__wrapper__block__text__wrapper_img} alt = 'Check mark'/>
                                <p>Победитель многих международних соревнований</p>
                            </div>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img src = {teacher} alt = {'Halina teacher'} className={classes.teacher__wrapper__block_img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher