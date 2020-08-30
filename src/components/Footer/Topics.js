import {useSelector} from "react-redux";
import style from "./Footer.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Topics = () => {
    const nav = useSelector(state => state.page.topics)

    return (
        <div>
            <div className={style.title}>Topics</div>
            <div className={style.links}>
                {nav.map(topicLink => (
                    <NavLink key={topicLink.ID} className={style.link} to={topicLink.link}>{topicLink.name}</NavLink>
                ))}
            </div>
        </div>
    )

}

export default Topics