const express= require("express")
const router= express.Router()

router.get("/",(req,res)=>{
    res.send({"message":"comments here"})
})
router.post("/",(req,res)=>{
    res.send({"message":"comment created"})
})
router.put("/",(req,res)=>{
    res.send({"message":"comment updated"})
})
router.delete("/",(req,res)=>{
    res.send({"message":"comment deleted"})
})

module.exports= router