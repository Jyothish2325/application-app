import React from "react"
import CompB from "./CompB"
function CompA(){
    let Email="jyo.@gmail.com"
    let name="jyothish"
    let data ={age:20,Adress:"nellore"}
    return(<>
    <CompB    email={Email}
    Name={name}
    Age={data.age}
    Adress={data.Adress}/>
    </>)
}
export default CompA