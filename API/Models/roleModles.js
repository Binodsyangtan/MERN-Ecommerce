import mongoose from "mongoose";


const rolesSchema = new  mongoose.Schema({
 
    role:String,

    permissions:[{type:String}]

});
const Role = mongoose.model("Role", rolesSchema);


export default Role