import React, { useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
import AreaChart from '../1general/components/areachart'


function Departmentoverview() {
  const [subjectnav, setsubjectnav] = useState(false)
  const [classesnav, setclassesnav] = useState(false)

  return (
    <div className="row">
    <div className="col-lg-12 ">
      <div className="tertiary borderradius-md paneladd" >
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
              <li>4th year classes (section)</li>
              <li>3rd year </li>
              <li> 2nd</li>
              <li> 1st</li>
            </ul>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Accounts</h4>
          <p>
            <ul>
              <li>Prof</li>
              <li>Students</li>           
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
         <div className='flex'> <h4>Department Admin</h4>  <input type="text" className='marginleftauto'/></div>

          <ul className='margintop12'>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
            <li>
              <div class="personpanel">
                <div>
                  <img src={avatar} alt="" /></div>
                <div class="personpanelcontent">
                  <p>Person name</p>
                  <p>Person info</p>
                </div>
              </div>
            </li>
          </ul>  
                       
        </div> 
  </div>

  
    </div>
       
  </div>




    </div>
   
   
    
  )
}

export default Departmentoverview