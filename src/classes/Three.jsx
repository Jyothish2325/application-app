import React from "react";
import Four from "./Four"
class Three extends React.Component{
    render(){
        return(
            <div>
                <h1>HTML</h1>
                <h2>CSS</h2>
                <hr></hr>
                <Four/>
            </div>
        )
    }
}
export default Three