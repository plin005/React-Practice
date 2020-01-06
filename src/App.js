import React, { Component } from 'react';
import './App.css';
import TaskAddingBar from './components/TaskAddingBar';
import TaskList from './components/TaskList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoList: ['task1', 'task2', 'task3']
    }
  }

  addTask(newTask) {
    const { toDoList } = this.state
    toDoList.unshift(newTask)
    this.setState({ toDoList })
  }

  removeTask(taskIndex) {
    const { toDoList } = this.state
    toDoList.splice(taskIndex,1)
    console.log(`deleteTask: ${toDoList}`)
    this.setState({toDoList})
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <TaskAddingBar addTask={this.addTask.bind(this)} count={this.state.toDoList.length} />
        <TaskList removeTask={this.removeTask.bind(this)} toDoList={this.state.toDoList} />
      </div>
    )
  }
}

export default App;
