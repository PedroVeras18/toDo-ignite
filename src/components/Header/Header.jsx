import React from "react";
import './Header.css'

import Logo from  '../../assets/logo.png'

export default function Header(){
    return(
        <div className="Header">
            <div className="LogoHeader">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}