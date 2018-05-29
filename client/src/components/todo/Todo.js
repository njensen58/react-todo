import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../../redux/todos'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import AddEditTodoForm from './AddEditTodoForm'



const Todo = props => {
    const { title, _id, description } = props.item;
    return (
        <div className="todo">
            <h1>{ title }</h1>
            <Toggle render={({ toggle, isToggled }) =>
                <div className="todo-toggle">
                    <button onClick={ toggle }>{ isToggled ? 'Close Edit' : 'Edit' }</button>
                    <button onClick={ () => props.deleteTodo( _id ) }> Delete </button>
                    { isToggled &&
                        <Form
                            reset
                            inputs={{ title, description }}
                            submit={ inputs => props.editTodo( _id, inputs ) }
                            render={ props => (<AddEditTodoForm { ...props }/>) }
                        />
                    }
                </div>
            }/>
        </div>
    )
}

export default connect(null, { deleteTodo, editTodo })(Todo);
