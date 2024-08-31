// const express = require("express")
// const app= express()

// const path= require('path')

// let filepath=path.join(__dirname,"public")
// app.use(express.static(filepath))
// //express.static middleware helps to serve static files
// //app.use takes middleware as argument and apply it to all request it get

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(filepath,"homepage.html"))
// })

// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(filepath,"about.html "))
// })

// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(filepath,"contact.html"))
// })


// app.listen(5000,()=>{
//     console.log("Server is live at port 5000");
    
// })


// const express=require("express")
// const app=express()

// app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//     res.render("homepage",{data:"this is data passed",age:45})
    
// })

// app.listen(5000,()=>{
//     console.log("server is live at port 5000");
    
// })


const express=require("express")
const app=express()

app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("hbshomepage",{data:"hbs data"})
})

app.listen(5000,()=>{
    console.log("server is live at port 5000");
    
})