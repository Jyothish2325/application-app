import React from"react"
import ComponentD from "./ComponentD"
function ComponentC (){
    let Brand="iphone"
    let price=100000
    let features={Ram:"8gb",Internal:256}
    return (
    <>
    <h1>hai</h1>
    <hr/>
    <ComponentD
    name={Brand}
    Price={price}
    Ram={features.Ram}
    Internal={features.Internal}
     />
    </>)
}
export default ComponentC