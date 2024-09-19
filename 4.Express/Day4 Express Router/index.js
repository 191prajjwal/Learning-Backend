const express=require('express')
const usersRouter= require("./routes/users")
const commentsRouter=require("./routes/comments")
const postsRouter=require('./routes/posts')
const app = express()


app.use("/users",usersRouter)//all requests to /users will be handled by userROUTER
app.use("/comments",commentsRouter)
app.use("/posts",postsRouter)

app.listen(5100,()=>{
    console.log("server is live at port 5100");
    
})



//before comming to here see NotGood_index.js file to know the problem because of which we use express Router