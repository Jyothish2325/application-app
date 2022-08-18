import React from 'react'

 class Counter extends React.Component {
    state={
        SALARY_HIKE:10000
    }
    inHandler =(a)=>{
        this.setState({SALARY_HIKE:a})
    }
  render() {
    return (
      <div>
      <h1>react</h1>
      <h2>salary:{this.state.SALARY_HIKE}</h2>
      <button onClick={this.inHandler.bind (this,30000)}>200</button>
      <span>hai</span>
      <button onClick={this.inHandler.bind (this,20000)}>100</button>
      <button onClick={this.inHandler.bind(this,12000)}>10</button>
      </div>
    )
  }
}

export default Counter