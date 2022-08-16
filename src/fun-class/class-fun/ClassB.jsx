import React  from 'react'
import FunB from "./FunB"
class ClassB extends React.Component {
    name="jyothish"
    salary=20000
  render() {
    return (
      <div>
      <FunB name={this.name}
      salary={this.salary}/></div>
    )
  }
}

export default ClassB