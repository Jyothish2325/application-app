import React, { Component } from 'react'

class Form extends Component {
    state={
        email:"jyothish@gmail.com",
        password:"jyothish"
    }
  render() {
    return (
      <div>
      <nav>
          <div className='container mt-5'>
                            <div className='row'>
                <div className='col-md-4'>
                 <pre>{JSON.stringify(this.state)}</pre>
                    <div className='card'>
                                 <div className='card-header'>
                                  <h2>LOGIN FORM</h2>
                                 </div>
                                   <div className='card-body'>
                                   <form>
                                        <div className='form-group'>
                                         <input type="text" placeholder='Eamil' className='form-control' required/>
                                       </div>
                                       <div className='form-group'>
                                       <input type="text"  placeholder="Password" className='form-control' required/>
                                       </div>
                                      
                                       <input type="submit" value="login" className="btn btn-success" />
                                       
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

export default Form