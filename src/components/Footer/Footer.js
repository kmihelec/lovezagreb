import React from "react";
import style from "./Footer.module.css"
import Menu from "./Menu";
import Topics from "./Topics";
import Links from "./Links";
import Follow from "./Follow";

const Footer = () => {

    const styleP={
        padding: "20px",
        color: "#A9A9A9"
    }

    return (
        <footer className={style.footer}>
           <div className={style.footerLinks} >
               <div className={style.wrapper}>
                    <Menu />
                    <Topics />
                    <Links />
                    <Follow />
               </div>
           </div>
            <div className={style.footerRights}>
                <div className={style.wrapper}>
                    <p style={styleP}>LoveZagreb.hr 2016 All Rights Reserved</p>
                    <img src={'https://www.lovezagreb.hr/assets/borming-logo.svg'} alt={"logo.svg"} width={"22px"} style={{marginRight: "20px"}} />
                </div>
            </div>
        </footer>
    )
}

export default Footer