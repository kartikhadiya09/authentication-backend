const mongoose=require('mongoose')
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL ).then(()=> connection())

function connection() {
    try{
        console.log("Mongoose connected succesfully");
        
    }catch(error){
    console.log("error:",error);
    
    }
}