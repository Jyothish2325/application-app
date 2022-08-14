import React from "react";
import Two from "./Two"
class One extends React.Component{
    name="jyothish"
    Age=23
    render(){
        return(
            <>
            <h1>NAME:{this.name}</h1>
            <h2>Age:{this.Age}</h2>
           <hr />
           <Two/>
            </>
        )
    }
} 
export default One