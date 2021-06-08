const express=require("express")
const app=express()

app.get('/', (req, res) => res.send('Hello World! v2') );

app.post("/",(req,res)=>{
    console.log("hello");
})

app.listen(5000,async()=>{
    console.log("Server is up port 5000");
})



