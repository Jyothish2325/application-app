import React from 'react'

 class Func extends React.Component {
    state={
        Salary:10000
    }
    onHandler= ()=>{

        this.setState({Salary:20000})
    }
   
    twoHandler= () =>{
        this.setState({Salary:30000})
    }
    threeHandler= () =>{
        this.setState({Salary:40000})
    }
  render() {
    return (
      <div>
      <h1>SALARY:{this.state.Salary}</h1>
      <button onClick={this.onHandler}>1</button>
      <button onClick={this.twoHandler}>2</button>
      <button onClick={this.threeHandler}>3</button>
      </div>
    )
  }
}

export default Func