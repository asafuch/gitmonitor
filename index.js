const express=require("express")
const app=express()

app.get('/', (req, res) =>{
    res.send('Hello World! v2') 
    console.log("hello world");
} )

app.post("/",(req,res)=>{
    const string=`new commit was made by ${req.repository.owner.name} id of ${req.repository.owner.id} to the repository ${req.repository.name} ${req.repository.id}`
    console.log(req.repository.full_name);
    res.send("kys")
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



