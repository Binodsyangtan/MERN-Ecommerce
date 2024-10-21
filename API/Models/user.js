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
    createAt:{
        type:Date,
        default:Date.now
    },

});
const User = mongoose.model("User", userSchema);

// //Default export
export default User