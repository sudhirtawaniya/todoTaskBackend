const express=require("express")
const app=express();
const todoControler=require("./Controler/todo")
const registerControler=require("./Controler/register")
const cors=require("cors")
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sudhirtawaniya30:VoWQ4gZFMrhoNALm@cluster0.dvvzz2b.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
})
app.use(cors())
app.get("/todo",todoControler.getTodo)
app.post("/todo",todoControler.createTodo)
app.post("/register",registerControler.createData)
app.post("/login",registerControler.login)

app.patch("/todo/:id",todoControler.editTodo)
app.delete("/todo/:id",todoControler.deleteTodo)
app.listen(8000,()=>console.log("server started..."));
// 


