import React, { Component } from 'react'
import Table1 from './Table1'

class Table extends Component {
    Data=[{Name:"jyothish",Salary:10000,Age:23},
    {Name:"jyothish",Salary:10000,Age:23},
    {Name:"jyothish",Salary:10000,Age:23},
    {Name:"jyothish",Salary:10000,Age:23}
]

  render() {
    return (
      <div>
      <Table1 employee_Data={this.Data}/>
      </div>
    )
  }
}

export default Table