import React, { Component } from 'react'

class Registrations extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:''

        }
    }
    upHand=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    sub=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
      <nav>
      <div class="container">
          <div class="row">
              <div class="col-md-10">
                  <div class="card">
                      <div class="card-header">
                      <h3>RESIGSTRATION LOGIN</h3>
                      <pre>{JSON.stringify(this.state)}</pre>
                      </div>
                      <div class="body">
                      <form onSubmit={this.sub}>
                     <div className='form-group'>
                     <input type="text" name='email' placeholder='EMAIL' className='form-control' onChange={this.upHand}/>
                     </div> 
                     <div className='form-group'>
                     <input type="password" name='password' placeholder='PASSWORD' className='form-control' onChange={this.upHand}/>
                     </div> 
                        <input type="submit" className='btn btn-primary' value="submit"/>
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

export default Registrations