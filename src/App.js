import React from "react"
/*import ComponentA from "./props/functions-props/ComponentA"*/
/*import ComponentC from "./props/functions-props/ComponentC"*/
/*import CompA from "./props/functions-props/CompA"*/
/*import CompA from "./Classes-props/CompA"*/
import CompC from "./Classes-props/CompC"
class App extends React.Component{
    render(){
        return(<>
        <h1>PROPS</h1>
        <hr/>
        <CompC/>
        </>)
    }
}
export default App