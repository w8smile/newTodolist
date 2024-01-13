import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type TasksPropsType = {
    tasks: TaskType[]
    title: string
}

export const Todolist = (props: TasksPropsType) => {
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
                        </li>
                    )
                })}
            </ul>


        </div>
    );
};

