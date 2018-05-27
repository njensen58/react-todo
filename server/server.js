const express = require('express')
const app = express()
require("dotenv").config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 4060

// config middleware //
app.use(bodyParser.json())
app.use(morgan('dev'))


// Connect to the database //
mongoose.connect('mongodb://localhost/todoApp', (err) => {
    if (err) throw err
    console.log('Connected to the database')
})


// Require JWT on any route beginning with api
app.use('/api', expressJwt({ secret: process.env.SECRET }))


// ROUTES //
app.use('/auth', require('./routes/auth'))
app.use('/api/todo', require('./routes/todoList'))


// SERVER //
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
