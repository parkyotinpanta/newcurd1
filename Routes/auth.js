const express = require('express')
const route = express.Router()


route.get('/auth',(req,res)=>{
    res.send('get ได้2')
})



module.exports = route