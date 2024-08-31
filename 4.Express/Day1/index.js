const express= require('express')//import express module
const app=express()//call module to create express server here we took server name as app

app.get("/",(req,res)=>{
    res.send("my express server running")
})

app.get("/about",(req,res)=>{
    res.send("this is about page and i used nodemon")
})
app.listen(4000,()=>{
    console.log("Express server is live at port 4000");
})