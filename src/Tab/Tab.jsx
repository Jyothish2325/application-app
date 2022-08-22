import React, { Component } from 'react'
import Tab1 from './Tab1'
 class Tab extends Component {
    Raw=[{"id":1,"Name":"Samwaye","email":"fsamwaye0@flavors.me","gender":"Male"},
    {"id":2,"Name":"Swainson","email":"bswainson1@meetup.com","gender":"Male"},
    {"id":3,"Name":"Gullyes","email":"hgullyes2@taobao.com","gender":"Genderfluid"},
    {"id":4,"Name":"Ashplant","email":"cashplant3@wikipedia.org","gender":"Male"},
    {"id":5,"Name":"Brimble","email":"zbrimble4@ameblo.jp","gender":"Female"},
    {"id":6,"Name":"Danielsohn","email":"ldanielsohn5@ca.gov","gender":"Male"},
    {"id":7,"Name":"Haddon","email":"chaddon6@jiathis.com","gender":"Male"},
    {"id":8,"Name":"Ohanessian","email":"aohanessian7@rambler.ru","gender":"Male"},
    {"id":9,"Name":"Growcott","email":"bgrowcott8@cnet.com","gender":"Female"},
    {"id":10,"Name":"Toe","email":"etoe9@themeforest.net","gender":"Male"}]
    
  render() {
    return (
      <div>
      <h1>RAW DATA</h1>
      <Tab1 Data={this.Raw}/>
      </div>
    )
  }
}

export default Tab