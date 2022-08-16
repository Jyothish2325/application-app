import React, { Component } from 'react'

export class ClassA extends Component {
  render() {
    return (
      <div> <pre>{JSON.stringify(this.props)}</pre>
      <h1>NAME:{this.props.name}</h1>
      <h1>SALARY:{this.props.Salary}</h1>
      </div>
    )
  }
}

export default ClassA