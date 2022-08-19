import React  from 'react'
import Navbar from "./Navbar"

import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
     <Form2/>
      <Form3/>
      </div>
    )
  }
}

export default App