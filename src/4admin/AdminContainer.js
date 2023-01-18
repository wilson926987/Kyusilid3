import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userInfoContext , departmentsContext , currentdeptContext} from '../Globalcontext'
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


  const [departments, setdepartments] =useState([
    {
        'departmentId' : 1,
        'departmentname' : "Information Technology"
    },
    {
      'departmentId' : 2,
      'departmentname' : "Industrial Engineering"
    },
    {
      'departmentId' : 3,
      'departmentname' : "Entrepreneurship"
    },
    {
      'departmentId' : 4,
      'departmentname' : "Business Administration"
    }
  ])

  const [currentdept, setcurrentdept] = useState();


  return (

    <currentdeptContext.Provider>
      <departmentsContext.Provider value={{departments, setdepartments}}>
        <div className='maincontainer'>
        <Adminsidebar/>
          <div className="content">
            <Profilenotif />
            <Outlet/>
          </div>   
        </div>
    </departmentsContext.Provider>
    </currentdeptContext.Provider>
    
  )
}

export default AdminContainer