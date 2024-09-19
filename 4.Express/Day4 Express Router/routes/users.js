const express= require("express")
const router=express.Router() 
//express method that helps maintaining the routes


router.get("/",(req,res)=>{
    res.send({"message":"I am user"})
})
router.post("/",(req,res)=>{
    res.send({"message":"user created"})
})
router.put("/",(req,res)=>{
    res.send({"message":"user updated"})
})
router.delete("/",(req,res)=>{
    res.send({"message":"user deleted"})
})

module.exports=router

//any request comming to usersRouter will be redirected here