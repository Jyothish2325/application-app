import React from "react"
import CompB from "./CompB"
class CompA extends React.Component{
    Name="jyothish"
    Age=23
    render(){
        return(<>
        <h1>PROPERTY</h1>
        <CompB NAME={this.Name}
        AGE={this.Age}/>
        </>)
    }
}
export default CompA