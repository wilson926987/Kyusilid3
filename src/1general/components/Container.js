import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate} from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext} from '../../Globalcontext'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState([

    {
      'classId' : 1,
      'classname' : 'PRC101',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Monday'
    },
    {
      'classId' : 2,
      'classname' : 'Capstone',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Monday'
    },
    {
      'classId' : 3,
      'classname' : 'Automata',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Monday'
    }

  ]);

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