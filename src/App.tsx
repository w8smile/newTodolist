import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid';

export type FilterValueType = 'all' | 'completed' | 'active'

function App() {
    let [filter, setFilter] = useState<FilterValueType>('all')

    let [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
        ]
    )

    let taskForTodolist = tasks;
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }

    let addTask = (title: string) => {
        let newTask={id: v1(), title: title, isDone: false};
        let newTasks=[newTask,...tasks]
        setTasks(newTasks)
    }
    let changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }


    // const tasks2: TaskType[] = [
    //   {id: 1, title: 'Water', isDone: true},
    //   {id: 2, title: 'GoodMorning', isDone: true},
    //   {id: 3, title: 'Health', isDone: true},
    //   {id: 4, title: 'Meditation', isDone: true},
    //   {id: 5, title: 'Workout', isDone: true},
    // ]
    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
            {/*<Todolist title='Lifestyle' tasks={tasks2}/>*/}
        </div>
    );
}

export default App;
