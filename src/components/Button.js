import React, {useState} from "react";

import "../styles/Global.css";

function Button(props) {
    const [project, setProject] = useState("Oi luquinhas");

    function handleChange() {
        setProject("Oi bibi");
    };

    return (
        <>
        <button 
            className={props.style}
            onClick={handleChange} 
        >
                {props.action}
                <img src={props.icon}/>
        </button>

        <p>{project}</p>
        </>
    )
};

export default Button;