import React from "react";
import ItemFeedback from "../ItemFeedback/ItemFeedback";
import TitleBlock from "../TitleBlock/TitleBlock";
import classes from './Feedback.module.scss'
import Carousel from '@itseasy21/react-elastic-carousel';
import dataFeedback from "../ItemFeedback/dataFeedback";
import MobileFeedbackList from "../ItemFeedback/MobileFeedbackList";


const Feedback = () => {
    return(
        <section className={classes.feedback} id = 'BlockToScrollFeedbacks'>
            <div className="g-container">
                <TitleBlock title = {'Отзывы'}/>
                <div  className={classes.feedback__wrapper}>
                    <ItemFeedback />
                    <div className={classes.feedback__wrapper_blur}/>
                </div>
                
                <div className={classes.feedback__mobile}>
                    <Carousel>
                        {dataFeedback.map((item) =>
                            <MobileFeedbackList
                                key={item.id}
                                name={item.name}
                                text = {item.text}
                                inst = {item.instagram}
                                facebook = {item.facebook}
                                img = {item.image}
                                alt = {item.alt}
                            />)}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Feedback