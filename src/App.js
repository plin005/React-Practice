import React, { useState } from 'react';
import './App.css';
import TaskAddingBar from './components/TaskAddingBar';
import TaskList from './components/TaskList'

const App = () => {
  const [toDoList, setToDoList] = useState(['task1', 'task2', 'task3']);

  const addTask = (newTask) => {
    const currentToDoList = toDoList
    currentToDoList.unshift(newTask)
    setToDoList([...currentToDoList])
  }
  
  const removeTask = (taskIndex) => {
    const currentToDoList = toDoList  
    currentToDoList.splice(taskIndex, 1)
    setToDoList([...currentToDoList])
  }

  return (
    <div className="App">
​      <h1>To Do List</h1>
​      <TaskAddingBar addTask={addTask} count={toDoList.length} />
​      <TaskList removeTask={removeTask} toDoList={toDoList} />
​    </div>
  )
}

export default App;