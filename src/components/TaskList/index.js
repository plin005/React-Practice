import React from 'react'
import PropTypes from 'prop-types';
import { ToDoSection, ToDoList, ToDoItem } from './style'

class TaskList extends React.Component {
    static propTypes = {
        toDoList: PropTypes.array.isRequired,
        removeTask: PropTypes.func.isRequired
    } 

    removeItem (itemIndex) {
        this.props.removeTask(itemIndex);
    }

    render() {
        const { toDoList } = this.props
        return (
            <ToDoSection>
                <ToDoList>
                    {
                        toDoList.map(
                            (toDoItem, itemIndex) =>
                                <ToDoItem key={itemIndex} onClick={this.removeItem.bind(this,itemIndex)} >
                                    <span>{toDoItem}</span>
                                </ToDoItem>
                        )
                    }
                </ToDoList>
            </ToDoSection>
        )
    }
}


export default TaskList