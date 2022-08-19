import React, { Component } from 'react'

class Product extends Component {
  state={
    Product_name:"redmi note pro max",
    image: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639811761/Croma%20Assets/Communication/Mobiles/Images/246251_czbwr8.png/mxw_2048,f_auto",
    price:20000,
    qty:1
  
  }
  inHandler =()=>{
this.setState({qty:this.state.qty-1})
  }
  decHandler =()=>{
    this.setState({qty:this.state.qty+1})
  }
  render() {
    return (
      <div>
      <nav>
      <div className='container mt-5'>
      <div className='row'>
      <div className='col-md-6'>
      <table className='table table-hover'>
      <thead className='bg-dark text-white'>
      <tr ><th>name</th>
      <th>image</th>
      <th>price</th>
      <th>quantity</th>
      <th>total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>{this.state.Product_name}</td>
      <td> <img src={this.state.image} height="200px" alt="buy "/></td>
      <td>{this.state.price} </td>
      <td><i class="fa fa-minus-circle" onClick={this.inHandler}></i>
      {this.state.qty}
      <i class="fa fa-plus-square" onClick={this.decHandler}></i></td>
      <td>{this.state.qty * this.state.price}</td>
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

export default Product 




/*import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Freedom Refined Sunflower Oil",
            price: 169,
            qty: 1,
            image: 'https://rukminim1.flixcart.com/image/280/280/jwkzwy80/fmcg-combo/k/y/f/rozana-gold-basmati-5-kg-with-freedom-sunflower-oil-1-l-daawat-original-imafh43xzuwfethy.jpeg?q=70',

        }
    }

    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <th>Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td><img src={this.state.image} height="80px" alt="Buy Oil Packet" /></td>
                                <td>{this.state.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i onClick={this.incrHandler} className="fa fa-plus-square"></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product */