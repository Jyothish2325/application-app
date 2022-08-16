import React, { Component } from 'react'

export class ImpB extends Component {
  render() {
    return (
      <div>
      <pre>{JSON.stringify (this.props)}</pre>
      <h1>Name:{this.props.name}</h1>
      <h1>Age:{this.props.age}</h1>
      <h1>Salary:{this.props.salary}</h1>
      </div>
    )
  }
}

export default ImpB