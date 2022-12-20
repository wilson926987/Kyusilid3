import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userInfoContext } from '../Globalcontext'
import Adminsidebar from './Adminsidebar'
import Profilenotif from '../1general/components/Profilenotif'

function AdminContainer() {
  const {userinfo} = useContext(userInfoContext)
  const navigate = useNavigate()


  useEffect(()=>{
    if(userinfo.usertype !=='admin'){
        navigate('/')
    }
  },[userinfo, navigate])

  return (
    <div className='maincontainer'>
      <Adminsidebar/>
      <div className="content">
        <Profilenotif />
        <Outlet/>
      </div>

       
    </div>
  )
}

export default AdminContainer