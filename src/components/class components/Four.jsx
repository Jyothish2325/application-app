import React from "react"
class Four extends React.Component{
    name="jyothish"
    location="nellore"
    Mother_name="anu"
    father_details={name:"srinivasulu reddy",Age:45,occupation:"farmer"}
    render(){
        return(<>
        <h1>NAME:{this.name}</h1>
        <h1>LOCATION:{this.location}</h1>
        <h1>Mother_name:{this.Mother_name}</h1>
        <h1>FATHER NAME :{this.father_details.name}</h1>
        <h1>FATHER AGE :{this.father_details.Age}</h1>
        </>

    )
}
}
export default Four