const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017')
        console.log('DB เชื่อมแล้ว');
    }catch(err){
        console.log(err);
    } 
}

module.exports = connectDB