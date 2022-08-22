import React, { Component } from 'react'

 class Tab1 extends Component {
  render() {
    return (
      <div>
      
      
      <nav>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                        <h1>Raw Data</h1>
                        <pre>{JSON.stringify(this.props)}</pre>
                        </div>
                        <div class="body">
                           <table   className='table table-hover'>
                             <thead className='bg-dark text-success'>
                             <tr>
                             <td>ID</td>
                             <td>NAME</td>
                             <td>EMAIL</td>
                             <td>GENDER</td>
                             
                             </tr>
                             </thead> 
                             <tbody >
                             {this.props.Data.map((Raw)=>{
                                return(

                                    <tr>
                                    <td className='bg-success text-white'>{Raw.id}</td>
                                    <td className='bg-success text-danger'>{Raw.Name}</td>
                                    <td>{Raw.email}</td>
                                    <td className='bg-info text-white'>{Raw.gender}</td>
                                    </tr>
                                )
                             })}
                             </tbody>
                           
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

export default Tab1