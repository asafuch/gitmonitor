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
        console.log(this.props);
        return (
            <div>
                <h1>PULL</h1>
            </div>
        )
    }
}
export default PullRequest