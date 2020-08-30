import React from "react";

const Button = (props) => {
    const style = {
        backgroundColor: props.bgClr,
        border: props.border,
        fontSize: props.fontsize,
        padding: '15px 30px',
        borderRadius: '3px',
        color: props.color,

    }
    return (
        <div className={props.classname} style={style}>{props.name}</div>
    )
}

export default Button