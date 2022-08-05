import React from "react";
import classes from './MobileFeedbackList.module.scss'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'

const MobileFeedbackList = (props) => {
    console.log(props)
    return(
        <div className={classes.item}>
            <img src = {props.img} alt = {props.alt} className = {classes.item_img}/>
            <div className={classes.item__wrapper}>
                <p className={classes.item__wrapper_name}>{props.name}</p>
                <p className={classes.item__wrapper_text}>{props.text}</p>
                {props.inst 
                ?
                    <a href={props.inst} target="_blank" rel="noreferrer" className={classes.item__wrapper__social}>
                        <img src = {instagram} alt = {props.alt} className = {classes.item__wrapper__social_img}/>
                    </a>
                :
                    <a href={props.facebook} target="_blank" rel="noreferrer" className={classes.item__wrapper__social}>
                        <img src = {facebook} alt = {props.alt} className = {classes.item__wrapper__social_img}/>
                    </a>
                }
            </div>
        </div>
    )
}

export default MobileFeedbackList