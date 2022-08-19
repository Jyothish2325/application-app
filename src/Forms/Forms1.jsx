import React, { Component } from 'react'

class Forms1 extends Component {
    state={
        email:"jyo@gamil.com",
        password:"klufhdiosuhfdb"
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
                      <h2>Forms</h2>
                      <pre>{JSON.stringify(this.state)}</pre>
                        
                      </div>
                      <div className="card-body">
                      <form>
                         <div className='form-group'>
                         <input type="text" placeholder='EMAIL'className='form-control'/>
                        </div>
                        <div className='form-group'>
                        <input type="text" placeholder='PASSWORD' className='form-control'/>
                        </div>
                        <div>
                         <input type="submit"    className='btn btn-success' value="form login"/>
                        </div>
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

export default Forms1