import React from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export type TodolistPropsType = {
    tasks: TaskType[]
    title: string
    removeTask: (id: number) => void
    filteredTasksOnLick: (value: FilterValueType) => void

}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el=>{
                    return(
                        <li>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={()=> props.removeTask(el.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=> props.filteredTasksOnLick('all')}>All</button>
            <button onClick={()=> props.filteredTasksOnLick('active')}>Active</button>
            <button onClick={()=> props.filteredTasksOnLick('completed')}>Completed</button>


        </div>
    );
};

