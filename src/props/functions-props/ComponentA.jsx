import Raect from "react"
import ComponentB from "./ComponentB"
let ComponentA =()=>{
    let Name="jyothish"
    let salary=10000
    let Details={age:23, location:"nellore"}
    return( <>
    <h1>ComponentA</h1>
    <hr/>
    <ComponentB name={Name}
    salary={salary}
    age={Details.age}
    location={Details.location} />
    </>
    )
}
export default ComponentA