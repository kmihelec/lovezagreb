import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import React from "react";

const NavItem = (props) => {

     return (
        <NavLink to={props.item.link} activeClassName={style.activeItem} className={style.linkItem} >
            {props.item.name}
        </NavLink>
    )
}


export const Dropdown = (props) => {

    return (
        <div className={style.dropdown}>
        <div className={style.linkItem} >{props.item.name}</div>

        <div className={style.dropdownItem}>

            {props.item.nodes.map(node =><NavLink key={node.ID} to={node.link} activeClassName={style.activeItem} className={`${style.dropdownCtn}`} >
                {node.name}
            </NavLink>)}
        </div>
        </div>
    )
}


export default NavItem