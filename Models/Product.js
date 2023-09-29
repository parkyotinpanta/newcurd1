const mongoose = require('mongoose')
    const productSchema = mongoose.Schema({
        name:String,
        datail:{
            type:String
        },
        price:{
            type:Number
        }

    },{timestamps: true}) 

    module.exports = mongoose.model('product',productSchema)