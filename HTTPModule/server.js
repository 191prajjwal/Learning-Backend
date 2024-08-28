const http=require("http")
const fs=require("fs")

const homepage=fs.readFileSync("./public/homepage.html")
// console.log(homepage)
const about=fs.readFileSync("./public/about.html")
const contact=fs.readFileSync("./public/contact.html")
const error=fs.readFileSync("./public/error.html")
const css=fs.readFileSync("./public/style.css")
const image=fs.readFileSync("./public/image.jpg")
// console.log(image);
//it is giving buffer with some code

const server=http.createServer((req,res)=>{

    if(req.url==="/")
    {   res.writeHead(200,{"Content-Type":"text/html"})
        res.write(homepage)
        res.write("<p>This is Homepage</p>")
        res.end()
    }
    else if(req.url==="/About")
    {   res.writeHead(200,{"Content-Type":"text/html"})
        res.end(about)
    }
    else if(req.url==="/contact")
        {res.writeHead(200,{"Content-Type":"text/html"})
            res.end(contact)
        }
        else if(req.url==="/style.css")
            {res.writeHead(200,{"Content-Type":"text/css"})
                res.end(css)
            }
            else if(req.url==="/image.jpg")
                {res.writeHead(200,{"Content-Type":"image/jpg"})
                    res.end(image)
                }
    else{
        res.writeHead(404)
        res.end(error)
    }

})

server.listen(4000,()=>{
    console.log("Server is live at port 4000");
    
})

//this is working absolutely fine but if lots of files are there then we have to create lots of variables for each file to read it and if we do not want that, see other approach that is better, in file server1.js