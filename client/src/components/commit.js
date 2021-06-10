import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from "../actionReducers/actions"
 class Commit extends Component {
     constructor(){
         super();
        
     }
  

    async componentDidMount(){
        //read comments on actions
       await this.props.getRequests("commit")
    }

    render() {
        console.log(this.props);
        const {data}=this.props
         //data retrieved from the server is mapped into cards
        const commits =  data.map((item,i) => {
            const {commit,pusher} = item.data;
            return (
               
              
                <div class="card text-center m-3">
                    
                    <div style= {{background:"#28a745"}} class="card-header">
                    New Commit
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Message: {commit.message}</h5>
                        <p class="card-text">{`a New Commit has been made by ${pusher.name} at ${commit.time}`}</p>
                        <a href={commit.url} target="_blank" class="btn btn-primary">Click here</a>
                    </div>
                    <div class="card-footer text-muted">
                        {`at: ${commit.time}`}
                    </div>
                </div>
               
            )
        })
        return (
            <div>
            {commits}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.commit,
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getRequests:(type)=>dispatch(actions.getRequests(type))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Commit)