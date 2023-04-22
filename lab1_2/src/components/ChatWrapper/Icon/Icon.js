import React from "react";
import "./Icon.css";

function Icon(props) {
    return (
        <button className="icon" onClick={() => props.onClick(true)}>
            Icon
        </button>
    );
}

export default Icon;
