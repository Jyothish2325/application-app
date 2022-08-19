import React, { Component } from 'react'

class Form2 extends Component {
    state={
        email:"",
        Password:""
    }
    emailhandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passHandler=(event)=>{
        this.setState({Password:event.target.value})
    }
    subHandler=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
      <nav>
      <div class="container mt-5">
          <div class="row">
              <div class="col-md-5">
                  <div class="card">
                      <div class="card-header">
                      <h1>LOGINFORM</h1>
                      <pre>{JSON.stringify(this.state)}</pre>
                      </div>
                      <div class="body">
                      <form onSubmit={this.subHandler}>
                      <div className='form-group'>
                      <input  type="text"  placeholder='EMAIL' onChange={this.emailhandler} className='form-control'/>
                      </div>
                      <div className='form-group'>
                      <input type="text" placeholder='PASSWORD' onChange={this.passHandler} className='form-control'/>
                      </div>
                      
                      <input type="submit" className='btn btn-dark ' value="login"   />
                      
                      </form>
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

export default Form2