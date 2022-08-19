import React from "react"
class Prov extends React.Component{
    state={
        name:"realme",
        image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645266504/Croma%20Assets/Communication/Mobiles/Images/248840_cwrzxz.png/mxw_2048,f_auto",
        price:14999,
        quantity:0
    }
    Minus = ()=>{
        this.setState({quantity:this.state.quantity-1})
    }
    Plus=()=>{
        this.setState({quantity:this.state.quantity+ 1})
    }
render(){
    return (
    <div>
    <nav>
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8">
      <table className="table table-hover">
      <thead className="bg-dark text-white">
      <tr>
      <th>Name</th>
      <th>image</th>
      <th>price</th>
      <th>quantity</th>
      <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>{this.state.name}</td>
      <td><img src={this.state.image} height="100px" alt="buy"/ ></td>
      <td>{this.state.price}</td>
      <td><i  className="fa fa-minus-circle" onClick={this.Minus}/>{this.state.quantity}<i className="fa fa-plus-circle " onClick={this.Plus}/></td>
      <td>{this.state.price* this.state.quantity}</td>
      </tr></tbody>
      </table>
      </div>
      </div>
      </div>
    </nav>
    </div>)
}
}
export default Prov