import React from "react"
class CompB extends React.Component{
    render(){
        return(<>
        <h1>PROPS</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>Name:{this.props.NAME}</h1>
        <h1>Age:{this.props.AGE}</h1>
        </>)
    }
}
export default CompB