import React, { useState } from "react";
import { Link } from "react-scroll";
import classes from './Header.module.scss'
import logo from '../../img/logo.svg'
import world from '../../img/languagesSelector.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'

const Header = () => {

    const [isBurgerMenu, setBurgerMenu] = useState(true)

    const handleBurger = () => {
        if(isBurgerMenu){
            document.body.style.overflow = "hidden"
        }
        else{
            document.body.style.overflow = "visible"
        }
        setBurgerMenu(prev => !prev)
    }

    const handleAnhor = () => {
        document.body.style.overflow = "visible"
        setBurgerMenu(true)
    }

    return(
        <div className={classes.header}>
            <div className="g-container">
                <div className={classes.header__wrapper}>
                    <img src={logo} alt='main logo' className={classes.header__wrapper_img}/>
                    <ul className={classes.header__wrapper__list}>
                        <li className={classes.header__wrapper__list_item}>
                            <Link
                                // className="linkMenu"
                                // activeClass="linkMenuHover"
                                to="BlockToScrollAboutStudio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                О студии
                            </Link>
                        </li>
                        <li className={classes.header__wrapper__list_item}>
                            <Link
                                to="BlockToScrollTeacher"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Преподаватель
                            </Link>
                        </li>
                        <li className={classes.header__wrapper__list_item}>
                            <Link
                                to="BlockToScrollPrice"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Стоимость
                            </Link>
                        </li>
                        <li className={classes.header__wrapper__list_item}>
                            <Link
                                to="BlockToScrollFeedbacks"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Отзывы
                            </Link>      
                        </li>
                        <li className={classes.header__wrapper__list_item}>
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
                    <div className={classes.header__wrapper__languages}>
                        <img src={world} alt='change language' className={classes.header__wrapper__languages_icon}/>
                        <p className={classes.header__wrapper__languages_text}>RUS</p>
                    </div>
                </div>
            </div>
            <div className={isBurgerMenu ? `${classes.header__mobileMenu} ${classes.header__mobileMenu_tiny}` : `${classes.header__mobileMenu} ${classes.header__mobileMenu_huge}`} onClick = {handleBurger}>
                <div className={isBurgerMenu ? classes.header__mobileMenu__burger : `${classes.header__mobileMenu__burger} ${classes.header__mobileMenu_hidden}`}>
                    <span />
                </div>
                <div className={isBurgerMenu ? `${classes.header__mobileMenu__wrapper} ${classes.header__mobileMenu__wrapper_hide}` : classes.header__mobileMenu__wrapper}>
                    <img src={logo} alt='main logo' className={classes.header__mobileMenu__wrapper_img}/>
                    <ul className={classes.header__mobileMenu__wrapper__list}>
                        <li className={classes.header__mobileMenu__wrapper__list_item}>
                            <Link
                                // className="linkMenu"
                                // activeClass="linkMenuHover"
                                to="BlockToScrollAboutStudio"
                                onClick={handleAnhor}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                О студии
                            </Link>
                        </li>
                        <li className={classes.header__mobileMenu__wrapper__list_item}>
                            <Link
                                to="BlockToScrollTeacher"
                                onClick={handleAnhor}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Преподаватель
                            </Link>
                        </li>
                        <li className={classes.header__mobileMenu__wrapper__list_item}>
                            <Link
                                to="BlockToScrollPrice"
                                onClick={handleAnhor}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Стоимость
                            </Link>
                        </li>
                        <li className={classes.header__mobileMenu__wrapper__list_item}>
                            <Link
                                to="BlockToScrollFeedbacks"
                                onClick={handleAnhor}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Отзывы
                            </Link>      
                        </li>
                        <li className={classes.header__mobileMenu__wrapper__list_item}>
                            <Link
                                to="BlockToScrollMap"
                                onClick={handleAnhor}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Карта
                            </Link>
                        </li>
                    </ul>
                    <div className={classes.header__mobileMenu__wrapper__social}>
                        <a href={'https://t.me/studio_romani'} target="_blank" rel="noreferrer" className={classes.header__mobileMenu__wrapper__social__link}>
                            <img src={telegram} alt='telegram' className={classes.header__mobileMenu__wrapper__social__link_img}/>
                        </a>
                        <a href={'https://www.facebook.com/profile.php?id=100077656080031'} target="_blank" rel="noreferrer" className={classes.header__mobileMenu__wrapper__social__link}>
                            <img src={facebook} alt='facebook' className={classes.header__mobileMenu__wrapper__social__link_img}/>
                        </a>
                        <a href={'https://www.instagram.com/studio_romani/'} target="_blank" rel="noreferrer" className={classes.header__mobileMenu__wrapper__social__link}>
                            <img src={instagram} alt='instagram' className={classes.header__mobileMenu__wrapper__social__link_img}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header