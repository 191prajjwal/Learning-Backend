const express=require("express")
const app=express()

app.get("/",(req,res)=>{
   
    res.send("<h1>Homepage</h1> <p>This is Homepage</P>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>About</h1><mark>This is about page and i created it using express</mark>")
})


app.listen(5000,()=>{
    console.log("Server is live at port 5000");
    
})