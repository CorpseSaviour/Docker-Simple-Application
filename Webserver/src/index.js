//LIB DECLARATIONS
const express = require('express') //SERVER
const cors = require("cors")
const mongoose = require('mongoose') //DB CONNECTION
const bodyParser = require('body-parser') //REQUEST BODY PARSER
const router = require('./router') //SERVER ROUTES

//INITIALIZE EXPRESS
const app = express()

//SET MIDDLEWARES
app.use(cors())
app.use(bodyParser.json())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(3000,()=>{
  console.log("Server started")
})