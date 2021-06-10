const express=require("express")
const DB = require('./modules/db.js')
const cors = require('cors')
const app=express()


app.use(cors())
app.use(express.json());

////////////////////////////////////////////////////
//DO NOT RUN THE EXPRESS APP, RUN ONLY THE REACT APP
////////////////////////////////////////////////////

app.get('/', (req, res) =>{
    res.send('READ THE READMEFILE') 
    
} )
//getting the post request from githubwebhook
app.post("/",async (req,res)=>{
        const data=JSON.parse(JSON.stringify(req.body))
        //if it was a commit that triggered the webhook
        if(data.commits){
            let obj={}
            //arranging an object for the required data from the post request
            obj["url"]=data.repository.html_url
            obj["time"]={updated:data.repository.updated_at , pushed:data.repository.pushed_at}
            obj["pusher"]=data.pusher
            obj["commit"]={time:data.commits[0].timestamp , url:data.commits[0].url , message: data.commits[0].message}
           
            //inserting the data into postgres
            DB.insertHook('commit', obj)
            .then(data => console.log(data))
            .catch(err => console.log(err))
            
        
        }
         //if it was a pull request that triggered the webhook
        else if(data.pull_request){
            let obj={}
            obj["url"]=data.pull_request.html_url
            obj["time"]={updated:data.repository.updated_at , pushed:data.repository.pushed_at}
            obj["action"]=data.action
            obj["number"]=data.number
            obj["pull"]={url:data.pull_request.html_url , title:data.pull_request.title,user:{name:data.pull_request.user.login,url:data.pull_request.user.html_url}}
            console.log(obj);
            if(obj.action==="opened"|| obj.action==="closed"){
                DB.insertHook('pull', obj)
                .then(data => console.log(data))
                .catch(err => console.log(err))
            }        
        }    

    
    res.json("obj")
    console.log("----------------------------------");
    console.log("log ends");
    
    
})

app.get('/type/:type',(req,res)=>{
    DB.getRequests(req.params.type)   
    .then(data => res.send(data))
    .catch(err => res.send({message:err}))
})
//couldn't make a get request on my heruko server, so i sent it a post request and used the response i get from the server for my data
app.post('/type',(req,res)=>{
    DB.getRequests(req.body.type)   
    .then(data => res.send(data))
    .catch(err => res.send({message:err}))
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



