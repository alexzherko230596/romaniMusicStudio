import React from "react";
import { Link } from "react-scroll";
import classes from './MainPage.module.scss'

const MainPage = () => {
    return(
        <div className={classes.main}>
            <div className="g-container">
                <div className={classes.main__wrapper}>
                    <h1 className={classes.main__wrapper_title}>Вокально-театральная студия <br className={classes.main__wrapper_title_br}/> в варшаве</h1>
                    <p className={classes.main__wrapper_descr}>Окунись в мир творчества</p>
                    <button className={classes.main__wrapper_button}>
                        <Link
                                to="BlockToScrollMakeAnAppoitment"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                Записаться на первое занятие
                            </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage