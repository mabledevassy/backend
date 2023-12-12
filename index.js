const express=require("express")
const cors=require("cors")

const app=new express();
const studentmodel=require('./model/studentdetails')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})
app.get('/view',async(request,response)=>{
    var data=await studentmodel.find();
    console.log(data)
    response.send(data)
})

app.post('/new',(request,response)=>{
    console.log(request.body)
    new studentmodel(request.body).save();
    response.send("records saved")

})
app.listen(3005,(request,response)=>{
    console.log("port is running 3005")
})