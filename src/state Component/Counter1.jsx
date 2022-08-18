import React from 'react'

class Counter1 extends React.Component {
   state={
     QUANTITY:10
   }
   decHandler= ()=>{
   this.setState({QUANTITY:this.state.QUANTITY-1})
   }
     incHandler= ()=>{
        this.setState({QUANTITY:this.state.QUANTITY+1})
     }
        
  render() {
    return (
      <div><h1>quantity:{this.state.QUANTITY}</h1>
      <button on onClick={this.decHandler}>-</button>
      <span>SELECT</span>
      <button onClick={this.incHandler}>+</button>
      </div>
    )
  }
}

export default Counter1