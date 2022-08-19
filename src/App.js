import React  from 'react'
import Navbar from "./Navbar"
import Prov from './product/Prov'
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Prov/>
      </div>
    )
  }
}

export default App