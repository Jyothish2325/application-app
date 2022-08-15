import React from"react"
function ComponentD (props){
    return (
    <>
    <h1>ComponentD</h1>
    <pre>{JSON.stringify(props)}</pre>
    <hr/>
    <h1>Brand:{props.name}</h1>
    <h1>price:{props.Price}</h1>
    <h1>Ram:{props.Ram}</h1>
    <h1>internal:{props.Internal}</h1>
    </>)
}
export default ComponentD 