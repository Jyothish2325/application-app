import React from 'react'
import ClassA from "./ClassA"
function FunA() {
    let Name="jyothish"
    let Salary=20000
  return (
    <div>
    <h1>Fun-Class</h1>
   <ClassA name={Name}
    Salary={Salary} />
    </div>
  )
}

export default FunA