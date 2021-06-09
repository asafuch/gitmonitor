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
        console.log(this.props);
        return (
            <div>
                <h1>Commit!</h1>
            </div>
        )
    }
}

export default Commit