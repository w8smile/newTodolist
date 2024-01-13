import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'completed' | 'active'

function App() {
    let [filter, setFilter] = useState<FilterValueType>('all')

    let [tasks, setTasks] = useState<TaskType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'Redux', isDone: false},
        ]
    )

    let taskForTodolist = tasks;
      if (filter==='completed') {
          taskForTodolist=tasks.filter(t=>t.isDone===true)
      }
      if (filter==='active') {
          taskForTodolist=tasks.filter(t=>t.isDone===false)
      }
    let changeFilter =(value:FilterValueType ) => {
          setFilter(value)

    }

    const removeTask = (id: number) => {
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
            />
            {/*<Todolist title='Lifestyle' tasks={tasks2}/>*/}
        </div>
    );
}

export default App;
