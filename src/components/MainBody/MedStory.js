import React from "react";
import style from "./MainBody.module.css"
const MedStory = ({item}) => {

    const bgUrl = {
        backgroundImage: `url(https://www.lovezagreb.hr//media/news/medium_${item.FileName})`
    }

     return (<div className={style.storyMed} style={bgUrl}>
        <div className={style.bg} >
            <div><h1 className={style.title}>{item.naslov}</h1>
                <div className={style.heading}>{item.heading}</div>
            </div>
            <div className={style.bottom}>
                <div className={style.likes}><span style={{marginLeft: "25px"}}>{item.Likes}</span></div>
                <div className={style.hashtag}>{item.datum_od}<br/><span style={{color: "#FEC830"}}>{item.TopicName}</span></div>
            </div>
        </div>
    </div> )


}

export default MedStory