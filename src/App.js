import React  from 'react'
import Navbar from "./Navbar"

import Form from "./Forms/Form"
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
     
      <Form/>
      </div>
    )
  }
}

export default App