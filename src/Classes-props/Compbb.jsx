import React  from "react";
class Compbb extends React.Component{
    render(){
        return(
            <div>
            <h1>COMPENTS</h1>
           <pre>{JSON.stringify(this.props)}</pre>
           <h1>NAME;{this.props.Name}</h1>
           <h2>Age:{this.props.Age}</h2>
            </div>)
    }
}
export default Compbb