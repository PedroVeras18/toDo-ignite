import React, { useState } from "react";
import './Task.css'

import { FaTrashAlt, FaCheck } from 'react-icons/fa'

export default function Task({ titleTask }){
    const [stateTaskCompleted, setStateTaskCompleted] = useState(true)

    function alterCheckTask(){
        setStateTaskCompleted(value => !value)
    }

    return(
        <div className={stateTaskCompleted ? "CardTaskCompleted" : "CardTaskNotCompleted"}>
            <div className="ButtonAndTitleTask">
                <div className="ButtonCheckedTask">
                    {stateTaskCompleted ?
                        <button className="TaskCompleted" onClick={alterCheckTask}>
                            <FaCheck size={11} color="#F2F2F2"/>
                        </button>
                    :
                        <button className="TaskNotCompleted" onClick={alterCheckTask}></button>
                    }
                </div>
                <div className="TitleTask">
                    {stateTaskCompleted ? 
                        <p className="TitleTaskCompleted"><s>{titleTask}</s></p>
                    :
                        <p className="TitleTaskNotCompleted">{titleTask}</p>
                    }
                </div>
            </div>
            <div className="DeleteTask">
                <FaTrashAlt color="#808080"/>
            </div>
        </div>
    )
}