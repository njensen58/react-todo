import axios from 'axios'


let defaultState = {
    todos: [],
    user: {
        username: '',
        admin: false,
        _id: ''
    },
    authErrCode: {
        signup: '',
        login: ''
    },
    isAuthenticated: false
}


// ACTION CREATORS //

const logon = (success, user) => {
    return {
        type: "LOGON",
        success,
        user
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    return {
        type: "LOGOUT"
    }
}

const handleAuthErr = (key, errCode) => {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}


// SIGNUP FUNCTION - LOGIN FUNCTION //
export const signUp = credentials => {
    return dispatch => {
        axios.post("/auth/signup", credentials)
        .then(response => {
            let { token, user, success } = response.data
            localStorage.setItem("token", token)
            dispatch( logon(success, user) )
        })
        .catch(err => {
            console.log(err)
            dispatch(handleAuthErr("signup", err.response.status))
        })
    }
}


export const signIn = credentials => {
    return dispatch => {
        axios.post("/auth/login", credentials)
        .then(response => {
            let { token, user, success } = response.data
            localStorage.setItem("token", token)
            dispatch( logon(success, user) )
        })
        .catch(err => {
            console.error(err)
            dispatch(handleAuthErr("signin", err.response.status))
        })
    }
}



// AUTHORIZATION REDUCER //
const authReducer = (state = defaultState, action) => {
    switch(action.type){
        case "LOGON":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                authErrCode: {
                    signup: '',
                    login: ''
                }
            }
        case "LOGOUT":
            return {
                ...defaultState
            }
        case "HANDLE_AUTH_ERR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
        default:
            return state
    }
}

export default authReducer;
