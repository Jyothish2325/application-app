import React, { Component } from 'react'

class Producs extends Component {
    state={
        Name:"samsung",
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-g781bzggins/gallery/in-galaxy-s20-fe-5g-g781-sm-g781bzggins-405304988?$PD_GALLERY_L_JPG$",
        price:19999,
        quantity:0
    }
    Minus=()=>{
          this.setState({quantity:this.state.quantity-1})
    }
    Plus=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
  render() {
    return (
      <div>
      <nav>
      
      </nav>
      <div className='conatiner mt-5'>
      <div className='row'>
      <div className='col-md-8'>
       <table className='table table-hover'>
       <thead className='bg dark'>
       <tr>
       <th>Product Name</th>
       <th>image</th>
       <th>price</th>
      <th>quantity</th>
      <th>total</th>
      </tr>
       </thead>
       <tbody>
       <tr>
       <th>{this.state.Name}</th>
       <th> <img src={this.state.image} height=" 100px" alt='buy'/></th>
       <th>{this.state.price}</th>
       <th><i className='fa fa-minus-square' onClick={this.Minus}/>{this.state.quantity}<i className='fa fa-plus-square' onClick={this.Plus}/></th>
       <th>{this.state.price* this.state.quantity}</th>
       </tr>
       </tbody>
       
       </table>
      </div>
      </div>

      </div>
      </div>
    )
  }
}

export default Producs