const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hello World! v2') 
    console.log("hello world");
} )

app.post("/",async (req,res)=>{
    console.log("log start");
    console.log("----------------------------------");
    const data=JSON.parse(JSON.stringify(req.body))
    
    console.log("----------------------------------");
    console.log("----------------------------------");
    console.log(Object.keys(data));
    console.log("----------------------------------");
    console.log("-----------repository-------------");
    console.log(data.repository);
    console.log("-----------repository-------------");
    console.log("----------------------------------");
    console.log("");
    console.log("----------------------------------");
    console.log("-------------pusher---------------");
    console.log(data.pusher);
    console.log("-------------pusher---------------");
    console.log("----------------------------------");
    console.log("");
    console.log("----------------------------------");
    console.log("-------------commits--------------");
    console.log(data.commits);
    console.log("-------------commits--------------");
    console.log("----------------------------------");
    console.log("");
    console.log("----------------------------------");
    
    res.json(req.body)
    console.log("----------------------------------");
    console.log("log ends");
    
    
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



