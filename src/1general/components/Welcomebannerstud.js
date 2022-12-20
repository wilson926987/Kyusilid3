import React, { useEffect, useState } from 'react'
import BMO1 from '../../assets/images/platformChar_idle.png'
import BMO2 from '../../assets/images/platformChar_duck.png'
import BMO3 from '../../assets/images/platformChar_happy.png'
import BMO4 from '../../assets/images/platformChar_jump.png'

function Welcomebannerstud() {
  const BMOtemp = {BMO1, BMO2, BMO3, BMO4};
  const [BMO, setBMO] = useState();

  useEffect(()=>{
      setBMO(BMOtemp[Math.floor(Math.random()*BMOtemp.length)])
  },[])


  return (
    <div className='primary borderradius-lg welcomebanner dbpanelmargin'>
                            
    <h2>Welcome, ##username# </h2>
    <h5>The next class discussion will be on: #date#</h5>
    <button className='secondary'>View Schedule</button>
    <div className='welcomebannerdesign'>
     
    </div>
    
</div>
  )
}

export default Welcomebannerstud