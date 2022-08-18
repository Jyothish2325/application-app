import React from 'react'
import Funb from "./state Component/Funb"
import Func from "./state Component/Func"

 class App extends React.Component {
  render() {
    return (
      <div>
      <h1> React</h1>
      <hr/>
      <Funb/>
      <hr/>
      <Func/>
     
      </div>
    )
  }
}

export default App