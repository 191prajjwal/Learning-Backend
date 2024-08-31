const fs=require('fs')

fs.writeFileSync("ab.html","<h1>Hello I am created first</h1>")
fs.writeFile("cd.txt","noice game going on",(err)=>{
    if(err)
        throw(err)
    else
    console.log("cd.txt is created");
    
})

//create

let readfile1=fs.readFileSync("ab.html","utf-8")
console.log(readfile1)

fs.readFile("notes1.txt","utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else 
    console.log(data)
    
        
})

//read


fs.appendFileSync("ab.html","<h2>I am appended later</h1>")
fs.appendFile("notes1.txt","this is appended by async append",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("appended in notes1.txt");
    
        
})

//update


//create files notes2.txt and notes3.txt
fs.unlinkSync("notes2.txt")
fs.unlink("notes3.txt",(err,data)=>{
if(err)
    console.log(err);
else
console.log(data);

    
})

//delete


console.log("end");





//CRUD Done