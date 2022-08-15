import React from "react"

function CompB(props){
    return(<>
    <h1>props</h1>
   <pre>{JSON.stringify(props)}</pre>
   <h1>Email;{props.email}</h1>
   <h1>NAME:{props.Name}</h1>
   <h1>Age:{props.Age}</h1>
   <h1>Adree:{props.Adress}</h1>
    </>)
}
export default CompB