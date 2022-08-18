import React from "react"
class Stateo extends React.Component{
    state={
        name:"jyothish"
    } 
    gmHandler= ()=>{
        this.setState({name:"jyothish reddy"})
    } 
    render()
    {
        return(<div>
            <h1>NAME;{this.state.name}</h1>
      <button onClick={this.gmHandler}> test</button>
      </div>
      )
    }
}
export default Stateo