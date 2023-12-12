const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB CONNECTED")})
.catch(err=>console.log(err));


// const studentschema=new mongoose.Schema({
//     Admno:Number,
//     Name:String,
//     Age:Number,
//     Course:String
    
// });
let sc=mongoose.Schema;
const studentschema=new sc({
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String
        
    });

var studentmodel=mongoose.model("studentdetails",studentschema)
module.exports=studentmodel;

