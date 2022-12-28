import React from "react";
import './Task.css'

import { FaTrashAlt, FaCheck } from 'react-icons/fa'

export default function Task({ task, alterCheckTask, handleDeleteTask }){
    return(
        <div className={task.isCompleted ? "CardTaskCompleted" : "CardTaskNotCompleted"}>
            <div className="ButtonAndTitleTask">
                <div className="ButtonCheckedTask">
                    {task.isCompleted ?
                        <button className="TaskCompleted" onClick={alterCheckTask}>
                            <FaCheck size={11} color="#F2F2F2"/>
                        </button>
                    :
                        <button className="TaskNotCompleted" onClick={alterCheckTask}></button>
                    }
                </div>
                <div className="TitleTask">
                    {task.isCompleted ? 
                        <p className="TitleTaskCompleted"><s>{task.title}</s></p>
                    :
                        <p className="TitleTaskNotCompleted">{task.title}</p>
                    }
                </div>
            </div>
            <div className="DeleteTask">
                <button onClick={handleDeleteTask}>
                    <FaTrashAlt size={18} color="#808080"/>
                </button>
            </div>
        </div>
    )
}