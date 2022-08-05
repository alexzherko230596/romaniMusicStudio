import React, { useState } from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Pricing.module.scss'

const Pricing = () => {

    const [activeTab, setActiveTab] = useState(1)

    const handleTab = (number) => {
        setActiveTab(number)
    }
    return(
        <div className={classes.price} id = 'BlockToScrollPrice'>
            <div className="g-container">
                <TitleBlock title = {'Стоимость'}/>
                <div className={classes.price__wrapper}>
                    {/* <div className={classes.price__wrapper__sign}>
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
                            <p className={classes.price__wrapper__sign__adults_firstLesson}>Первое занятие - 30 злотых</p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                45 минут  - 55 злотых<br/>
                                60 минут - 65 злотых 
                            </p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>Групповые занятия</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>60 минут - 40 злотых </p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                4 занятия  - 200 злотых <br/>
                                6 занятия - 290 злотых  <br/>
                                8 занятий - 380 злотых  <br/>
                            </p>
                            <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  45 минут</p>
                            <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней </p>
                        </div>

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
                            <p className={`${classes.price__wrapper__sign__adults_firstLesson} ${classes.price__wrapper__sign__adults_firstLesson_topDistance}`}>Первое занятие - 30 злотых</p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                45 минут  - 50 злотых<br/>
                                60 минут - 60 злотых 
                            </p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>Групповые занятия</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>60 минут - 40 злотых </p>
                            <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                            <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                4 занятия  - 180 злотых <br/>
                                6 занятия - 260 злотых  <br/>
                                8 занятий - 360 злотых  <br/>
                            </p>
                            <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  45 минут</p>
                            <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней </p>
                        </div>
                    </div>
                    <div className={classes.price__wrapper__theater}>
                        <p className={classes.price__wrapper__sign__adults_title}>Театр для детей</p>
                        <div className={classes.price__wrapper__theater__wrapperProgram}>
                            <div className={classes.price__wrapper__theater__wrapperProgram_first}>
                                <p className={classes.price__wrapper__sign__adults_explaination}>
                                    - Развитие творческого потенциала ребёнка; <br />
                                    - развитие фантазии и воображение;<br />
                                    - развитие внимания и памяти;<br />
                                    - умение  владеть собой и своими эмоциями;<br />
                                    - избавление от страхов: не бояться сцены и зрителя;<br />
                                    - умение выступать на публике;<br />
                                    - работа над ритмом и пластикой 
                                </p>
                            </div>
                            <div className={classes.price__wrapper__theater__wrapperProgram_second}>
                                <p className={classes.price__wrapper__sign__adults_explaination}>
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
                                <p className={classes.price__wrapper__sign__adults_title}>7 - 11 лет </p>
                                <p className={classes.price__wrapper__sign__adults_descr}>
                                    Занятия два раза в неделю длительностью полтора часа.<br/>
                                    <br/>
                                    Среда 19.00-20.30<br/>
                                    Воскресенье 11.00-12.30
                                </p>
                                <p className={classes.price__wrapper__sign__adults_firstLesson}>Первое занятие - бесплатно</p>
                                <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                                <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                    90 минут  - 40 злотых
                                </p>
                                <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                                <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                8 занятий - 280 злотых 
                                </p>
                            </div>

                            <div className={classes.price__wrapper__theater__category__block}>
                                <p className={classes.price__wrapper__sign__adults_title}>12 - 17 лет</p>
                                <p className={classes.price__wrapper__sign__adults_descr}>
                                    Занятия два раза в неделю длительностью один час
                                    <br className={classes.price__wrapper__sign__adults_descr_hideMobilePhone}/>
                                    <br className={classes.price__wrapper__sign__adults_descr_hideMobilePhone}/>
                                    <br className={classes.price__wrapper__sign__adults_descr_hide}/>
                                    <br className={classes.price__wrapper__sign__adults_descr_hide}/>
                                    Воскресенье 13.00-15.00
                                </p>
                                <p className={classes.price__wrapper__sign__adults_firstLesson}>Первое занятие - бесплатно</p>
                                <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                                <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                    60 минут  - 40 злотых 
                                </p>
                                <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                                <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                    8 занятий - 260 злотых  
                                </p>
                            </div>
                            <div  className={classes.price__wrapper__theater__category_devider}/>
                        </div>
                    </div> */}

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
                                    <p className={classes.price__wrapper__sign__adults_firstLesson}>Первое занятие - 30 злотых</p>
                                    <div className={classes.price__wrapper__sign__adults__pricing}>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 занятие</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                45 минут  - 55 злотых<br/>
                                                60 минут - 65 злотых 
                                            </p>
                                        </div>
                                        <div className={`${classes.price__wrapper__sign__adults__pricing__item} ${classes.price__wrapper__sign__adults__pricing__item__mobileHide}`}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 месяц</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 200 злотых <br/>
                                                6 занятия - 290 злотых  <br/>
                                                8 занятий - 380 злотых  <br/>
                                            </p>
                                        </div>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Групповые занятия</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>60 минут - 40 злотых</p>
                                        </div>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item__mobile}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 месяц</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 180 злотых <br/>
                                                6 занятия - 260 злотых  <br/>
                                                8 занятий - 360 злотых  <br/>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  45 минут</p>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней </p>
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
                                    <p className={`${classes.price__wrapper__sign__adults_firstLesson} ${classes.price__wrapper__sign__adults_firstLesson_topDistance}`}>Первое занятие - 30 злотых</p>
                                    <div className={classes.price__wrapper__sign__adults__pricing}>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 занятие</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                45 минут  - 50 злотых<br/>
                                                60 минут - 60 злотых 
                                            </p>
                                        </div>
                                        <div className={`${classes.price__wrapper__sign__adults__pricing__item} ${classes.price__wrapper__sign__adults__pricing__item__mobileHide}`}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 месяц</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 180 злотых <br/>
                                                6 занятия - 260 злотых  <br/>
                                                8 занятий - 360 злотых  <br/>
                                            </p>
                                        </div>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>Групповые занятия</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>60 минут - 40 злотых </p>
                                        </div>
                                        <div className={classes.price__wrapper__sign__adults__pricing__item__mobile}>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_priceLesson}>1 месяц</p>
                                            <p className={classes.price__wrapper__sign__adults__pricing__item_amountLesson}>
                                                4 занятия  - 180 злотых <br/>
                                                6 занятия - 260 злотых  <br/>
                                                8 занятий - 360 злотых  <br/>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Длительность  45 минут</p>
                                    <p className={classes.price__wrapper__sign__adults_afterAll}>Абонементы действуют 31 календарных дней </p>
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
                                        <p className={classes.price__wrapper__sign__adults_title}>7 - 11 лет </p>
                                        <p className={classes.price__wrapper__sign__adults_descr}>
                                            Занятия два раза в неделю длительностью полтора часа.<br/>
                                            <br/>
                                            Среда 19.00-20.30<br/>
                                            Воскресенье 11.00-12.30
                                        </p>
                                        <p className={classes.price__wrapper__sign__adults_firstLesson}>Первое занятие - бесплатно</p>
                                        <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                                        <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                            90 минут  - 40 злотых
                                        </p>
                                        <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                                        <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                        8 занятий - 280 злотых 
                                        </p>
                                    </div>
    
                                <div className={`${classes.price__wrapper__theater__category__block} ${classes.price__wrapper__theater__category__blockLast}`}>
                                    <p className={classes.price__wrapper__sign__adults_title}>12 - 17 лет</p>
                                    <p className={classes.price__wrapper__sign__adults_descr}>
                                        Занятия два раза в неделю длительностью один час
                                        <br />
                                        <br className={classes.price__wrapper__sign__adults_descr_hideMobilePhone}/>
                                        <br className={classes.price__wrapper__sign__adults_descr_hide}/>
                                        Воскресенье 13.00-15.00
                                    </p>
                                    <p className={`${classes.price__wrapper__sign__adults_firstLesson} ${classes.price__wrapper__sign__adults_firstLesson_topDistance}`}>Первое занятие - бесплатно</p>
                                    <p className={classes.price__wrapper__sign__adults_priceLesson}>1 занятие</p>
                                    <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                        60 минут  - 40 злотых 
                                    </p>
                                    <p className={classes.price__wrapper__sign__adults_priceLesson}>1 месяц</p>
                                    <p className={classes.price__wrapper__sign__adults_amountLesson}>
                                        8 занятий - 260 злотых  
                                    </p>
                                </div>
                                <div  className={classes.price__wrapper__theater__category_devider}/>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing