import React, { Component } from 'react'
import Commit from "./components/commit"
import PullRequest from "./components/pullrequest"
import {connect} from "react-redux"
import * as actions from "./actionReducers/actions"
class App extends Component {

    handleRefresh=async()=>{
        this.props.getRequests("commit")
        this.props.getRequests("pull")
    }
  
    render() {
        return (
            <div className="container text-center">
                <h1>GitHub Monitor</h1>
                <div>
                    <button onClick={this.handleRefresh} className="btn btn-primary">
                        Refresh
                    </button>
                </div>
                <div class="row">
                    <div class="col border m-3">
                        <h2>Commits</h2>
                        <Commit/>
                    </div>
                    <div class="col border m-3">
                        <h2>Pull Requests</h2>
                        <PullRequest/> 
                    </div>  
                </div>             
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        commit:state.commit,
        pull:state.pull
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getRequests:(type)=>dispatch(actions.getRequests(type))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)