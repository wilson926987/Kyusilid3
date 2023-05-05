import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext , myClasesContext } from '../Globalcontext'


function Welcomebannerstud() {
   const { userinfo} = useContext(userInfoContext)
  const {myclasses} = useContext(myClasesContext);
 
const currday = new Date().getDay();


  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 

  const [upcomingclass, setupcomingclass] = useState();
 
  useEffect(()=>{
   
      if(myclasses !== undefined ){
        
      setupcomingclass(myclasses.filter(item => item.day_label === days[currday]).length)
      }
  },[myclasses])

  
  const navigate = useNavigate();


  return (
    <div className='primary borderradius-lg welcomebanner dbpanelmargin'>                       
    <h2>Welcome, {userinfo.user.firstname}</h2>
    <h3>{upcomingclass > 1 ?
     'you have ' + upcomingclass + ' Classes Today' :
     upcomingclass === 1?
     'you have a class today' : 'You Have No Classes Today'
  }</h3>
   
    
 
   
    {userinfo.user.usertype ==='stud' && 
    
    <button className='secondary' onClick={()=>{navigate('/profile')}}>View Progress</button>
    }
    <div className='welcomebannerdesign'>
     
    </div>
    
</div>
  )
}

export default Welcomebannerstud