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
    social:{
        email:{    
            type:String,
            trim:true
        },
        instagram:{
            type:String,
            trim:true
        },
        twitter:{
            type:String,
            trim:true
        },
        linkedin:{
            type:String,
            trim:true
        },
    },
    desc:{
        type:String,
        trim:true
    },
    role:{
        enum:['WORKER_ROLE','USER_ROLE']
    },
    areas:[
        {type:String, trim:true}
    ],
    rate:{
        type:Number,
        default: 0
    },

}, {timestamps:true, versionKey: false})

module.exports = model('User', UserSchema)