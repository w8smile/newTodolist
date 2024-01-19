import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from 'uuid';

export type FilterValueType = 'all' | 'completed' | 'active'

type Todolists = {
    id: string
    title: string
    filter: FilterValueType
}

function App() {


    // let [tasks, setTasks] = useState<TaskType[]>(
    //     [
    //         {id: v1(), title: 'HTML&CSS', isDone: true},
    //         {id: v1(), title: 'JS', isDone: true},
    //         {id: v1(), title: 'ReactJS', isDone: false},
    //         {id: v1(), title: 'Redux', isDone: false},
    //     ]
    // )

    let addTask = (title: string, todolistId: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        let tasks=tasksObj[todolistId];
        let newTasks = [newTask, ...tasks];
        tasksObj[todolistId]=newTasks;
        setTasks({...tasksObj})
    }
    const changeFilter = (value: FilterValueType, todolistId: string) => {
        let todolist = todolists.find(t => t.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    };

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [tasksObj, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},],
        [todolistId2]: [
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'GoodMorning', isDone: true},
            {id: v1(), title: 'Health', isDone: true},
            {id: v1(), title: 'Meditation', isDone: true},
            {id: v1(), title: 'Workout', isDone: true},]
    })


    const removeTask = (id: string, todolistId: string) => {
        let tasks=tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todolistId]=filteredTasks;
        setTasks({...tasksObj})
    }
    const changeCheckbox = (taskId: string, isDone: boolean, todolistId: string) => {
        let tasks=tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj})
        }

    }
    let [todolists, setTodolists] = useState<Todolists[]>(
        [
            {id: v1(), title: 'What to learn', filter: 'active'},
            {id: v1(), title: 'What to Buy', filter: 'completed'}
        ]
    )

    return (
        <div className="App">
            {
                todolists.map((tl) => {
                    let taskForTodolist = tasksObj[tl.id];
                    if (tl.filter === 'completed') {
                        taskForTodolist = taskForTodolist.filter(t => t.isDone === true)
                    }
                    if (tl.filter === 'active') {
                        taskForTodolist = taskForTodolist.filter(t => t.isDone === false)
                    }

                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            tasks={taskForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeCheckbox={changeCheckbox}
                            filter={tl.filter}
                        />
                    )
                })
            }
            {/*<Todolist title='Lifestyle' tasks={tasks2}/>*/}
        </div>
    );
}

export default App;
