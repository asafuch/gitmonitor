const express=require("express")
const app=express()

//this files will run on heruko, dont try to run it.
//changing the content of any file in https://github.com/asafuch/demo will initialized the changes
//
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hello World! v2') 
    console.log("hello world");
} )

app.post("/",async (req,res)=>{
    console.log("log start");
    console.log("----------------------------------");
    const data=JSON.parse(JSON.stringify(req.body))

    if(data.commits){
        let obj={}
        obj["url"]=data.repository.html_url
        obj["time"]={updated:data.repository.updated_at , pushed:data.repository.pushed_at}
        obj["pusher"]=data.pusher
        obj["commit"]={time:data.commits[0].timestamp , url:data.commits[0].url , message: data.commits[0].message}
        console.log(obj);
    }
    else if(data.pull_request){
        let obj={}
        obj["url"]=data.pull_request.html_url
        obj["time"]={updated:data.repository.updated_at , pushed:data.repository.pushed_at}
        obj["action"]=data.action
        obj["number"]=data.number
        obj["pull"]={url:data.pull_request.html_url , title:data.pull_request.title,user:{name:data.pull_request.user.login,url:data.pull_request.user.html_url}}

        obj["sender"]={name:data.sender.name,url:data.sender.html_url,type:data.sender.type}
      
        console.log(obj);
    

    }    
    res.json("obj")
    console.log("----------------------------------");
    console.log("log ends");
    
    
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



