import React, { Component } from 'react'

 class ClassB extends Component {
  render() {
    return (
      <div><h1>ClassesB</h1>
      <pre>{JSON.stringify(this.props)}</pre>
      <h1>Name:{this.props.name}</h1>
      <h1>Salary:{this.props.salary}</h1>
      <h1>Location:{this.props.location}</h1>
      <h1>state:{this.props.state}</h1>
      </div>

    )
  }
}

export default ClassB