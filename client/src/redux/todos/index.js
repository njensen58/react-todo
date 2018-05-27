import axios from 'axios'
const todoAxios = axios.create();


const todoUrl = "/api/todo/"

// Interceptor for Request Header Token //
todoAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})




const setTodos = todos => {
    return {
        type: "SET_TODOS",
        todos
    }
}


export const getTodos = () => {
    return dispatch => {
        todoAxios.get(todoUrl).then(res => {
            dispatch(setTodos(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}


export const addTodo = newTodo => {
    return dispatch => {
        todoAxios.post(todoUrl, newTodo).then(res => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}


export const deleteTodo = id => {
    return dispatch => {
        todoAxios.delete(todoUrl + id).then(res => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editTodo = (id, todo) => {
    return dispatch => {
        todoAxios.put(todoUrl + id, todo).then(res => {
            dispatch(getTodos())
        }).catch(err => {
            console.log(err)
        })
    }
}


const initialTodos = [];


const todosReducer = (todos = initialTodos, action) => {
    switch(action.type){
        case "SET_TODOS":
            return {
                todos: action.todos
            }
        default:
            return todos
    }
}

export default todosReducer;
