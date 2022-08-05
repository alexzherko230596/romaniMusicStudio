import React from "react";
import { Link } from "react-scroll";
import classes from './Footer.module.scss'
import logo from '../../img/logoLight.svg'
import rights from '../../img/rights.svg'

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className="g-container">
                <div className={classes.footer__wrapper}>
                    <div className={classes.footer__wrapper__logo}>
                        <img src={logo} alt={'logo'} className={classes.footer__wrapper__logo_img}/>
                        <div className={classes.footer__wrapper__logo__rights}>
                            <img src={rights} alt={'rights'} className={classes.footer__wrapper__logo__rights_img}/>
                            <p className={classes.footer__wrapper__logo__rights_year}>2022</p>
                            <p className={classes.footer__wrapper__logo__rights_descr}>All rights reserved</p>
                        </div>
                    </div>
                    <div className={classes.footer__wrapper__ancor}>
                        <ul className={classes.footer__wrapper__ancor__list}>
                            <li className={classes.footer__wrapper__ancor__list_element}>
                                <Link
                                    to="BlockToScrollAboutStudio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    О студии
                                </Link>
                            </li>
                            <li className={classes.footer__wrapper__ancor__list_element}>
                                <Link
                                    to="BlockToScrollTeacher"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Преподаватель
                                </Link>
                            </li>
                            <li className={classes.footer__wrapper__ancor__list_element}>
                                <Link
                                    to="BlockToScrollPrice"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Стоимость
                                </Link>
                            </li>
                            <li className={classes.footer__wrapper__ancor__list_element}>
                                <Link
                                    to="BlockToScrollFeedbacks"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Отзывы
                                </Link> 
                            </li>
                            <li className={classes.footer__wrapper__ancor__list_element}>
                                <Link
                                    to="BlockToScrollMap"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Карта
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer