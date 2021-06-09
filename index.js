const express=require("express")
const DB = require('./modules/db.js')
const cors = require('cors')
const app=express()

//this file will run on heruko, dont try to run it.
//only run the client (react)
//changing the content of any file in https://github.com/asafuch/demo will initialized the changes
app.use(cors())
app.use(express.json());


// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', 'https://githubmonitors.herokuapp.com');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next()
// })
// app.get('/', (req, res) =>{
//     res.send('Hello World! v2') 
//     console.log("hello world"); 
// } )

app.post("/",async (req,res)=>{
    console.log(req.headers);
    if(req.headers['user-agent']==='GitHub-Hookshot/f923b7b'){
        const data=JSON.parse(JSON.stringify(req.body))

        if(data.commits){
            let obj={}
            obj["url"]=data.repository.html_url
            obj["time"]={updated:data.repository.updated_at , pushed:data.repository.pushed_at}
            obj["pusher"]=data.pusher
            obj["commit"]={time:data.commits[0].timestamp , url:data.commits[0].url , message: data.commits[0].message}
            console.log(obj);
            
            DB.insertHook('commit', obj)
            .then(data => console.log(data))
            .catch(err => console.log(err))
            
        
        }
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
app.post('/type',(req,res)=>{
    DB.getRequests(req.body.type)   
    .then(data => res.send(data))
    .catch(err => res.send({message:err}))
})

app.listen(process.env.PORT || 5000,async()=>{
    console.log("Server is up port");
})



