const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mihir17:Mihir1909@festivity.5frgj14.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI = "mongodb+srv://mihir17:Mihir1909@festivity.5frgj14.mongodb.net/test"
// mongodb+srv://mihir17:Mihir1909@festivity.5frgj14.mongodb.net/?retryWrites=true&w=majority
// const mongoURI = "mongodb://localhost:27017/festivity?readPreference=primary&appname=MongoDB%20Compass&ssl=false"    

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("conected to mongo successfully")
    })
} 

module.exports = connectToMongo
