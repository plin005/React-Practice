import React from 'react'
import PropTypes from 'prop-types';

class TaskAddingBar extends React.Component {
    static propTypes = {
        addTask: PropTypes.func.isRequired,
        count: PropTypes.number.isRequired
    }

    handleAdd(event) {
        event.preventDefault()//to avoid reloading
        // const newTask = this.toDoInput.value.trim()
        const newTask = this.refs.addTaskInput.value.trim()
        if(!newTask) return

        this.props.addTask(newTask)
        
        //Clear input value after adding
        // this.toDoInput.value = ''
        this.refs.addTaskInput.value = ""
    }

    render() {
        return (
            <div>
                <form >
                    {/* <input placeholder="New Task" ref={input => { this.toDoInput = input }} /> */}
                    <input placeholder="New Task" ref="addTaskInput" />
                    <button onClick={this.handleAdd.bind(this)}>Add #{this.props.count+1}</button>
                </form>
            </div>
        )
    }
}

export default TaskAddingBar;