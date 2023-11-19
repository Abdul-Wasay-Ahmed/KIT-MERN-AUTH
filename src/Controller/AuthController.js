import authModel from "../DB/Model/AuthModel.js";
import jwt from "jsonwebtoken"
const createUser = async(req,res) =>{

    try{
const {email , password , phone ,name} = req.body
const existingUser = await authModel.findOne({email})

if(existingUser){
    return res.send("User Already Exists")
}
const createNewUser = await authModel.create({
    name,
    email,
    phone,
    password
})


const CreatedUser = await authModel.findById(createNewUser._id).select("-password")

return res.send(CreatedUser)

    }
    catch(err){
console.log(err)
return res.send(err.message)
    }

}



const login = async(req,res) =>{

    try{
const {email , password } = req.body
const existingUser = await authModel.findOne({email})

if(!existingUser){
    return res.send("User does't exists")
}

if(existingUser.password !== password ){
    return res.send("wrong password")
}

let token = jwt.sign({existingUser} , "secret")

return res.send(token)

    }
    catch(err){
console.log(err)
return res.send(err.message)
    }

}


const getProfile = async(req,res)=>{
const {token} = req.body

    try{
const user = jwt.verify(token , "secret")
console.log(user)
return res.send(user)
}
catch(err){
    console.log(err)
    return res.send(err.message)

}


}



const AuthController = {
    createUser,
    login,
    getProfile
}

export default AuthController