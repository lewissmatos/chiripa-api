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
    phone:{
        type:String,
        trim:true
    },
    instagram:{
        type:String,
        trim:true
    },
    linkedin:{
        type:String,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    },
    role:{
        enum:['USER_ROLE','POSTER_ROLE']
    },
    areas:[
        {type:String, trim:true}
    ],
    rate:{
        type:Number,
        default: 0
    },

})

module.exports = model('User', UserSchema)