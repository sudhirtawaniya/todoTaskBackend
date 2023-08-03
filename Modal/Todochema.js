const {Schema}=require("mongoose")
const mongoose=require("mongoose")
const todoListSchema=new Schema({
    content:String,
    createdAt:String
})
const todoModal=mongoose.model('todolist',todoListSchema)
module.exports=todoModal;