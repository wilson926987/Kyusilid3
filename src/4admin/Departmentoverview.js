import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
import AreaChart from '../1general/components/areachart'
import { useOutletContext } from 'react-router-dom';
import { deptInfoContext } from '../Globalcontext';




function Departmentoverview() {

 const {departmentinfo} = useContext(deptInfoContext);
 const [searchTerm, setSearchTerm] = useState('');

 

 useEffect(()=>{
    console.log(departmentinfo);
 },[departmentinfo])

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
         <div className='searchDept'> 
         <h4>Department Admin</h4>  
         <input
           type="text"
            className="searchDept"
            placeholder='Search by Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
</div>

          <ul className='margintop12'>


           { departmentinfo.depadminlist != undefined && departmentinfo.depadminlist
            .filter((item) => item.firstname.toLowerCase().includes(searchTerm.toLowerCase())).map((item, key)=>(
                 <li key={key}>
                  <div class="personpanel">
                    <div>
                      <img src={avatar} alt="" /></div>
                    <div class="personpanelcontent">
                      <h5>{item.title} {item.firstname} {item.lastname} {item.suffix}</h5>
                      
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