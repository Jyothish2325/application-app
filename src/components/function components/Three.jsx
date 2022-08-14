import React from "react"
function Three(){
    let name="teja"
    let age=30
   let adress="nellore"
    let Details={name:'chinni',Age:23,location:["nellore","hyd"]}
    return(
        <div>
            <h1>Name:{name}</h1>
            <h2>Age:{age}</h2>
            <h3>Adress:{adress}</h3>
            <h4>Name:{Details.name}</h4>
            <h4>Age:{Details.Age}</h4>
            <h4>Location:{Details.location[1
            
            ]}</h4>
           
            
        </div>
    )
}
export default Three