const {Schema}=require("mongoose")
const mongoose=require("mongoose")
const registerSchema=new Schema({
    fullName:String,
    fatherName:String,
    email:{type:String,unique:true},
    password:String,
    mobile:String
})
const RegisterModel=mongoose.model('register',registerSchema)
module.exports=RegisterModel;