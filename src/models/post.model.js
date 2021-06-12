const { Schema, model} = require("mongoose");

const PostSchema = Schema({
    area:{
        type:String,
        trime:true,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    pay:{
        type:Number
    },
    status:{
        type:Boolean,
        default:false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Post' ,PostSchema)