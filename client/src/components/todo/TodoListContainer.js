import React, { Component } from 'react'
import List from '../../shared/List'
import Form from '../../shared/Form'
import Todo from './Todo'
import AddEditTodoForm from './AddEditTodoForm'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth'
import { getTodos, addTodo } from '../../redux/todos'


class TodoListContainer extends Component {
    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        const { addTodo, todos } = this.props
        return (
            <div>
                <Form
                    reset
                    inputs={{ title: '', description: '' }}
                    render={ props => ( <AddEditTodoForm { ...props }/>)}
                    submit={ inputs => addTodo( inputs ) }
                />
                <button onClick={ this.props.logout }>Logout</button>
                <List
                    data={ todos }
                    className="list-container"
                    render={ props => ( <Todo {...props}/> ) }
                />
            </div>
        )
    }
}

export default connect(state=>({ user: state.user, todos: state.todos }),
                { getTodos, addTodo, logout })(TodoListContainer)
