import React from "react"
import Three from "./Three"
function Two(){
    let name="jyothish"
    let age=23
    let location = ["bglr","nellore","hyd"]
    return(<>
        <h1>HELLO REACT WORLD</h1>
        <hr></hr>
        <h1>NAME:{name}</h1>
        <h1>AGE:{age}</h1>
       <h1>LOCATION:{location[1]}</h1>
       <hr />
       <Three/>
        </>)
}
export default Two