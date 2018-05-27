import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import user from './auth'
import todos from './todos'

const rootReducer = combineReducers({
    todos,
    user
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
