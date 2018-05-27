import React from 'react'
import { connect } from 'react-redux'
import SignupLoginPage from './components/SignupLoginPage'
import TodoListContainer from './components/TodoListContainer'





const App = (props) => {
    let auth = props.user.isAuthenticated
    return (
        <div>
            { !auth
                ? <SignupLoginPage />
                : <TodoListContainer />
            }
        </div>
    )
}

export default connect(state=>({ user: state.user }))(App);
