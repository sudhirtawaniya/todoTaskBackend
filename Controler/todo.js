const Todo=require("../Modal/Todochema")

exports.createTodo=(req,res)=>{
const todo=new Todo()
const data=req.body
todo.content=data.content
todo.createdAt=data.createdAt
todo.save()
res.send({data:"posted",success:true})
}
exports.getTodo=async(req,res)=>{
   
    const data= await Todo.find()
  if(data)
   { res.send({data:data,success:true})}
   else{
    res.send({data:[],success:false})
   }
    }
    exports.deleteTodo=async(req,res)=>{
      console.log(req.params.id);
try {
  const data= await Todo.deleteOne({_id:req.params.id})
  if(data)
   { res.send({data:"Deleated...",success:true})}
   else{
    res.send({data:"failed to delete",success:false})
   }
  
} catch (error) {
  
}
     
      }
      exports.editTodo=async(req,res)=>{
       console.log(req.body);
  try {
    const data= await Todo.findByIdAndUpdate({_id:req.body.id},{$set:{content:req.body.content,createdAt:req.body.createdAt}})
    if(data)
     { res.send({data:"Updated...",success:true})}
     else{
      res.send({data:"failed to Update",success:false})
     }
    
  } catch (error) {
    
  }
       
        }