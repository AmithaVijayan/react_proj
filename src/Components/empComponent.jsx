import React, { Component, createContext, Fragment } from 'react'
class EmpComponent  extends Component {
    state = { 
        empid : '101',
        empname : 'anu',
        empsal : 20000,
        empDesig : 'hr',
        empPhoto :'https://images.unsplash.com/photo-1515130166460-532bc0777f50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
     }
    render() { 
        console.log(this.state);
        return ( 
            
            <Fragment>
                <section>
                    <article>
                        <img src={this.state.empPhoto} alt={this.state.empname} />
                        <h1>Name :{this.state.empname}</h1>
                        <p>ID :{this.state.empid}</p>
                         <p>Salary :{this.state.empsal}</p>
                          <p>JOB :{this.state.empDesig}</p>
                    </article>
                </section>
            </Fragment>
         );
    }
}
 
export default EmpComponent;
