import React  from 'react'
import Navbar from "./Navbar"
import Tab from './Tab/Tab'
import Tables from './Tab/Tables'

class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Tab/>
      <Tables/>
      </div>
    )
  }
}

export default App