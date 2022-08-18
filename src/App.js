import React from 'react'
import Funb from "./state Component/Funb"
import Func from "./state Component/Func"
import Funs from "./state Component/Funs"
import Counter1 from "./state Component/Counter1"

 class App extends React.Component {
  render() {
    return (
      <div>
      <h1> React</h1>
      <hr/>
      <Funb/>
      <hr/>
      <Func/>
      <hr/>
      <Funs/>
      <hr/>
      <Counter1/>
     
      </div>
    )
  }
}

export default App