import React from 'react'


const AuthForm = (props) => {
    const { handleSubmit, handleChange, inputs, errMsg } = props
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                name="username"
                value={ inputs.username }
                onChange={ handleChange }
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={ inputs.password }
                onChange={ handleChange }
                placeholder="Password"
            />
            <button>Submit</button>
            <h4>{ errMsg }</h4>
        </form>
    )
}

export default AuthForm;
