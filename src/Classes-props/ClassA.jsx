import React, { Component } from 'react'
import ClassB from './ClassB'
 class ClassA extends Component {
    Name="jyothish"
salary=20000
Details={location:["nellore","hyd","bglr"], state:"ap"}
  render() {
    return (
        <div>
      <h1>ClassesA </h1>
      <hr/>
      <ClassB  
      name={this.Name}
      salary={this.salary}
      location={this.Details.location}
      state={this.Details.state}
      /> 
      </div>

    )
  }
}

export default ClassA