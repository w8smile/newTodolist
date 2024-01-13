import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

  const tasks1: TaskType[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
    {id: 3, title: 'ReactJS', isDone: false},
  ]

  const tasks2: TaskType[] = [
    {id: 1, title: 'Workout', isDone: true},
    {id: 2, title: 'GoodMorning', isDone: true},
    {id: 3, title: 'Health', isDone: true},
  ]
  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks1}/>
      <Todolist title='Lifestyle' tasks={tasks2}/>

    </div>
  );
}

export default App;
