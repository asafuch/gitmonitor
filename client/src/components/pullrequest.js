import React, { Component } from 'react'

 class PullRequest extends Component {
    static defaultProps={
        url: 'https://github.com/asafuch/demo',
        time: { updated: '2021-06-08T18:41:13Z', pushed: '2021-06-09T12:05:14Z' },
        action: 'opened',
        number: 6,
        pull: {
            url: 'https://api.github.com/repos/asafuch/demo/pulls/6',
            title: 'new pull',
            user: { name: undefined, url: 'https://github.com/asafuch' }
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
                            <p class="card-text">{action==="opened" ? `New pull request has been added by ${pull.user.url}, check it out`:"a Pull request has been closed,check out why"}</p>
                            <a href={pull.url} target="_blank" class="btn btn-primary">Click here</a>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
            </div>
        )
    }
}
export default PullRequest