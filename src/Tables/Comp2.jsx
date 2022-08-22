import React, { Component } from 'react'

class Comp2 extends Component {
  render() {
    return (
      <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(this.props)}</pre>
      
      <nav >
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                  <table className='table table-hover'>
                  <thead className='bg-success text-white'>
                  <tr>
                  <th>id</th>
                  <th>first_name</th>
                  <th>last_name</th>
                  <th>email</th>
                  <th>gender</th>
                  
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.Data.map((Raw_Data)=>{
                    return(
                    <tr>
                    <th>{Raw_Data.id}</th>
                    <th>{Raw_Data.first_name}</th>
                    <th>{Raw_Data.last_name}</th>
                    <th>{Raw_Data.email}</th>
                    <th>{Raw_Data.gender}</th>
                    </tr>
    )})}
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

export default Comp2