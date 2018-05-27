// Used to create a new account (signup), and receive their JWT (login).
// Will also send JWT with signup success.

const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')


authRouter.post("/signup", (req, res) => {
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        // Check for errors / existing user
        if (err)
            return res.status(500).send({ success: false, err })

        if (existingUser !== null) {
            return res.status(400).send({ success: false, err: "That username already exists" })
        }

        // Create new user and send jwt token if no errors
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ sucess: false, err })

            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({ success: true, user: user.toObject(), token })
        })
    })
})



authRouter.post("/login", (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err)

        // If the username does not exist or the password does not match an existing one
        if (!user || user.password !== req.body.password) {
            return res.status(403).send({ success: false, err: "Email or password are incorrect" })
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.send({ token: token, user: user.toObject(), success: true })
    })
})

module.exports = authRouter
