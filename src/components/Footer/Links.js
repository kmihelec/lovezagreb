import style from "./Footer.module.css";
import React from "react";


const Links = () => {

    return (
        <div>
            <div className={style.title}>Topics</div>
            <div className={style.links}>
                <a className={style.link} href={'http://www.infozagreb.hr?lang=en'} target={"_blank"} rel="noopener noreferrer">Tourist info</a>
                <a className={style.link} href={'http://www.meetinzagreb.hr?lang=en'} target={"_blank"} rel="noopener noreferrer">Convention Bureau</a>
                <a className={style.link} href={'http://www.adventzagreb.com?lang=en'} target={"_blank"} rel="noopener noreferrer">Advent Zagreb</a>
                <a className={style.link} href={'http://www.zagrebplaces.com?lang=en'} target={"_blank"} rel="noopener noreferrer">Zagreb places</a>
                <a className={style.link} href={'http://www.festivalsvjetlazagreb.hr?lang=en'} target={"_blank"} rel="noopener noreferrer">Festival of Lights Zagreb</a>
            </div>
        </div>
    )
}

export default Links