import React, { Component, createContext, Fragment } from 'react'
class StateExample extends Component {
    state = { 
        username : 'anu',
        password : '12345'
     }
    render() { 
        console.log(this.state);
        return (  
            <Fragment>
                <h1>username : {this.state.username}</h1>
                <h1>password : { this.state.password}</h1>
            </Fragment>
        );
    }
}
 
export default StateExample;