import React from 'react'

class Funs extends React.Component {
    state={
        quantity:1
    }
    incHandler=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decHandler=()=>{
        this.setState({quantity:this.state.quantity-1})
    }
  render() {
    return (
      <div>
      <h1>Qty:{this.state.quantity}</h1>
      <button onClick={this.incHandler}>incr</button>
      <button onClick={this.decHandler}>dec</button>


      </div>
    )
  }
}

export default Funs