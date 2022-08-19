import React, { Component } from 'react'

class Resgistration extends Component {
    state={
        name:"",
        mobile:"",
        email:"",
        password:""
    }
    name=( event)=>{
        this.setState({name:event.target.value})
    }
    email=(event)=>{
           this.setState({mobile:event.target.value})
    }
    password=(event)=>{
             this.setState({password:event.target.value})
    }
    mobile=(event)=>{
        this.setState({mobile:event.target.value})
    }
    submit=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
      <nav>
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-6">
                  <div class="card">
                  <pre>{JSON.stringify(this.state)}</pre>
                      <div class="card-header">
                        
                      </div>
                      <div class="body">
                      <form onSubmit={this.submit}>
                      <div className='form-group'>
                      <input type="text" placeholder='NAME' className='form-control' onChange={this.name}/>
                      </div>
                      <div className='form-group'>
                         <input type="text" placeholder='EMAIL' className='form-control' onChange={this.email}/>
                         </div> 
                         <div className='form-group'>
                         <input type="text" placeholder='PASSWORD' className='form-control' onChange={this.password}/>
                         </div>
                         <div className='form-group'>
                         <input type="text" placeholder='MOBILE' className='form-control' onChange={this.mobile}/>
                         </div>
                         <input type="submit" className='btn btn-info' value="REGISTRATION"/>
                      </form></div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
      </div>
    )
  }
}

export default Resgistration