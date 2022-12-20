import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet } from 'react-router-dom'


function Container() {

  
  return (
    <div>
      <div className='maincontainer'>
        <Sidebar/>
        <div className='content'>
            <Profilenotif  ></Profilenotif>
          <Outlet/> 
            

            
        </div>
    </div>
    </div>

    
  )
}

export default Container