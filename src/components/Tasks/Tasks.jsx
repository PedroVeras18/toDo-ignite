import React, { useState } from "react";
import './Tasks.css'

import Task from "../Task/Task";

import { v4 as uuidv4 } from 'uuid';
import { FaClipboardList } from 'react-icons/fa'

const listTasks = [
    {
        id: uuidv4(),
        title: "Terminar o desafio",
        isComplete: true
    },
    {
        id: uuidv4(),
        title: "Estudar Typescript",
        isComplete: false
    },
]

export default function Tasks(){
    const [tasks, setTasks] = useState(listTasks)

    const emptyTasksArray = tasks.length === 0

    return(
        <div className="Tasks">

            <div className="NumberTasksCreatedAndFinished">
                <div className="NumberTasksCreated">
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>
                <div className="TasksFinished">
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </div>

            {emptyTasksArray && (
                <div className="emptyTasksArray">
                    <FaClipboardList color="#808080" size={50} />
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
            
            {tasks.map((task) => {
                return(
                    <Task
                        titleTask={task.title}/>
                )
            })}

        </div>
    )
}