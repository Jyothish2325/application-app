import React from "react"
import Three from "./Three"
class Two extends React.Component{
    Name="svs"
    Adress="Tirumala"
    render(){
        return(
            <>
            <h1>NAME:{this.Name}</h1>
            <h1>ADRESS:{this.Adress}</h1>
            <hr />
            <Three/>
            </>
        )
    }
}
export default Two