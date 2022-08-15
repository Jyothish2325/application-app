import React from "react"

let ComponentB = (props)=>{
    return(<>
    <h1>App React</h1>
    <hr/>
    <h2>ComponentB</h2>
    <pre>{JSON.stringify(props) }</pre>
  <h1>NAME:{props.name}</h1>
  <h1>Age:{props.age}</h1>
  <h1>Salary:{props.salary}</h1>
  <h1>Location:{props.location}</h1>
  </>
    )
}
export default ComponentB