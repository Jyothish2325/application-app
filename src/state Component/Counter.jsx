import React from 'react'
class Counter extends React.Component {
    state={
        COUNTER:1
    }
    inHandler=()=>{
        this.setState({COUNTER:this.state.COUNTER+1})
    }
    deHandler =()=>{
        this.setState({COUNTER:this.state.COUNTER-1})
    }
  render() {
    return (
      <div><h1>COUNTER:{this.state.COUNTER}</h1>
      <button onClick={this.inHandler}>+</button>
      <button onClick={this.deHandler}>-</button>
    </div>
    ) 
  }
}

export default Counter