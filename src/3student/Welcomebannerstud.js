import React, { useContext, useEffect, useState } from 'react'
import { userInfoContext } from '../Globalcontext'


function Welcomebannerstud() {
   const { userinfo} = useContext(userInfoContext)


  return (
    <div className='primary borderradius-lg welcomebanner dbpanelmargin'>
                            
    <h2>Welcome, {userinfo.user.acc_username}</h2>
    <h5>The next class discussion will be on: #date#</h5>
    <button className='secondary'>View Schedule</button>
    <div className='welcomebannerdesign'>
     
    </div>
    
</div>
  )
}

export default Welcomebannerstud