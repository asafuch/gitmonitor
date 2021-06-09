import React, { Component } from 'react'

 class Commit extends Component {
     static defaultProps={
         url:'https://github.com/asafuch/demo',
         time:{updated: '2021-06-08T18:41:13Z', pushed: "1623240314"},
         pusher:{name:"asafuch",email: '85555819+asafuch@users.noreply.github.com'},
         commit:{
            time: '2021-06-09T15:05:14+03:00',
            url: 'https://github.com/asafuch/demo/commit/96aa7c96f8ea231fae17c827b35874cef7e4e08e',
            message: 'Update demo.txt'
         }
     }
    render() {
        const {url,time,pusher,commit}=this.props
        return (
            <div>
            <div class="card text-center">
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
        </div>
        )
    }
}

export default Commit