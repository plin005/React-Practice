import React from 'react'
import PropTypes from 'prop-types';
import { ToDoSection, ToDoList, ToDoItem } from './style'

const TaskList = (props) => {
    const { toDoList } = props

    const removeItem = (itemIndex) => {
        props.removeTask(itemIndex)
    }

    console.log(`TaskList ......${toDoList}`)
    return (
        <ToDoSection>
            <ToDoList>
                {
                    toDoList.map(
                        (toDoItem, itemIndex) =>
                            <ToDoItem key={itemIndex} onClick={removeItem} >
                                <span>{toDoItem}</span>
                            </ToDoItem>
                    )
                }
            </ToDoList>
        </ToDoSection>
    )
}

TaskList.propTypes = {
    toDoList: PropTypes.array.isRequired,
    removeTask: PropTypes.func.isRequired
} 

export default TaskList