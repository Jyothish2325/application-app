import React  from 'react'
import Navbar from "./Navbar"
import Counter2 from "./Counter/Counter2"
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Counter2/>
      </div>
    )
  }
}

export default App