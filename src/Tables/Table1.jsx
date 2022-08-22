import React, { Component } from 'react'

class Table1 extends Component {
  render() {
    return (
      <div>
      <h1>data</h1>
      <pre>{JSON.stringify(this.props)}</pre>

      <table  border="2">
      <thead>
      <tr>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
      
      </tr>
      </thead>
     
      <tbody>
      {this.props.employee_Data.map((Data)=>{
        return(
            <tr>
            <td>{Data.Name}</td>
            <td>{Data.Salary}</td>
            <th>{Data.Age}</th></tr>
        )
      }
        )}
      </tbody>
      </table>
      </div>
    )
  }
}

export default Table1