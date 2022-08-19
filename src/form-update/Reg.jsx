import React, { Component } from 'react'

 class Reg extends Component {
    state={
        name:"",
        email:'',
        password:''

    }
    update=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submit=(event)=>{
   event.preventDefault()
    }
  render() {
    return (
      <div>
      <nav>
      <div class="container mt-5">
          <div class="row">
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-header">
                         <h2>RESGIDTRSTION FORMS</h2>
                         <pre>{JSON.stringify(this.state)}</pre>
                      </div>
                      <div class="body">
                      <form  onSubmit={this.submit}> 
                        <div className='form-group'>
                        <input type="text " name="name" className='form-control' onChange={this.update} placeholder="name"/>
                        </div>
                        <div className='form-group'>
                        <input type="password " name="email" className='form-control' onChange={this.update} placeholder="email"/>
                        </div>
                        <div className='form-group'>
                        <input type="password " name="password" className='form-control' onChange={this.update} placeholder="password"/>
                        </div>
                        <input className='btn btn-danger' type="submit" value="Login"/>
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

export default Reg