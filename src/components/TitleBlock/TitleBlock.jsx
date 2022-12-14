import React from "react";
import classes from './TitleBlock.module.scss'

const TitleBlock = (props) =>{
    return(
        <h2 className={classes.title}>{props.title}</h2>
    )
}

export default TitleBlock