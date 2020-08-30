import style from "./Footer.module.css";
import React from "react";
import fbLogo from "../../icons/fb-icon.png";
import twLogo from "../../icons/tw-icon.png";
import igLogo from "../../icons/ig-icon.png";

const Follow = () => {

    const imgStyle = {
        padding: "10px"
    }

    return (
        <div>
            <div className={style.title}>Follow us via social media</div>
            <p className={style.nonLink}>#VisitZagreb #Zagreb #LoveZagreb</p>
            <div className={style.icons}>
                <a href={"http://www.facebook.com/visitzagreb"} target={"_blank"}  rel="noopener noreferrer">
                    <img style={imgStyle} src={fbLogo} alt={"Facebook Logo"} width={"30px"} />
                </a>
                <a href={"https://twitter.com/zagreb_tourist"} target={"_blank"}  rel="noopener noreferrer">
                    <img style={imgStyle} src={twLogo} alt={"Twitter Logo"} width={"40px"} />
                </a>
                <a href={"https://www.instagram.com/zagrebtourist/"} target={"_blank"}  rel="noopener noreferrer">
                    <img style={imgStyle} src={igLogo} alt={"Instagram Logo"} width={"38px"}/>
                </a>
            </div>
        </div>
    )
}

export default Follow