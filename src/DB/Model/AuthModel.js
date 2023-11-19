import mongoose from "mongoose";

const AuthSchema = mongoose.Schema(
{
    email:{
        type: String,

        required:true,
        trim:true,
        unique:true 
    },
    password:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    phone:{
        type:String
    }
},
{
    timestamps:true
}


);

const authModel = mongoose.model("auth", AuthSchema)
export default authModel