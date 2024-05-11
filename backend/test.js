const express = require("express");
const session = require('express-session');
// const app = express();

// app.use(session({   
//     secret: "very very",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }

// }))

const {app} = require('./app')

app.get('/test', (req, res) => {
    console.log("in test: ", req.session.userName);
    res.send({ message: req.session.userName });
})

app.get('/login', (req, res) => {  
    req.session.userName = "John Doe";
    res.send("Login Successful")
 })


app.listen(9000, () => {
    console.log("Server is running on port 8000");
})