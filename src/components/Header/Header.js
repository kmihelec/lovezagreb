import React, {useState} from "react";
import style from "./Header.module.css"
import {useSelector} from "react-redux";
import NavItem, {Dropdown} from "./NavItem";

const Header = () => {
    const nav = useSelector(state=> state.settings.headerNav);
    const [classname, setClassname] = useState(`${style.navigation}`)
    const toggleMenu = () => {
        if (classname === `${style.navigation} ${style.expand}`) setClassname(`${style.navigation}`)
        else setClassname(`${style.navigation} ${style.expand}`)
    }

    return (
        <header className={style.header} >
            <div className={style.wrapper}>
                <div className={style.logo}>Love Zagreb</div>
                 <div className={classname} >
                     {nav.map(navItem => {return(
                         navItem.nodes ? <Dropdown item={navItem} key={navItem.ID} /> :
                         <NavItem item={navItem} key={navItem.ID}/>)
                     })}

                 </div>
                <div className={style.mobile} onClick={toggleMenu}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                 <input type="text" className={style.search} placeholder="Search Lovezagreb.hr"/>
            </div>
        </header>
    )
}

export default Header