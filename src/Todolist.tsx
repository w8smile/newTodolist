import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export type TodolistPropsType = {
    tasks: TaskType[]
    title: string
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void

}


export const Todolist = (props: TodolistPropsType) => {
    let [newTaskTitle, setTaskNewTitle] = useState('')
    const onNewTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setTaskNewTitle('')
        }
    }
    const addTaskHandler = () => {
        props.addTask(newTaskTitle)
        setTaskNewTitle('')
    }
    const onAllClickHandler = () =>  props.changeFilter('all')
    const onActiveClickHandler = () =>  props.changeFilter('active')
    const onCompletedClickHandler = () =>  props.changeFilter('completed')
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTaskHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+
                </button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    const onRemoveHandler = () => {
                        props.removeTask(el.id)
                    }
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>X</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>


        </div>
    );
};

