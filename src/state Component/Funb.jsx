import React from "react"

 class Funb extends React.Component {
state={
    name:"jyothish"
}
allHandler=()=>{
    this.setState({name:"hello"})
}
aaHandler= ()=>{
    this.setState({name:"pilla"})
}
  render() {
    return (
      <div><h1>NAME:{this.state.name}</h1>
      <button onClick={this.allHandler}>click</button>
      <button onClick={this.aaHandler}>click1</button>
      </div>
    )
  }
}

export default Funb