import React from 'react';

const EditTodoForm = (props) => {
    const { handleChange, inputs, handleEdit } = props;
    return (
        <form onSubmit={ handleEdit } className="edit-form">
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

export default EditTodoForm;
