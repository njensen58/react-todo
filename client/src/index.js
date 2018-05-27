import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import App from './App'
import './style/style.css'




ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider >,
document.getElementById('root'))
