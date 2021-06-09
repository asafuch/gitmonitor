import React, { Component } from 'react'
import Commit from "./components/commit"
import PullRequest from "./components/pullrequest"
class App extends Component {
  
    render() {
        return (
            <div className="container">
                <Commit/>
                <PullRequest/>                
            </div>
        )
    }
}


export default App