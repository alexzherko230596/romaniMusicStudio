import React from "react";
import classes from './TitleBlock.module.scss'

const TitleBlock = (props) =>{
    return(
        <h3 className={classes.title}>{props.title}</h3>
    )
}

export default TitleBlock