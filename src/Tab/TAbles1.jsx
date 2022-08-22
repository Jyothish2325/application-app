import React, { Component } from 'react'

 class TAbles1 extends Component {
  render() {
    return (
      <div>
      
      
      <nav>
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                  <div class="card">
                      <div class="card-header">
                      <h1>RAW DATA</h1>
                      <pre>{JSON.stringify(this.props)}</pre>
                      </div>
                      <div class="body">
                          <table className='table table-hover'>
                          <thead className='bg-danger text-success'>
                          <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          </tr>
                          
                          </thead>
                          <tbody>
                          {this.props.Raw.map((Data)=>{
                            return(

                                <tr>
                                <td className='bg-success text-white'>{Data.id}</td>
                                <td className='bg-info text-dark'>{Data.Name}</td>
                                <td className='bg-dark text-white'>{Data.email}</td>
                                <td className='bg-primary text-dark'>{Data.gender}</td>
                                </tr>
                            )
                          })}</tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
      </div>
    )
  }
}

export default TAbles1