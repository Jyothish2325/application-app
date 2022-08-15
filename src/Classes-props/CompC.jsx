import React from "react"
import CompD from "./CompD"
class CompC extends React.Component{
    Name="jyothish"
    Age=23
    Mobile=894813587
    location=["nellore","hyd","bglr"]
    render(){
        return(<>
        <h1>CLASS</h1>
        <hr/>
        <CompD name={this.Name}
        age={this.Age}
        location={this.location[0]}
        mobile={this.Mobile}/>
        </>)
    }
}
export default CompC