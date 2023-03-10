import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
import AreaChart from '../1general/components/areachart'

import { deptInfoContext } from '../Globalcontext';


function Departmentoverview() {

 const {departmentinfo} = useContext(deptInfoContext);
 const [searchTerm, setSearchTerm] = useState('');
 const [adminlist ,setadminlist] = useState()


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



useEffect(()=>{
  if(departmentinfo.depadminlist !== undefined){
    setadminlist(departmentinfo.depadminlist.map(item=>(
      {'name': item.firstname + ' ' + item.lastname + ' ' + item.suffix}
    )))
  }
 
},[departmentinfo.depadminlist])


  return (
    departmentinfo != undefined ?



    <div className="row">
    <div className="col-lg-12 displaynone ">
      <div className="tertiary borderradius-md paneladd " >
        <div className='area'><AreaChart></AreaChart></div>
        </div> 
    </div>

   <div className="col-lg-6">
    <div className="row">
      <div className="col-lg-6 margintop12">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Classes</h4>
          <p>
            <ul>
              <li>4th year {departmentinfo.fourthyear}</li>
              <li>3rd year {departmentinfo.thirdyear}</li>
              <li>2nd year {departmentinfo.secondyear}</li>
              <li>1st year {departmentinfo.firstyear}</li>
            </ul>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Accounts</h4>
          <p>
            <ul>
              <li>Professors : {departmentinfo.profcount}</li>
              <li>Students : {departmentinfo.studcount}</li>           
            </ul>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Events</h4>
         
          </div> 
      </div>
      <div className="col-lg-6 margintop12">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Subjects</h4>
         
          </div> 
      </div>
    </div>
  </div>



  <div className="col-lg-6">

    <div className="row">
    <div className="col-lg-12 margintop12">
        <div className="tertiary borderradius-md overviewlist" >
         <div className='flex'> <h4>Department Admin</h4>  
         <input
           type="text"
            placeholder="Search by name"
            className="search1"
            onChange={handleSearch}
/>
</div>

          <ul className='margintop12'>


           { adminlist != undefined && adminlist.filter(searchitem=>
              searchitem.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm=== ''
           ).map((item, key)=>(
                 <li key={key}>
                  <div className="personpanel">
                    <div>
                      <img src={avatar} alt="" /></div>
                    <div className="personpanelcontent">
                      <h5>{item.name}</h5>
                      
                    </div>
                  </div>
               </li>
            ))} 
          
       
           
         
          </ul>  
                       
        </div> 
  </div>

  
    </div>
       
  </div>




    </div>
    :
    <div>loading department overview</div>
   
   
    
  )

}
 
 


  


export default Departmentoverview