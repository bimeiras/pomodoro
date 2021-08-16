import React, { useState } from "react";

import "../styles/Global.css";
import "../styles/ToDoList.css";

function Item (props) {

    return (
        <>
            <div className="item">
                <input className="checkbox" type="checkbox"/>
                <span>{props.text}</span>
            </div>
        </>
    )

};

export default Item;

