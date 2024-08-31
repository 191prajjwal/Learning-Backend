
// ++++++++++ For  learning middleware uncomment below code and do Comment code below it +++++++


// const express=require("express")
// const app=express()
// const path=require("path")
// let filepath=path.join(__dirname,"public")//path where our static files that we want to serve as response is present
// app.use(express.static(filepath))//express.static is a middleware that now knows that all the static files that are to be served belongs to the path "filepath"

// //app .use() : It takes a middleware function or an array of middleware functions as arguments and applies them to every incoming request to the application.

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(filepath,"homepage.html"))//sending File as response
// })

// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(filepath,"about.html"))
// })

// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(filepath,"contact.html"))
// })

// app.listen(4000,()=>{
//     console.log("server is live at port 4000");
    
// })




// ++++++++++for learning templating engines comment above and uncomment this below code ++++++



// const express=require("express")
// const app=express()
// app.set("view engine","ejs")//setting the templating engine to ejs
// //app.set() is used to set any configurations to our express application like setting templating engines
// app.get("/",(req,res)=>{
//     res.render("index")//this will render index.ejs file in web 
// })
// app.get("/about",(req,res)=>{
//     res.render("about",{data:"this is sent at runtime by about page",age:45})//this will render about.ejs file in web and while running it sent data which will be send to about.ejs and rendered at run time
// })

// //so using templating engines we can pass data to our html file at run time and make the page dynamic



// app.listen(4000,()=>{
//     console.log("server is live at port 4000")})



const express=require("express")
const app=express()
app.set("view engine","hbs")//setting templating engine to hbs
app.get("/",(req,res)=>{
    res.render("homepage",{data:"data send by at runtime from backend to frontend using hbs templating engine"})
})
app.listen(4000,()=>{
    console.log("server is live at port 4000")})