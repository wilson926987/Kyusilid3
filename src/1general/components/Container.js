import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate} from 'react-router-dom'
import { userInfoContext } from '../../Globalcontext'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(userinfo.usertype === 'admin'){
      navigate('/kyusilidAdmin');
    }
  })

  
  return (
   
      <div className='maincontainer'>
        <Sidebar/>
        <div className='content'>
            <Profilenotif />
            <Outlet/> 
            
   
        </div>
    
    </div>

    
  )
}

export default Container