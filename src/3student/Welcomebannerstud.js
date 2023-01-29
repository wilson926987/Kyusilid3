import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext } from '../Globalcontext'


function Welcomebannerstud() {
   const { userinfo} = useContext(userInfoContext)
   const navigate = useNavigate();


  return (
    <div className='primary borderradius-lg welcomebanner dbpanelmargin'>                       
    <h2>Welcome, {userinfo.user.firstname}</h2>
    <h4>You have ## classes today</h4>
   
    <button className='secondary' onClick={()=>{navigate('/profile')}}>View Progress</button>
    <div className='welcomebannerdesign'>
     
    </div>
    
</div>
  )
}

export default Welcomebannerstud