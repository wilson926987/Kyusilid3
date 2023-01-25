import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate} from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext} from '../../Globalcontext'
import axios from 'axios'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState([

    {
      'classId' : 1,
      'classname' : 'Practicum',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Monday',
      'classbanner' : 1,
      'subjectcode' : 'Prc101',
      'profname' : 'Juan delacruz'   
    },
    {
      'classId' : 2,
      'classname' : 'Capstone',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Monday',
      'classbanner' : 1,
      'subjectcode' : 'Capstone111',
      'profname' : 'Juan delacruz'
    },
    {
      'classId' : 3,
      'classname' : 'Automata',
      'classSched_from' : '6:00',
      'classSched_to' : '8:00',
      'classDay' : 'Wednesday',
      'classbanner' : 1,
      'subjectcode' : 'Auto1111',
      'profname' : 'Juan delacruz'
    }

  ]);



useEffect(() => {
  axios.get('http://localhost:8000/api/getclasslist/3')
    .then(response => {
      setmyclasses(response.data);
      console.log(response.data)
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