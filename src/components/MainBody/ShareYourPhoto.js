import style from "./MainBody.module.css";
import Button from "../Button";
import React from "react";

const ShareYourPhoto = () => {
    return<div className={style.storySmall} >
        <div className={style.shareYourPhoto}>
            <h1 className={style.title}>Share your photo</h1>
            <div className={style.heading}>Send us your photo of Zagreb with your personal
                details and we will share it on our Photo Wall.</div>

            <Button classname={style.sharePhotoYellow} bgClr={'transparent'} name={'Send a photo'} fontsize={'1.2rem'} border={'2px dashed #fffe05'} color={"#fffe05"}/>
        </div>

    </div>

}

export default ShareYourPhoto