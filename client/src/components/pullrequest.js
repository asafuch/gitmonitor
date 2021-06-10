import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from "../actionReducers/actions"
 class PullRequest extends Component {
    constructor(){
        super();
        
    }

    componentDidMount(){
        this.props.getRequests("pull")
    }
  
    render() {
       
        const {data}=this.props
        console.log(data);
        const pulls =  data.map((item,i) => {
            const {time,action,pull}=item.data
            return (
                
                <div class="card text-center m-3">
                    <div style={action==="opened" ? {background:"#28a745"} :action==="closed" && {background:"red"}} class="card-header">
                        {action==="opened" ? "New Pull Request" : action==="closed" && "Pull Request Closed"}
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Title: {pull.title}</h5>
                            <p class="card-text">{action==="opened" ? `New pull request has been added by ${pull.user.name}  check it out`:action==="closed" && "a Pull request has been closed,check out why"}</p>
                            <a href={pull.url} target="_blank" class="btn btn-primary">Click here</a>
                        </div>
                        <div class="card-footer text-muted">
                           {`updated at: ${time.updated}, pushed at: ${time.pushed}`}
                        </div>
                    </div>
          
            )
        })
 
        return (
            <div>
                {pulls}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        data:state.pull,
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getRequests:(type)=>dispatch(actions.getRequests(type))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(PullRequest)
