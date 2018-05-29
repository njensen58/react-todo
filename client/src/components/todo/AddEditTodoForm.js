import React from 'react';

const AddEditTodoForm = (props) => {
    const { handleChange, inputs: { title, description }, handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit } className="add-todo-form">
            <input
                type="text"
                name="title"
                value={ title }
                onChange={ handleChange }
                placeholder="Title"
            />
            <input
                type="text"
                name="description"
                value={ description }
                onChange={ handleChange }
                placeholder="Description"
            />
        <button>Submit</button>
        </form>
    )
}

export default AddEditTodoForm;
