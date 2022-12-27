import React, { useState } from "react";
import './Tasks.css'

import Task from "../Task/Task";

import { v4 as uuidv4 } from 'uuid';
import { FaClipboardList } from 'react-icons/fa'
import { MdAddCircleOutline } from 'react-icons/md'

export default function Tasks(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleAddNewTask(){

        const addNewTask = {
            id: uuidv4(),
            title: newTask,
            isComplete: false,
        }
        setTasks([...tasks, addNewTask])
        setNewTask("")
    }

    function handleDeleteTask(taskSelected){
        const newTasksArray = tasks.filter((task) => {
            return task.id !== taskSelected
    })

        setTasks(newTasksArray)
    }

    function handleNewTaskChange(e){
        setNewTask(e.target.value)
    }

    const emptyTasksArray = tasks.length === 0
    const numberTasksCreated = tasks.length

    return(
        <div className="Tasks">
            <div className="CreateNewTask">
                <div className="InputNewTask">
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange} />
                </div>
                <div className="ButtonNewTask">
                    <button onClick={handleAddNewTask}>
                        Criar
                        <MdAddCircleOutline color="#F2F2F2" size={22}/>
                    </button>
                </div>
            </div>

            <div className="NumberTasksCreatedAndFinished">
                <div className="NumberTasksCreated">
                    <p>Tarefas criadas</p>
                    <span>{numberTasksCreated}</span>
                    {}
                </div>
                <div className="TasksFinished">
                    <p>Concluídas</p>
                    <span>0 de {numberTasksCreated}</span>
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
                        key={task.id}
                        titleTask={task.title}
                        onDeleteTask={() => handleDeleteTask(task.id)}
                    />
                )
            })}

        </div>
    )
}