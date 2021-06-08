const express=require("express")
const app=express()

app.get('/', (req, res) =>{
    res.send('Hello World! v2') 
    console.log("hello world");
} )

app.get("/s",(req,res)=>{
    console.log("hello");
    res.send("kys")
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



