const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    time:{
        type:String
    }
})

const User = mongoose.model("member",userSchema)
module.exports = User