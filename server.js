const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app =express()

app.use(express.json())

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/appvilla")
.then(()=>{
    console.log("Successfully MongoDB connected")
}) 
.catch((error)=>{
    console.error('Error connected to mongodb:',error)
});

const signinRouter = require('./route/routes')
app.use('/alldata',signinRouter)

app.listen(9000,()=>{
    console.log("On port 9000")
})

   