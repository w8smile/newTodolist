import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

export type TodolistPropsType = {
    id: string
    tasks: TaskType[]
    title: string
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValueType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeCheckbox: (tid: string, isDone: boolean, todolistId: string) => void
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
            props.addTask(newTaskTitle, props.id)
            setTaskNewTitle('')
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim()!==''){
            props.addTask(newTaskTitle, props.id)
            setTaskNewTitle('')
        } else {
            setError('Title is required')
        }

    }
    const onAllClickHandler = () =>  props.changeFilter('all', props.id)
    const onActiveClickHandler = () =>  props.changeFilter('active', props.id)
    const onCompletedClickHandler = () =>  props.changeFilter('completed', props.id)
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
                        props.removeTask(el.id, props.id)
                    }

                    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeCheckbox(el.id, e.currentTarget.checked, props.id)

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
            <button className={props.filter==='active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter==='completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>

        </div>
    );
};

