import React, { useState } from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Pricing.module.scss'

const Pricing = () => {

    const [activeTab, setActiveTab] = useState(1)

    const handleTab = (number) => {
        setActiveTab(number)
    }
    return(
        <section className={classes.price} id = 'BlockToScrollPrice'>
            <div className="g-container">
                <TitleBlock title = {'Стоимость'}/>
                <div className={classes.price__wrapper}>
                    <div className={classes.price__wrapper__mobile}>
                        <div className={classes.price__wrapper__mobile__tab}>
                            <div 
                                className={activeTab === 1 ? `${classes.price__wrapper__mobile__tab_one} ${classes.price__wrapper__mobile__tab_one_active}` : classes.price__wrapper__mobile__tab_one}
                                onClick = {() => handleTab(1)}>
                                Вокал для взрослых
                            </div>
                            <div 
                                className={activeTab === 2 ? `${classes.price__wrapper__mobile__tab_one} ${classes.price__wrapper__mobile__tab_one_active}` : classes.price__wrapper__mobile__tab_one}
                                onClick = {() => handleTab(2)}>
                                Вокал для детей
                            </div>
                            <div 
                                className={activeTab === 3 ? `${classes.price__wrapper__mobile__tab_one} ${classes.price__wrapper__mobile__tab_one_active}` : classes.price__wrapper__mobile__tab_one}
                                onClick = {() => handleTab(3)}>
                                Театр
                            </div>
                        </div>
                        {
                            activeTab === 1 
                                ? 
                                <div className={classes.price__wrapper__sign__adults}>
                                    <p className={classes.price__wrapper__sign__adults_title}>Вокал для взрослых</p>
                                    <p className={classes.price__wrapper__sign__adults_explaination}>- Постановка голоса;<br/>
                                        - развитие певческого дыхания;<br/>
                                        - раскрепощением голосового аппарата, тела;<br/>
                                        - избавление от внутренних зажимов и комплексов;<br/>
                                        - работа над дикцией и артикуляцией;<br/>
                                        - чистота интонации;<br/>
                                        - развитие музыкального слуха;<br/>
                                        - разбор вокального произведения «песен» ;<br/>
                                        - сценическая культура артиста;<br/>
                                        <br/>
                                        А так же подготовка вокальных номеров для праздников и событий.
                                    </p>
                                    <p className={classes.price__wrapper__sign__adults_firstLesson}>Пробное занятие - 55 злотых</p>
                                    <div className={classes.price__wrapper__sign__adults__pricing}>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Разовое занятие</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                {/* 45 минут  - 65 злотых<br/> */}
                                                45 минут - 80 злотых 
                                            </p>
                                        </div>
                                        <div className={`${classes.price__wrapper__sign__adults__pricing__item} ${classes.price__wrapper__sign__adults__pricing__item__mobileHide}`}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Абонемент</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 280 злотых <br/>
                                                8 занятия - 500 злотых  <br/>
                                                12 занятий - 720 злотых  <br/>
                                            </p>
                                        </div>
                                        {/* <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Групповые занятия</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>60 минут - 45 злотых</p>
                                        </div> */}
                                        <div className={classes.price__wrapper__sign__adults__pricing__item__mobile}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Абонемент</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 280 злотых <br/>
                                                8 занятия - 500 злотых  <br/>
                                                12 занятий - 720 злотых  <br/>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  50 минут</p>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней - 4 и 8 занятий. <br/>1.5 месяца - 12 занятий</p>
                                </div>
                            :

                            activeTab === 2

                            ?
                                <div className={classes.price__wrapper__sign__adults}>
                                    <p className={classes.price__wrapper__sign__adults_title}>Вокал  для детей</p>
                                    <p className={classes.price__wrapper__sign__adults_explaination}>
                                        - Правильная постановка голоса и работа с дыханием в процессе пения;<br/>
                                        - обретение четкой дикции и правильной артикуляции;<br/>
                                        - устранение речевых дефектов;<br/>
                                        - выработка индивидуального тембра.<br/>
                                        - развитие красивого и сильного детского голоса;<br/>
                                        - знакомство ребенка с музыкальной культурой.
                                    </p>
                                    <p className={`${classes.price__wrapper__sign__adults_firstLesson} ${classes.price__wrapper__sign__adults_firstLesson_topDistance}`}>Пробное занятие - 50 злотых</p>
                                    <div className={classes.price__wrapper__sign__adults__pricing}>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Разовое занятие</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                45 минут  - 65 злотых<br/>
                                                {/* 60 минут - 70 злотых  */}
                                            </p>
                                        </div>
                                        <div className={`${classes.price__wrapper__sign__adults__pricing__item} ${classes.price__wrapper__sign__adults__pricing__item__mobileHide}`}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Абонемент</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 240 злотых <br/>
                                                8 занятия - 440 злотых  <br/>
                                                12 занятий - 600 злотых  <br/>
                                            </p>
                                        </div>
                                        {/* <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Групповые занятия</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>60 минут - 40 злотых </p>
                                        </div> */}
                                        <div className={classes.price__wrapper__sign__adults__pricing__item__mobile}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Абонемент</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 240 злотых <br/>
                                                8 занятия - 440 злотых  <br/>
                                                12 занятий - 600 злотых  <br/>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  45 минут</p>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней - 4 и 8 занятий. <br/>1.5 месяца - 12 занятий </p>
                                </div>
                            :
                            <div className={classes.price__wrapper__theater_mobile}>
                                <p className={classes.price__wrapper__sign__adults_title}>Театр для детей</p>
                                <div className={classes.price__wrapper__theater__wrapperProgram}>
                                    <div className={classes.price__wrapper__theater__wrapperProgram_first}>
                                        <p className={classes.price__wrapper__sign__adults_explaination_theater}>
                                            - Развитие творческого потенциала ребёнка; <br />
                                            - развитие фантазии и воображение;<br />
                                            - развитие внимания и памяти;<br />
                                            - умение  владеть собой и своими эмоциями;<br />
                                            - избавление от страхов: не бояться сцены и зрителя; <br />
                                            - умение выступать на публике;<br />
                                            - работа над ритмом и пластикой 
                                        </p>
                                    </div>
                                    <div className={classes.price__wrapper__theater__wrapperProgram_second}>
                                        <p className={classes.price__wrapper__sign__adults_explaination_theater}>
                                        - работа над дикцией и артикуляцией;<br />
                                        - умение владеть своим голосом и телом;<br />
                                        - развитие речи ( красиво, содержательно, выразительно, доходчиво складывать слова в предложения).<br />
                                        - изучение  вокальных и танцевальных произволений <br />
                                        - постановка спектакля 
                                        </p>
                                    </div>
                                </div>
                                <p className={classes.price__wrapper__sign__adults_descr}>
                                    По окончанию ребята показывают спектакль и получают именные сертификаты. 
                                </p>
                                <p className={classes.price__wrapper__sign__adults_program}>Возрастная категория:</p>
                                <div className={classes.price__wrapper__theater__category}>
                                    <div className={classes.price__wrapper__theater__category__block}>
                                        <p className={classes.price__wrapper__sign__adults_title}>5 - 11 лет </p>
                                        {/* <p className={classes.price__wrapper__sign__adults_descr}>
                                            Занятия два раза в неделю длительностью 60 минут<br/>
                                            <br/>
                                            Среда 19.00-20.00<br/><br/>
                                            Суббота 18.00-19.00
                                        </p> */}
                                    </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing