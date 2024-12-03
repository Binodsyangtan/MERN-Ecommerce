import mongoose from "mongoose";


const userSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
   
    password:{
        type:String,
        required:true,
    },
    role:[{
        type:String,
        enum:["admin","user","seller"],
        default:"user",  //if role provide garena vane default user huxna

    }],
    createAt:{
        type:Date,
        default:Date.now
    },

});
const User = mongoose.model("User", userSchema);


export default User