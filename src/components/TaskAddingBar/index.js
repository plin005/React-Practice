import React, {useRef} from 'react'
import PropTypes from 'prop-types';

const TaskAddingBar = (props) => {

    const taskInput = useRef(null)
    const handleAdd = (event) => {
        event.preventDefault()//to avoid reloading
        const newTask = taskInput.current.value.trim()

        if(!newTask) return

        props.addTask(newTask)
        taskInput.current.value = ""
    }

    return (
        <div>
            <form >
                <input placeholder="New Task" ref={taskInput} />
                <button onClick={handleAdd}>Add #{props.count+1}</button>
            </form>
        </div>
    )
}

TaskAddingBar.propTypes = {
    addTask: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default TaskAddingBar;