import React from "react";
import style from "./MainBody.module.css"

const SmallStory = ({item}) => {

    const bgUrl = {
        backgroundImage: `url(https://www.lovezagreb.hr//media/news/medium_${item.FileName})`
    }

    return (
        <div className={style.storySmall} >
            <div className={style.img} style={bgUrl} />
            <div className={style.content}>
                <h1 className={style.titleSmall}>{item.naslov}</h1>
                <div className={style.headingSmall}>{item.heading}</div>

                <div className={style.bottom}>
                    <div className={style.likes}><span style={{marginLeft: "25px"}}>{item.Likes}</span></div>
                    <div className={style.hashtag}>{item.datum_od}<br/><span style={{color: "#BB911A"}}>{item.TopicName}</span></div>
                </div>
            </div>
        </div>
    )

}



export default SmallStory