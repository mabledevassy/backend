const express = require("express")
const cors = require("cors")

const app = new express();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage:storage});


const studentmodel = require('./model/studentdetails')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request,response) => {
    response.send("hai")
})
app.get('/view', async (request, response) => {
    var data = await studentmodel.find();
    console.log(data)
    response.send(data)
})
// app.put('/edit/:id',async(request,response)=>{
//     let id=request.params.id
//     await studentmodel.findByIdAndUpdate(id.request.body)
//     response.send("Data updated")
// })

app.put('/edit/:id',async (request, response) => {
    let id = request.params.id;
    await studentmodel.findByIdAndUpdate(id,request.body)
    response.send("Data updated")
})

// app.post('/new',(request,response)=>{
//     console.log(request.body)
//     new studentmodel(request.body).save();
//     response.send("records saved")

// })

app.post('/new',upload.single('image1'),async (request,response) => {
    try {
        const { Admno, Name, Age, Course } = request.body
        const newdata = new studentmodel({
            Admno, Name, Age, Course,
            image1: {
                data:request.file.buffer,
                contentType: request.file.mimetype,}
        })
        console.log(newdata);
        await newdata.save();
        response.status(300).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }

})







app.listen(3005, (request, response) => {
    console.log("port is running 3005")
})