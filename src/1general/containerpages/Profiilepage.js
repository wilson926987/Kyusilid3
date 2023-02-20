import React, { useContext, useEffect, useState } from 'react'
import Avater from '../../assets/images/avatar.jpg'
import {BsFillGearFill} from 'react-icons/bs'
import DonutChart from '../components/DonutChart'
import BarChart from '../components/BarChart'
import StudProfile from '../components/statprofstud'
import { userInfoContext } from '../../Globalcontext'

function Profiilepage() {

  const {userinfo} = useContext(userInfoContext);

  useEffect(()=>{
    console.log(userinfo);
  })

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
            <h3>{userinfo.user.firstname} {userinfo.user.middle} {userinfo.user.lastname}</h3>
            <p>Information Technology</p>
            </div>
          </div>
          <div className='accountinfo'>
            {/* <h4>Account info</h4>
            <p>email: {userinfo.user.email}</p>
            <p>username : username</p> */}
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