import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userInfoContext , departmentsContext , currentdeptContext} from '../Globalcontext'
import Adminsidebar from './Adminsidebar'
import Profilenotif from '../1general/components/Profilenotif'
import axios from 'axios'

function AdminContainer() {
  const {userinfo} = useContext(userInfoContext)
  
  const navigate = useNavigate()


  useEffect(()=>{
    if(userinfo.usertype !=='admin'){
        navigate('/')
    }

    
  },[userinfo, navigate])


  const [departments, setdepartments] =useState([
   
  ])

  const [currentdept, setcurrentdept] = useState();


  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/getdepartment/' +userinfo.user.acc_id).then(response=>{

      setdepartments(response.data)
      setcurrentdept(response.data[0])

    
    }).catch();
  },[])


  return (

    <currentdeptContext.Provider value={{currentdept, setcurrentdept}}>
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