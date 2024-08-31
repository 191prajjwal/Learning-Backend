let studentArray=require('./data')
let port=7000
const express= require('express')
const app= express()
app.use(express.json())
//I forgot about this while revision. it is imp to convert data to json while sending to endpoint 


//Get request to Read data

app.get("/api/student",(req,res)=>{
    res.send(studentArray)
})

app.get("/api/student/:id",(req,res)=>{
    let id = req.params.id
    id=Number(id)
    if(isNaN(id))
    {
        res.status(400).send({"Bad request" :"Not a valid id"})
    }

    else{
            let objAtId= studentArray.find((item)=>{
                return item.id===id
            })

            if(objAtId===undefined){
                res.status(404).send({"NOT FOUND":` object not found with id ${id} `})
            }
            else
            {
              res.send(objAtId)  
            }
    }
})


//crating function that checks objToPost or objToUpdate is in valid format or not

function isValid(obj){
    let arr=Object.keys(obj)
    // obj len && obj name  

        if(arr.length===4)
        {
            if(arr.includes("id") && arr.includes("name")&& arr.includes("currentClass")&& arr.includes("division"))
                {
                    console.log("followed correct formatting");
                    return true  
                }
            else
               {   
                    console.log("The object key names should be same as original data key names");
                    return false
               }    
        }
        else
        {
             console.log("The Object length must be exactly 4");
             return false
        }
   


}
//Post request to Create Data
app.post("/api/student",(req,res)=>{
    let objToPost=req.body
     if(isValid(objToPost))
     {
        studentArray.push(objToPost)
        res.send(studentArray)
     }
     else
     {
        res.status(400).send({"Bad request": "The insert data is not in desired format"})
     }
    
})

//Put request to update data

app.put("/api/student/:id",(req,res)=>{
    let id= req.params.id
    id=Number(id)

    if(isNaN(id))
    {
        res.status(400).send({"Bad request":"Not a valid id"})
    }
    else
    {
        let oldObj= studentArray.find((item)=>{
            return item.id===id
        })

        if(oldObj===undefined)
        {
            res.status(404).send({"Not Found":` object not found with id ${id} `})
        }
        else
        {   
            let newObj=req.body
            let objToPut={...oldObj,...newObj}
            if(isValid(objToPut))
            {
                let index= studentArray.indexOf(oldObj)
                studentArray.splice(index,1,objToPut)
                res.send(studentArray)
            }
            else 
            {
                res.status(400).send({"Bad request": "The insert data is not in desired format"})
   
            }
           

        }
    }
})

//DELETE request to delete the data

app.delete("/api/student/:id",(req,res)=>{
    let id=req.params.id
    id=Number(id)
    if(isNaN(id))
    {
        res.status(400).send({"Bad request":"Not a valid id"})
    }
    else
    {
        let objToDelete= studentArray.find((item)=>{
            return item.id===id
        })

        if(objToDelete===undefined)
        {
            res.status(404).send({"Not Found":`object not found with the id ${id}`})
        }

        else
        {
            let index=studentArray.indexOf(objToDelete)
            studentArray.splice(index,1)
            res.send(studentArray)
        }
    }
})



app.listen(port,(err)=>{

    if(!err)
        console.log(`Server is live at port ${port}`);
    else
        console.log(err)
})