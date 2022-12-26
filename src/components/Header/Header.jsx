import React from "react";
import './Header.css'

import Logo from  '../../assets/logo.png'

import { MdAddCircleOutline } from 'react-icons/md'

export default function Header({ value, onChange }){
    return(
        <div className="Header">
            <div className="LogoHeader">
                <img src={Logo} alt="" />
            </div>
            <div className="CreateNewTask">
                <div className="InputNewTask">
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={value}
                        onChange={onChange} />
                </div>
                <div className="ButtonNewTask">
                    <button>
                        Criar
                        <MdAddCircleOutline color="#F2F2F2" size={22}/>
                    </button>
                </div>
            </div>
        </div>
    )
}