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
    changeCheckbox: (tid: string, isDone: boolean) => void
    filter: FilterValueType

}


export const Todolist = (props: TodolistPropsType) => {
    let [newTaskTitle, setTaskNewTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const onNewTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setTaskNewTitle('')
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim()!==''){
            props.addTask(newTaskTitle)
            setTaskNewTitle('')
        } else {
            setError('Title is retuqecdqwe')
        }

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
                       onKeyPress={onKeyPressHandler}
                className={error ? 'error' : ''}/>
                <button onClick={addTaskHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {props.tasks.map(el => {
                    const onRemoveHandler = () => {
                        props.removeTask(el.id)
                    }

                    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeCheckbox(el.id, e.currentTarget.checked)

                    }
                    return (
                        <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <input onChange={onChangeCheckboxHandler}
                                type="checkbox"
                                checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>X</button>
                        </li>
                    )
                })}
            </ul>
            <button className={props.filter==='all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
            <button  className={props.filter==='active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter==='completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>

        </div>
    );
};

