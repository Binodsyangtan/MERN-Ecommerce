import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,

    },
    tags:{
        type:[String],
        default: []
    },
    category:{
        type:String,
        required:true,
    },
    imgSrc:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    },
})


export const Blogs = mongoose.model("Blogs",blogSchema)