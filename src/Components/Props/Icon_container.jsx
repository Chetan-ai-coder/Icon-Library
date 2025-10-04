import React from "react";
import './Icon-container.css'

const Icon_container = (props) => {
    return (
        <>
            <div className="icon-container">
                <i className={props.icon} ></i>
            </div>
        </>
    )
}

export default Icon_container;