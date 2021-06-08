const express=require("express")
const app=express()
app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.send('Hello World! v2') 
    console.log("hello world");
} )

app.post("/",async (req,res)=>{
    console.log("log start");
    console.log("----------------------------------");
    console.log(req);
    console.log("----------------------------------");
    console.log("log ends");
    
    
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



