const express = require('express')
const morgen =require('morgan')
const cors = require('cors')
const bodyParse =require('body-parser')
const connectDB = require('./Config/DB')

const {readdirSync, read} = require('fs')

const app = express()
connectDB()

app.use(morgen('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))

readdirSync('./Routes')
.map((r)=> app.use('/api',require('./Routes/'+r)))

app.listen(5000,()=>console.log('Server runing start port 5000'))