import React from 'react'

function FunB(props) {
  return (
    <div><h1>FUNCTIONS</h1>
    <pre>{JSON.stringify(props)}</pre>
    <hr/>
    <h1>NAME:{props.name}</h1>
    <h1>SALARY:{props.salary}</h1>
    </div>
  )
}

export default FunB