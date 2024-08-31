const express= require("express")
const app= express()
let studentArray=require("./initialdata")
app.use(express.json())
//below function is used to check our passed data follows standard data format in which our existing data is present or not (used to vrify data in post and get)
function inFormat(obj){
    let isFine=false;
    let objArray= Object.keys(obj)
 if(objArray.length===4 && 
    objArray[0]==="id" && 
    objArray[1]==="name" &&
    objArray[2]==="currentClass" && 
    objArray[3]==="division")
 {
     if (typeof obj.id==="number" && 
        typeof obj.name==="string" &&
        typeof obj.currentClass==="number" && 
        typeof obj.division==="string")
        {
            isFine=true;
            console.log(true, " : all keys are in order and have valid corresponding data types");
            return isFine
            
        }
     else
    { 
        isFine=false;
        console.log(false," : all keys are in order but not having valid corresponding data types");
        return isFine
    }
 }
 
 else
{ 
 isFine=false
 console.log(isFine, " : keys are not in order or length of object is not same ");
 return isFine
}
 }



app.get("/api/student",(req,res)=>{
    res.send(studentArray)
})

app.get("/api/student/:id",(req,res)=>{
    /*Here :id is any value passed after /api/student/ making the req more dynamic*/
    let id=req.params.id 
    console.log(typeof id);
      

    //req.param.id will give value(in string) of whatever id we typed 
        // id=parseInt(id)      
    //convert string to number also if string has something like "7aaa" paeseInt gives 7. 
    // so avoiding using parseInt() here since we want top say error if "7aaa" is id but parse int will make it 7
    // parseInt() only extracts the numeric part from the string until it encounters a  non-numeric character.

         id=Number(id)
         console.log(typeof id);
        // res.send(`${id}`)
    let studentObj=studentArray.find((item)=>{ //find that item in array whose id===id(recieved from req.params.id)
        return item.id===id 
    //return item where id is matching the condition
    })
       if(!isNaN(id))   //checks whether id is number or not
       {
        if(studentObj===undefined)//if no object found in array with that id undefined returned
            res.status(404).send({"message":"student not found by given id"})
       else       
            res.send(studentObj)//that means id matches
       }

       else
       res.status(404).send({"message":"bad request"})//id is not a number
})
//suppose this api/student/id as endpoint or api (it is not in actual but assume)
//so this was all about reading data from endpoint
//now we can post data in endpoint too like if you fill registration form data goes and store so how to do that
//we will do post request

//Get request used to Read

app.post("/api/student",(req,res)=>{
    // let id=8
    // let name="prajjwal"
    // let currentClass=12
    // let division ="A"
    // studentArray.push({id:id,name:name,currentClass:currentClass,division:division})
    // res.send(studentArray)
    //commenting above because now we will use body in thunderclient/postman to send data from post request


//both get and post are in same endpoint or url api/student
//but whenever we have any url in urlbar it always make get request only and browsers cant make post request directly
//so now if i go to /api/student it will generate a Get request give me data stored in the endpoint but it will not make Post hence our data is not updated in endpoint

// we can use front end and use forms or react state and then we can do that but as of now we are doing different in way
//so we can either use Postman Api or Thunder client extension to make post requests
//we used thunder client so in VS CODE sidebar its logo is there so go and do new request and paste url where you want request and choose get post whatever and see the response
//when we do post our data like this it will be hardcoded and always  
    // let id=8
    // let name="prajjwal"
    // let currentClass=12
    // let division ="A"
//this is going to be sent as post data but we want different data to post or we want dynamic data then one thing is we can do using fronend and forms or react states . but whenever we send data from  front end also it is send by our request url object inside key body so data is read by req.body
//  but as of now we can do it using body in thunder client so we can define one json object there and then make post request 

// let studentObj=req.body
// console.log(studentObj);//it will say undefined untill we use express.json middleware or body parser
// studentArray.push(studentObj)
// res.send(studentArray)
//so now whatever object in json format you wrote in body is send and read by post request
//but since to read and fetch it we want it as object hence currently it is not visible in response as it is in json
//to make is visible convert that json to object using express.json() middleware or we can use body parser(we will study later)
//so now we can change data in body everytime before we send it using post
//the problem now is in body we can type anything and send like 
// {
//   "id":"12222",
//   "name":1
// }
//which may violate the format of the endpoint data
//so we have to make sure all data sent using post should have same key names as defined and format also should be same
//so we must implement some condition check on data at req.body 

let studentObj=req.body
let isValid=inFormat(studentObj)
console.log("isvalid is "+isValid);


 if(isValid)
{
 studentArray.push(studentObj)
 res.send(studentArray)
}
else
{
    res.status(400).send({"message":"Bad request"})
}

})

//Post request  used to create


app.put("/api/student/:id",(req,res)=>{
    let id= Number(req.params.id)
    if(!isNaN(id))

        {
            let oldObj= studentArray.find((item)=>{
                return item.id===id
            })

            if(oldObj===undefined)
            {
                res.status(404).send({"message":"student not found by given id"})
            }
            else{
                let newObj=req.body
                let finalObj={...oldObj,...newObj}
                if(inFormat(finalObj)){
                    let index= studentArray.indexOf(oldObj)
                studentArray.splice(index,1,finalObj)
                res.send(studentArray)
                }
                else{
                    res.status(400).send({"message":"bad request"})
                }
            }

            
        }
    else{
            res.status(400).send({"message":"Bad request"})
        }
    
    
})

//put request used to Update


app.delete("/api/student/:id",(req,res)=>{
    let id=req.params.id
    id=Number(id)
    if(!isNaN(id)){
      let target=  studentArray.find((item)=>{
            return item.id===id
        })
        if(target===undefined)
            res.status(400).send({"message":"id not found"})
        else
        {
          let index=  studentArray.indexOf(target)
          console.log(index)
          studentArray.splice(index,1)
          res.send(studentArray)
        }
    }
    else{
        res.status(400).send({"message":"Bad request"})
    }
})

//Delete requst used to delete

//so we performed CRUD operation using post get put delete hence the endpoint where we did this is called rest api
//we can write put in place of post and we can create data using put similarly we can write post in place of put to update our existing data . but then the endpoint will no longer be the rest api.
//so using POST,GET,PUT,DELETE to perform C R U D  respectively means we have made rest apis

app.listen(5000,()=>{
    console.log("server is live at port 5000");
    
})

