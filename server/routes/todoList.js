const express = require('express')
const todoListRoutes = express.Router()
const Todo = require('../models/todo')


// get all todos that have a user id equal to the requestors id
todoListRoutes.get("/", (req, res) => {
    Todo.find({ user: req.user._id }, (err, todos) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(todos)
    })
})

// Create a new todo and add the user's Id to it's user property //
todoListRoutes.post("/", (req, res) => {
    const todo = new Todo(req.body)
    todo.user = req.user._id
    todo.save((err, newTodo ) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newTodo)
    })
})

// Get todo of specific ID if it's user Id matches the requestors ID.
todoListRoutes.get("/:todoId", (req, res) => {
    Todo.findOne({ _id: req.params.id, user: req.user._id }, (err, todo) => {
        if (err) return res.status(500).send(err)
        if (!todo) return res.status(404).send("No todo item found.")
        return res.send(todo)
    })
})

// Update an existing Todo if it's id and user id matches the requestors id
todoListRoutes.put("/:todoId", (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId, user: req.user._id },
        req.body,
        { new: true },
        (err, todo) => {
            if (err) return res.status(500).send(err)
            return res.send(todo)
        }
    )
})

// Delete specific todo
todoListRoutes.delete("/:todoId", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id, user: req.user._id }, (err, todo) => {
        if (err) return res.status(500).send(err)
        return res.send(todo)
    })
})


module.exports = todoListRoutes;
