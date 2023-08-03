const Register=require("../Modal/RegisterSchema")

exports.createData=async(req,res)=>{
const register=new Register()
const data=req.body;
const valid=await Register.findOne({ email:data.email});
const mob=await Register.findOne({mobile:data.mobile})



   if(!valid&&!mob){
    register.fullName=data.fullName
    register.fatherName=data.fatherName
    register.mobile=data.mobile,
    register.password=data.password,
    register.email=data.email
    register.save()
    res.send({data:"success",success:true})
   }
   else{
    res.send({data:"email & mobile must be unique"})
   }





}
exports.login=async(req,res)=>{
    const register=new Register()
    const data=req.body;
    const valid=await Register.findOne({ email:data.username});
    const mob=await Register.findOne({ mobile:data.username});
    
    console.log(valid);
  
    
       if(valid){
        if(valid.password===data.password)
        res.send({data:"success",success:true})
        else{
            res.status(201).send({data:"worng email & Password",success:false})
        }
       }
       else if(mob){
        if(mob.password===data.password)
        res.send({data:"success",success:true})
        else{
            res.status(201).send({data:"worng email & Password",success:false})
        }
       }
       else{
        res.status(201).send({data:"worng email & Password",success:false})
    }
    
    
    
    
    
    }