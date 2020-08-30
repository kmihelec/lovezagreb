import React from "react";
import style from "./MainBody.module.css"

const Loop = ({item}) => {

    const togglePlay = (e) => {
        e.target.play()
    }

    const togglePause = (e) => {
        e.target.pause()
    }

   
    return (
        <div className={style.loop}>
            <video className={style.video} src={`https://www.lovezagreb.hr/${item.MediaFilePath}/${item.FileName}`} loop
                   muted onMouseOver={togglePlay} onMouseLeave={togglePause}></video>
        </div>
    )
}

export default Loop