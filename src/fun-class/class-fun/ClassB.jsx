import React from 'react'
import FunB from "./FunB"
 class ClassB extends React.Component {
    name="jyothish"
    salary=300000
  render() {
    return (
      <div>
      <h1>FUNCTIONS</h1>
      <FunB name={this.name}
      salary={this.salary}/>
      </div>
    )
  }
}

export default ClassB