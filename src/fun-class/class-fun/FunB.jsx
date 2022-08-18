import React from 'react'

function FunB(props) {
  return (
    <div>
    <pre>{JSON.stringify(props)}</pre>
    <h1>NAME:{props.name}</h1>
    <h1>salary:{props.salary}</h1></div>
  )
}

export default FunB