import React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './AboutStudio.module.scss'
import studio1 from '../../img/studio1.svg'
import studio2 from '../../img/studio2.svg'
import bg from '../../img/bigBackgroundMusic.svg'
import music from '../../img/music.svg'
import theater from '../../img/theater.svg'
import time from '../../img/time.svg'

const AboutStudio = () => {
    return(
        <div className={classes.studio} id = 'BlockToScrollAboutStudio'>
            <div className="g-container">
                <TitleBlock title = {'О студии'}/>
                <div className={classes.studio__wrapper}>
                    <img src = {studio1} alt='Studio Romani' className={classes.studio__wrapper_img}/>
                    <div className={classes.studio__wrapper__text}>
                    <p >Вокально-театральная <span>студия Romani - это место, где раскрываются таланты и душа наполняется музыкой.</span></p> 
                    <p >В нашей студии всегда комфортно и уютно. Место где обитает дружеская обстановка. Сочетание современной тенденции в области вокала, хореографии и театрального искусства. Студия обладает всем необходимым профессиональным оборудованием, для комфортного обучения.</p>
                    <p > Обучение в студии позволяет продемонстрировать ваш талант с самой привлекательной стороны. Здесь вы <span>полюбите вокал и почувствуете актёрскую игру в себе.</span></p>
                    </div>
                    <div className={classes.studio__wrapper__textSecondBlock}>
                        <img src = {studio2} alt='Studio Romani' className={classes.studio__wrapper__textSecondBlock_img}/>
                        <div className={classes.studio__wrapper__textSecondBlock_text}>
                            <p>Наши уроки это нескучные заучивания песен и актерских  ролей, а стремление понять основы музыкального творчества и самовыражения. </p> 
                            <p><span>Студия Romani </span>уделяет большое внимание выступлениям на публике. Для того чтобы помочь своим ученикам преодолеть психологические барьеры. </p>
                            <p><span>Romani</span> - про твой талант</p>
                        </div>
                    </div>
                    <div className={classes.studio__wrapper__background}>
                        <img src = {bg} alt='background' className={classes.studio__wrapper__background_img}/>
                    </div>
                    <div className={classes.studio__wrapper__advantages}>
                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {music} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Индивидуальные и групповые занятия по вокалу от 5 лет и старше
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Занятия по вокалу от 5 лет до 99 лет
                            </div>
                        </div>

                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {theater} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Групповые занятия по театру для детей в возрасте 7 - 17 лет
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Занятия по театру от 7 лет до 17 лет
                            </div>
                        </div>

                        <div className={classes.studio__wrapper__advantages__block}>
                            <div className={classes.studio__wrapper__advantages__block__imageForm}>
                                <img src = {time} alt='music' className={classes.studio__wrapper__advantages__block__imageForm_img}/>
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_text}>
                                Гибкое расписание, чтобы вы могли учиться в удовольсвтие
                            </div>
                            <div className={classes.studio__wrapper__advantages__block_textMobile}>
                                Гибкое расписание занятий 24/7
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStudio