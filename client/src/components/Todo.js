import React from 'react'
import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import EditForm from './EditForm'



const Todo = props => {
    const { onEdit, onDelete, item: { title, _id } } = props;
    return (
        <div className="todo">
            <h1>{ title }</h1>
            <Toggle render={({ toggle, isToggled }) =>
                <div className="todo-toggle">
                    <button onClick={ toggle }>{ isToggled ? 'Close Edit' : 'Edit' }</button>
                    <button onClick={ () => onDelete( _id ) }> Delete </button>
                    { isToggled &&
                        <Form
                            reset
                            inputs={{ title: '', description: '' }}
                            edit={ props => onEdit( _id, props )}
                            render={ props => (<EditForm { ...props }/>) }
                        />
                    }
                </div>
            }/>
        </div>
    )
}

export default Todo;
