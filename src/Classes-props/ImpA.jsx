import React, { Component } from 'react'
import ImpB from "./ImpB"

class ImpA extends Component {
    Name="jyothish"
    data={age:24,Salary:10000}

  render() {
    return (
      <div>
      <h1>Classes props</h1>
      <ImpB name={this.Name}
      age={this.data.age}
      salary={this.data.Salary}/>
      
      </div>
    )
  }
}

export default ImpA