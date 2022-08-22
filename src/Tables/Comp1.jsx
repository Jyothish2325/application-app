import React, { Component } from 'react'
import Comp2  from './Comp2'
export class Comp1 extends Component {
    Raw_Data=[{"id":1,"first_name":"Georgianne","last_name":"Carnier","email":"gcarnier0@weather.com","gender":"Female"},
    {"id":2,"first_name":"Andy","last_name":"Laidel","email":"alaidel1@cnbc.com","gender":"Male"},
    {"id":3,"first_name":"Amelina","last_name":"Hedderly","email":"ahedderly2@123-reg.co.uk","gender":"Female"},
    {"id":4,"first_name":"Hillyer","last_name":"Esby","email":"hesby3@smugmug.com","gender":"Male"},
    {"id":5,"first_name":"Philomena","last_name":"Moulding","email":"pmoulding4@pbs.org","gender":"Female"},
    {"id":6,"first_name":"Eyde","last_name":"Ouldred","email":"eouldred5@shareasale.com","gender":"Female"},
    {"id":7,"first_name":"Clara","last_name":"Coffin","email":"ccoffin6@blogger.com","gender":"Female"},
    {"id":8,"first_name":"Opaline","last_name":"Wickwarth","email":"owickwarth7@google.com","gender":"Female"},
    {"id":9,"first_name":"Adam","last_name":"Ewers","email":"aewers8@wikispaces.com","gender":"Male"},
    {"id":10,"first_name":"John","last_name":"Saint","email":"jsaint9@nhs.uk","gender":"Male"},
    {"id":11,"first_name":"Constantino","last_name":"Isoldi","email":"cisoldia@blogtalkradio.com","gender":"Male"},
    {"id":12,"first_name":"Beulah","last_name":"Beakes","email":"bbeakesb@weebly.com","gender":"Female"},
    {"id":13,"first_name":"Danny","last_name":"Boyse","email":"dboysec@arstechnica.com","gender":"Female"},
    {"id":14,"first_name":"Philipa","last_name":"Stoacley","email":"pstoacleyd@walmart.com","gender":"Female"},
    {"id":15,"first_name":"Augustine","last_name":"Sadlier","email":"asadliere@163.com","gender":"Male"},
    {"id":16,"first_name":"Margret","last_name":"Gillyett","email":"mgillyettf@about.me","gender":"Female"},
    {"id":17,"first_name":"Obed","last_name":"Murra","email":"omurrag@slate.com","gender":"Male"},
    {"id":18,"first_name":"Celia","last_name":"Dorward","email":"cdorwardh@statcounter.com","gender":"Female"},
    {"id":19,"first_name":"Rubi","last_name":"Vinker","email":"rvinkeri@skype.com","gender":"Female"},
    {"id":20,"first_name":"Cherey","last_name":"Bedham","email":"cbedhamj@squarespace.com","gender":"Female"},
    {"id":21,"first_name":"Kynthia","last_name":"Aldis","email":"kaldisk@indiegogo.com","gender":"Agender"},
    {"id":22,"first_name":"Ludwig","last_name":"Castrillo","email":"lcastrillol@bandcamp.com","gender":"Male"},
    {"id":23,"first_name":"Allan","last_name":"Turford","email":"aturfordm@paypal.com","gender":"Male"},
    {"id":24,"first_name":"Trever","last_name":"Winny","email":"twinnyn@wunderground.com","gender":"Male"},
    {"id":25,"first_name":"Deni","last_name":"Rewbottom","email":"drewbottomo@aboutads.info","gender":"Bigender"},
    {"id":26,"first_name":"Brantley","last_name":"Alleburton","email":"balleburtonp@reverbnation.com","gender":"Male"},
    {"id":27,"first_name":"Ricki","last_name":"McGilvray","email":"rmcgilvrayq@indiatimes.com","gender":"Female"},
    {"id":28,"first_name":"Arv","last_name":"McDougal","email":"amcdougalr@foxnews.com","gender":"Bigender"},
    {"id":29,"first_name":"Ibrahim","last_name":"Hebblewhite","email":"ihebblewhites@about.com","gender":"Male"},
    {"id":30,"first_name":"Moselle","last_name":"Kirtlan","email":"mkirtlant@unblog.fr","gender":"Female"},
    {"id":31,"first_name":"Douglas","last_name":"Huggins","email":"dhugginsu@youtube.com","gender":"Male"},
    {"id":32,"first_name":"Adriano","last_name":"Forton","email":"afortonv@ocn.ne.jp","gender":"Male"},
    {"id":33,"first_name":"Jim","last_name":"Brou","email":"jbrouw@blinklist.com","gender":"Male"},
    {"id":34,"first_name":"Johannes","last_name":"Surman-Wells","email":"jsurmanwellsx@arstechnica.com","gender":"Male"},
    {"id":35,"first_name":"Ashien","last_name":"Dikle","email":"adikley@fema.gov","gender":"Female"},
    {"id":36,"first_name":"Bartholomeus","last_name":"Cuell","email":"bcuellz@soup.io","gender":"Male"},
    {"id":37,"first_name":"Cyrille","last_name":"Sandes","email":"csandes10@webs.com","gender":"Male"},
    {"id":38,"first_name":"Jesse","last_name":"Poxson","email":"jpoxson11@tripod.com","gender":"Male"},
    {"id":39,"first_name":"Leonanie","last_name":"Dimitriades","email":"ldimitriades12@shareasale.com","gender":"Female"},
    {"id":40,"first_name":"Keely","last_name":"Male","email":"kmale13@yale.edu","gender":"Female"},
    {"id":41,"first_name":"Salomon","last_name":"Bevans","email":"sbevans14@telegraph.co.uk","gender":"Male"},
    {"id":42,"first_name":"Lilllie","last_name":"Shotbolt","email":"lshotbolt15@reuters.com","gender":"Female"},
    {"id":43,"first_name":"Gale","last_name":"McKyrrelly","email":"gmckyrrelly16@auda.org.au","gender":"Male"},
    {"id":44,"first_name":"Gretchen","last_name":"Kelemen","email":"gkelemen17@intel.com","gender":"Genderqueer"},
    {"id":45,"first_name":"Em","last_name":"Disbrow","email":"edisbrow18@unesco.org","gender":"Male"},
    {"id":46,"first_name":"Edd","last_name":"Khrishtafovich","email":"ekhrishtafovich19@aboutads.info","gender":"Agender"},
    {"id":47,"first_name":"Rorie","last_name":"Adie","email":"radie1a@shop-pro.jp","gender":"Female"},
    {"id":48,"first_name":"Merrick","last_name":"Upex","email":"mupex1b@blogtalkradio.com","gender":"Male"},
    {"id":49,"first_name":"Danny","last_name":"Harnor","email":"dharnor1c@webeden.co.uk","gender":"Female"},
    {"id":50,"first_name":"Korie","last_name":"Van der Linde","email":"kvanderlinde1d@nymag.com","gender":"Female"}]
  render() {
    return (
      <div>
      <h1>RAW DATA</h1>
      <Comp2 Data={this.Raw_Data}/>
      </div>
    )
  }
}

export default Comp1