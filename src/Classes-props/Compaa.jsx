import React from "react"
import Compbb from "./Compbb"
class Compaa extends React.Component{
    Name="jyothish"
    age=23
      render(){
    
        return(<div>
            <h1>hello</h1>
            <Compbb Name={this.Name}
            Age={this.age}
            
            />
            </div>)
    }
}
export default Compaa