const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

//actual implementation 
const userModel = mongoose.model('user', userSchema)

//export
module.exports  = userModel 
