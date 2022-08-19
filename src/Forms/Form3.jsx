import React, { Component } from 'react'

 class Form3 extends Component {
    state={
        name:"",
        email:"",
        password:""
    }
    nameHand=(event)=>{
        this.setState({name:event.target.value})
    }
    emailHand=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHand=(event)=>{
        this.setState({password:event.target.value})
    }
    onsubmitHandler=(event)=>{
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
                      <div class="card-header">
                       <h1>Registartion form</h1>
                       <pre>{JSON.stringify(this.state)}</pre>
                      </div>
                      <div class="body">
                        <form onSubmit={this.onsubmitHandler}>
                      <div className='form-group'>
                      <input type="text" className='form-control' placeholder='NAME' onChange={this.nameHand} />
                      </div>
                      <div className='form-group'>
                      <input type="text" className='form-control' placeholder='EMAIL' onchange={this.emailHand}/>
                      </div>
                      <div className='form-group'>
                      <input type="text" className='form-control mt-' placeholder='PASSWORD' onChange={this.passwordHand}/>
                      </div>
                      <input type='submit' className="btn btn-primary " value="login "/>
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

export default Form3