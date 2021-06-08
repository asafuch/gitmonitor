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
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.json(req.body)
    console.log("----------------------------------");
    console.log("log ends");
    
    
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



