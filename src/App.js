import React  from 'react'
import Navbar from "./Navbar"
/*import Product from "./Counter/Product"*/
import Prod from "./Counter/Prod" 
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Prod/>
      </div>
    )
  }
}

export default App