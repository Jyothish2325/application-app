import React from "react"
class CompD extends React.Component{
    render(){
        return(<>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>NAME;{this.props.name}</h1>
        <h1>AGE:{this.props.age}</h1>
        <h1>LOCATION:{this.props.location}</h1>
        <h1>MOBILE:{this.props.mobile}</h1>
        </>)
    }
}
export default CompD