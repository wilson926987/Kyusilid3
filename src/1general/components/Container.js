import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate} from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext} from '../../Globalcontext'
import axios from 'axios'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState();



useEffect(() => {
  axios.get('http://localhost:8000/api/getclasslist/3')
    .then(response => {
      setmyclasses(response.data);
     
    })
    .catch(error => {
      console.log(error);
    });
}, []);


  const [currentclass, setcurrentclass] = useState()


  const navigate = useNavigate();
  useEffect(()=>{
    if(userinfo.usertype === 'admin'){
      navigate('/kyusilidAdmin');
    }
  })

  
  return (

   
     <myClasesContext.Provider value={{myclasses, setmyclasses}}>
    <currentclassContext.Provider value={{currentclass, setcurrentclass}}>
    <div className='maincontainer'>
        
        <Sidebar/>
        <div className='content'>
            <Profilenotif />
            <Outlet/> 
        </div> 
        </div>
    </currentclassContext.Provider>     
    </myClasesContext.Provider>

    
  )
}

export default Container