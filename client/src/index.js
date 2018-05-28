import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import App from './App'
import './style/style.css'


store.subscribe(() => {
    let token = localStorage.getItem("token")
    console.log(store.getState())
})


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider >,
document.getElementById('root'))
