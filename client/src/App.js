import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import SignupLoginPage from './components/SignupLoginPage'
import TodoListContainer from './components/todo/TodoListContainer'





const App = (props) => {
    let authenticated = props.user.isAuthenticated
    return (
        <div>
            { !authenticated
                ? <SignupLoginPage />
                : <React.Fragment>
                      <Switch>
                          <Route path="/" component={ TodoListContainer }/>
                      </Switch>
                  </React.Fragment>
            }
        </div>
    )
}

export default connect(state=>({ user: state.user }))(App);
