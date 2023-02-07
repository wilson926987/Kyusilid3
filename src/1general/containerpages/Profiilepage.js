import React, { useState } from 'react'
import Avater from '../../assets/images/avatar.jpg'
import {BsFillGearFill} from 'react-icons/bs'
import DonutChart from '../components/DonutChart'
import BarChart from '../components/BarChart'
import StudProfile from '../components/statprofstud'

function Profiilepage() {

  const [settings, setsettings] = useState(false);
  const togglesetting = ()=>{
    setsettings(!settings)
    
  
  }
  return (
    <div>
    <div className='col-lg-12'>
      <div className='row'>
    <div className="col-lg-6 ">
      <div className='tertiary profilepanelmain  borderradius-lg '>
          <div className='flex'>
            <img src={Avater} alt="" />
            <div>
            <h3>Juan Dela Cruz</h3>
            <p>19-0852</p>
            </div>
          </div>
          <div className='accountinfo'>
            <h4>Account info</h4>
            <p>email: Account@gmail.com</p>
            <p>username : username</p>
          </div>
          <div className='profilesettings' onClick={togglesetting}>
          <BsFillGearFill />
          </div>
         {settings &&  
         <div className='profilesettingsdropdown borderradius-md'>
            <p className='profiledropdownitem'>change profile picture</p>
            <p className='profiledropdownitem'>change password</p>
          </div>
        }
      </div>

    </div>
    <div className='col-lg-6'>
<div className='tertiary currentsempanel borderradius-lg'>

  <h2 className="center1">Student Profile Performance</h2>
  <div className=' currentsempanel borderradius-lg margintop11 height1 marginleft1'>
  <div className='LineChart'><StudProfile></StudProfile></div>
    


</div>
  </div>
  </div>
</div>


    </div>




    <div className='col-lg-6'>
      <div className='tertiary borderradius-lg currentsempanel margintop14'>
        <h3>Current Semester information</h3>
        <div className="accountinfo margintop12">
          <p>Current year : 4th year</p>
          <p>Current Sem : 2nd</p>
          <p>Section : J</p>
          <p>Units : 12</p>
        </div>


</div>
    </div>
    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin margintop12">
            <h2 className="text-left">Attendance Status</h2>

<div className='DonutChart'><DonutChart></DonutChart></div>

            </div>
        </div>

        <div className='col-md-8'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin margintop12">
            <h2 className="text-left">Activity Status</h2>
            <div className='BarChart'> <BarChart></BarChart></div>
            </div>
        </div>

        

    </div>
</div>


 


  </div>
  )
}

export default Profiilepage