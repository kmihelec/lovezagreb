import {useSelector} from "react-redux";
import style from "./Footer.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    const nav = useSelector(state=> state.settings.footerNav);

    return (
        <div>
            <div className={style.title}>Menu</div>
            <div className={style.links}>
                {nav.map(footerLink => (
                    <NavLink key={footerLink.ID} className={style.link} to={footerLink.link}>{footerLink.name}</NavLink>
                ))}
            </div>
        </div>
    )
}

export default Menu