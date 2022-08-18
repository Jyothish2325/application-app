import React from 'react'

 class Counter2 extends React.Component {
    state={
      SIZE:26       
    }
    jyothish =(jyo)=>{
        this.setState({SIZE:jyo})
    }
  render() {
    return (
      <div>
      <h1>HELLO REACT WORLD</h1>
      <h2>SIZE:{this.state.SIZE}</h2>
      <button onClick={this.jyothish.bind(this,28)}>size</button>
      <button onClick={this.jyothish.bind(this,30)}>size1</button>
      </div>
    )
  }
}

export default Counter2