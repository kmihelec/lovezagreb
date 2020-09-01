import React from "react";
import style from "./MainBody.module.css"
import './animTopics.css'

const Topics = (props) => {
    const bgUrl = {
        backgroundImage: `url(https://www.lovezagreb.hr//media/news/medium_${props.article.FileName})`
    }
    const id = `topic${props.id}`
    return (

           <div className={style.topicContainer} style={bgUrl} id={id} >
               <div className={style.topic} >
                   <h1>{props.name}</h1>
                   <h2>{props.article.naslov}</h2>
                   <p>{props.article.heading}</p>
               </div>
           </div>
    );
}

export default Topics