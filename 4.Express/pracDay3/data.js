//just like regular api data that we fetch and get response as an array of objects(generally). we created the data using array of objects.
//so the purpose is to treat this array data as an API data for this momemt
//and using express we will Create ,Read , Update, Delete the data in this student array.
//also we want to ensure that data inserted or updated must be in same format as it is there currently. like it should not have more keys or keys with different names and all.

var studentArray = [{
    id: 1,
    name: 'Jayesh',
    currentClass: 5,
    division: 'A'
},
{
    id: 2,
    name: 'Minakshi',
    currentClass: 12,
    division: 'C'
},
{
    id: 3,
    name: 'Drisham',
    currentClass: 7,
    division: 'C'
},
{
    id: 4,
    name: 'Kamlesh',
    currentClass: 7,
    division: 'A'
},
{
    id: 5,
    name: 'Dhoni',
    currentClass: 10,
    division: 'D'
},
{
    id: 6,
    name: 'Piyush',
    currentClass: 10,
    division: 'A'
},
{
    id: 7,
    name: 'Aansh',
    currentClass: 8,
    division: 'A'
}]
module.exports=studentArray;

var studentArray = [{
    id: 1,
    name: 'Jayesh',
    currentClass: 5,
    division: 'A'
},
{
    id: 2,
    name: 'Minakshi',
    currentClass: 12,
    division: 'C'
},
{
    id: 3,
    name: 'Drisham',
    currentClass: 7,
    division: 'C'
},
{
    id: 4,
    name: 'Kamlesh',
    currentClass: 7,
    division: 'A'
},
{
    id: 5,
    name: 'Dhoni',
    currentClass: 10,
    division: 'D'
},
{
    id: 6,
    name: 'Piyush',
    currentClass: 10,
    division: 'A'
},
{
    id: 7,
    name: 'Aansh',
    currentClass: 8,
    division: 'A'
}]
module.exports=studentArray;