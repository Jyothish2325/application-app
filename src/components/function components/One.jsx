import React from "react"
import Two from  "./Two"
function One(){
    let name="jyothish"
    let Salary =20000
    return(
        <>
        <h1>Name:{name}</h1>
        <h2>Salary:{Salary}</h2>
        <hr />
        <Two/>
        </>)
}
export default One