import React from "react";
import style from "./MainBody.module.css";
import './animPictures.css'

const LatestImages = (props) => {

    const id = `pic${props.id}`
    const bgUrl = {
        backgroundImage: `url(https://www.lovezagreb.hr/media/galerije/tb_${props.item.FileName})`
    }

    return (
        <div className={style.hover} id={id}>
            <div className={style.pictureContainer} >
                <div className={style.bgImg} style={bgUrl}></div>
                <div className={style.author}>{props.item.Description}</div>
            </div>
        </div>
    );
}

export default LatestImages