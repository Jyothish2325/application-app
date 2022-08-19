import React, { Component } from 'react'
class Prod extends Component {
    state = {
        Product_Name:"iphone",
        image:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631773696/Croma%20Assets/Communication/Mobiles/Images/243460_yi4yqb.png/mxw_2048,f_auto',
        price:40000,
        qty:1
    
    }
   inHandler=()=>{
      this.setState({qty:this.state.qty-1})
   }
    dehand=()=>{
     this.setState({qty:this.state.qty+1})
    } 
     render() {
    return (
      <div>
      <nav >
      <div className='conatiner mt-5'>
      <div className='row'>
      <div className='col-md-6'>
      <table className='table table-hover'>
      <thead className='bg-dark text-white'>
      <tr>
      <th>Product</th>
      <th>image</th>
      <th>price</th>
      <th>qty</th>
      <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>{this.state.Product_Name}</td>
      <td><img src={this.state.image} height="100px" alt="buy"/></td>
      <td>{this.state.price}</td>
      <td><i className='fa fa-minus' onClick={this.inHandler}/>{this.state.qty}<i className='fa fa-plus' onClick={this.dehand}/> </td>
      <td>{this.state.price*this.state.qty}</td>
      </tr>
      </tbody>
      
      
      
      </table>
      </div>
      </div>
      </div>
      </nav>
      </div>
    )
  }
}

export default Prod