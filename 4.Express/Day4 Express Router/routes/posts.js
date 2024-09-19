const express= require("express")
const router= express.Router()


router.get("/",(req,res)=>{
    res.send({"message":"posts here"})
})
router.post("/",(req,res)=>{
    res.send({"message":"post created"})
})
router.put("/",(req,res)=>{
    res.send({"message":"post updated"})
})
router.delete("/",(req,res)=>{
    res.send({"message":"post deleted"})
})

module.exports =router