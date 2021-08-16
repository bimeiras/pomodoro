import React from "react";

import "../styles/Global.css";

import backgroundImage from "../assets/tomatoes.png";

function Footer() {
    return (    
        <div className="footer">
            <img src={backgroundImage}  alt="tomatoes"/>
        </div>
        )
};

export default Footer;