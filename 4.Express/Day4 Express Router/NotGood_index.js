const express= require("express")
const app= express()

//user route
app.get("/users",(req,res)=>{
    res.send({"message":"I am user"})
})
app.post("/users",(req,res)=>{
    res.send({"message":"user created"})
})
app.put("/users",(req,res)=>{
    res.send({"message":"user updated"})
})
app.delete("/users",(req,res)=>{
    res.send({"message":"user deleted"})
})


//comments route
app.get("/comments",(req,res)=>{
    res.send({"message":"comments here"})
})
app.post("/comments",(req,res)=>{
    res.send({"message":"comment created"})
})
app.put("/comments",(req,res)=>{
    res.send({"message":"comment updated"})
})
app.delete("/comments",(req,res)=>{
    res.send({"message":"comment deleted"})
})

//posts route
app.get("/posts",(req,res)=>{
    res.send({"message":"posts here"})
})
app.post("/posts",(req,res)=>{
    res.send({"message":"post created"})
})
app.put("/posts",(req,res)=>{
    res.send({"message":"post updated"})
})
app.delete("/posts",(req,res)=>{
    res.send({"message":"post deleted"})
})

//so like this if we have many routes our index.js file will be polluted as a hell so it will not be easy and efficient to manage it so to avoid it we will create a separate folder named as routes(can give any name but by convension and semantics use this) now we will make separate files for each route like users.js , comments.js , posts.js and many more and then we will export it from there and import it on our index.js making our index.js clean and maintable.


app.listen(5000,()=>{
    console.log("Server is live at port 5000");
    
})

