import React from "react"
 class Funa extends React.Component{
  state={  name:"jyo"
 }
 aHandler=()=>{
    this.setState({name:" Duvvuru jyothish Reddy"})
 }

render(){
    return<div>
    <h1>NAME:{this.state.name}</h1>
    <button onClick={this.aHandler}>plus</button>
    </div>
}
 }
 export default Funa