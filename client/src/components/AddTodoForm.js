import React from 'react';

const AddTodoForm = (props) => {
    const { handleChange, inputs, handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit } className="add-todo-form">
            <input
                type="text"
                name="title"
                value={ inputs.title }
                onChange={ handleChange }
                placeholder="Title"
            />
            <input
                type="text"
                name="description"
                value={ inputs.description }
                onChange={ handleChange }
                placeholder="Description"
            />
        <button>Submit</button>
        </form>
    )
}

export default AddTodoForm;
