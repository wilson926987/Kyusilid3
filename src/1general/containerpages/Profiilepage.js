import React, { useState } from 'react'
import Avater from '../../assets/images/avatar.jpg'
import {BsFillGearFill} from 'react-icons/bs'

function Profiilepage() {
  const [settings, setsettings] = useState(false);

  const togglesetting = ()=>{
    setsettings(!settings)
  }
  return (
    <div>

      <div className="col-lg-6 ">

        <div className='tertiary profilepanelmain borderradius-lg relative'>
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
        <div className='tertiary borderradius-lg currentsempanel margintop12'>
          <h3>Current Semester information</h3>
          <div className="accountinfo margintop12">
            <p>Current year : 4th year</p>
            <p>Current Sem : 2nd</p>
            <p>Section : J</p>
            <p>Units : 12</p>
          </div>

        </div>

      </div>


   


    </div>
  )
}

export default Profiilepage