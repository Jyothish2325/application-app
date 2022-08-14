import React from "react"
import Four from "./Four"
class Three extends React.Component{
    ename="Srinu"
    esalary=20000
    Employee_data={Name:"srinuvasla reddy" ,location:["bglr","nellore","vijayawada"]}
    render(){
        return(
            <>
            <h1>NAme:{this.ename}</h1>
            <h1>Salary:{this.esalary}</h1>
            <h1>Name:{this.Employee_data.Name}</h1>
            <h1>Location:{this.Employee_data.location[1]}</h1>
            <hr />
            <Four/>
            </>
        )
    }
}
export default Three