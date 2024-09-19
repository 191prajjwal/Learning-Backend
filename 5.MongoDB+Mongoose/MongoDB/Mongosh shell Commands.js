// 1. go to mongosh shell

// show dbs : to show all DBs in mongoDB
// show collections : to show all collections in a DB
// cls: to clear console

//++++++++++++++Creating a Database++++++++++++
// use database_name

//++++++++++++++Creating a Collection inside database++++++++++++
//db.createCollection("collection_name")
//create as many collection as needed


//++++++++++++++Creating a document inside collection++++++++++++
//db.collectionName.insertOne({key:value,key:value,.....})
//db.collectionName.insertMany([{key:value,.....},{key:value,......},{key:value,........}])

//++++++++++++++Reading documents from a collection++++++++++++
//db.collectionName.find()  it will list all documents in a collection
//db.collectionName.find({key:value}) it will list all documents in collection that have given key:value
//db.collectionName.find({$and:[{key1:value},{key2,value}]}) when we want to find based on and condition
//db.collectionName.findOne({key:value}) returns first document that matches the key:value

//++++++++++++++Updating a document++++++++++++
//db.collectionName.updateone({finding based on keys and value},{$set:{updating}})
//db.collectionName.updateMany({finding what to up[date by giving key values]},{$set{write the keys and values you want}})

//++++++++++++++Deleting a document++++++++++++
//db.collectionName.deleteOne({key:value,.....})
//db.collectionName.deleteMany({key:value,......})

//++++++++++++++Deleting a Collection++++++++++++
// db.collectionName.drop()

//++++++++++++++Deleting a Database++++++++++++
// db.dropDatabase()




