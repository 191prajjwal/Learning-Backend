// same as server 1 but with path

const http=require("http")
const fs=require("fs")
const path=require("path")

const mimeTypes={
    ".html":"text/html",
    ".css":"text/css",
    ".js":"application/javascript",
    ".jpeg":"image/jpeg",
    ".jpg":"image/jpg",
    ".png":"image/png" ,
    ".ico":"image/x-icon"//by default browser injects one favicon.ico if there is no favicon so written its mimeType to eliminate any error caused by it
}
const server=http.createServer((req,res)=>{

    function ext(){
        if(req.url==="/")
        {   
             return "homepage.html"
        }
        else if(path.extname(req.url)!="")
        {
                return req.url
        }
        else 
        {
            return req.url+".html"
        }
    }

   

let filepath=path.join(__dirname,"public",ext())

let content_type=mimeTypes[path.extname(filepath)]

fs.readFile(filepath,(err,data)=>{
    if(err){

        if (err.code==="ENOENT")
        {
            fs.readFile("./public/error.html",(err,data)=>{
                res.writeHead(404,{"Content-Type":content_type})
                res.end(data)
            })
        }
        else
        {
            res.writeHead(500,{"Content-Type":content_type})
            res.end("Internal Sever Error")
        }
      
    }
    else
    {
        res.writeHead(200,{"Content-Type":content_type})
        res.end(data)
    }
})

 

})

server.listen(5000,()=>{
    console.log("Server is live at port 5000");
    
})

