
//npm init -y
//npm i express
//npm i mongoose


const mongoose= require('mongoose')//import mongoose 
mongoose.connect("mongodb://127.0.0.1:27017/firstDB").then(()=>{
    console.log("Databse is connected")
}).catch((err)=>{
    console.log(err);
    
})
//connect it to mongodb by giving mongodb address and use .then so that when it is done we can console connection confirmation

const reader= new mongoose.Schema(
    {
        readerName:String,
        favAuthor:String,
        favGenere:String,
        isOnline:Boolean,
        readCount:Number
    })//created one schema using mongoose.Schema

    let readers = mongoose.model("Reader",reader)
    //creating a reader model which is nothing but group of documents (also called collections in mongodb)

    const createDocument= async()=>{

        let reader1= new readers({
            readerName:"prajjwal",
            favAuthor:"murakami",
            favGenere:"Fiction",
            isOnline:false,
            readCount:34
        }
        )
        reader1.save()

        readers.create({readerName:"Navin",
            favAuthor:"xipin yangh",
            favGenere:"manga",
            isOnline:true,
            readCount:54})

            let r1=await readers.find()//getting all readers
            console.log(r1);

            let r2= await readers.findOne({readerName:"Navin"})//getting reader with name "Navin"
            console.log(r2);
            
            


    }

    createDocument()//function to create and save documents