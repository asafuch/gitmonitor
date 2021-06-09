import React, { Component } from 'react'

 class PullRequest extends Component {
    static defaultProps={
        url: 'https://github.com/asafuch/demo/pull/12',
        time: { updated: '2021-06-08T18:41:13Z', pushed: '2021-06-09T12:45:46Z' },
        action: 'opened',
        number: 12,
        pull: {
            url: 'https://github.com/asafuch/demo/pull/12',
            title: 'Asafuch patch 1',
            user: { name: 'asafuch', url: 'https://github.com/asafuch' }
        },
        sender: { name: undefined, url: 'https://github.com/asafuch', type: 'User' }
    }
    render() {
        const {url,time,action,number,pull,sender}=this.props
 
        return (
            <div>
                <div class="card text-center">
                    <div style={action==="opened" ? {background:"#28a745"} : {background:"red"}} class="card-header">
                        {action==="opened" ? "New Pull Request" : "Pull Request Closed"}
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Title: {pull.title}</h5>
                            <p class="card-text">{action==="opened" ? `New pull request has been added by ${pull.user.name}  check it out`:"a Pull request has been closed,check out why"}</p>
                            <a href={pull.url} target="_blank" class="btn btn-primary">Click here</a>
                        </div>
                        <div class="card-footer text-muted">
                           {`updated at: ${time.updated}, pushed at: ${time.pushed}`}
                        </div>
                    </div>
            </div>
        )
    }
}
export default PullRequest