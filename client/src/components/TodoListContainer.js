import React, { Component } from 'react'
import List from '../shared/List'
import Form from '../shared/Form'
import Loading from '../shared/Loading'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'
import { connect } from 'react-redux'
import { logout } from '../redux/auth'
import { getTodos, addTodo, deleteTodo, editTodo } from '../redux/todos'


class TodoListContainer extends Component {
    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        const { deleteTodo, addTodo, editTodo, todos } = this.props
        return (
            <div>
                <Form
                    reset
                    inputs={{ title: '', description: '' }}
                    render={ props => ( <AddTodoForm { ...props }/>)}
                    submit={ inputs => addTodo( inputs ) }
                />
                <button onClick={ this.props.logout }>Logout</button>
                <List
                    data={ todos.todos }
                    onDelete={ id => deleteTodo( id ) }
                    onEdit={ editTodo }
                    className="list-container"
                    render={ props => ( <Todo {...props}/> ) }
                />
            </div>
        )
    }
}

export default connect(state=>({ user: state.user, todos: state.todos }),
                { getTodos, addTodo, deleteTodo, editTodo, logout })(TodoListContainer)
