import React from "react"
let CompD=(props)=>{
    return(<>
    <pre>{JSON.stringify(props)}</pre>
    <h1>Name:{props.name}</h1>
    <h1>Age:{props.Age}</h1>
    <h1>Location:{props.Location}</h1>
    </>)
}
export default CompD