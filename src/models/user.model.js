const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true
    },
    pass:{
        type:String,
        trim:true,
        select:false
    },
    user:{
        type:String,
        unique:true,
        trim:true
    },
    role:{
        enum:['USER_ROLE','POSTER_ROLE']
    },
})

module.exports = model('User', UserSchema)