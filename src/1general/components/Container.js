import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate, useLocation } from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext , myArchivedContext} from '../../Globalcontext'
import axios from 'axios'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState();
  const [myarchive, setmyarchive] = useState();
  const [currentclass, setcurrentclass] = useState()


  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    filldata(); 
    console.log(userinfo.user.first_login)
  
    if(userinfo.user.first_login ===1){
      localStorage.removeItem('history')
      navigate('/Changepassword')
    }
  
    if(userinfo.usertype === 'admin'){
      navigate('/kyusilidAdmin');
    }
    
  },[userinfo]);

  /*useEffect(() => {
    if (location.pathname === '/classes/sampleclass' || location.pathname === '/classes/sampleclass/settings' || location.pathname === '/classes/sampleclass/messages' || 
    location.pathname === '/classes/sampleclass/marks' || location.pathname === '/classes/sampleclass/info' || location.pathname === '/classes/sampleclass/attendance' || 
    location.pathname === '/classes/sampleclass/sourcematerials' || location.pathname === '/classes/sampleclass/modules' ) {
      localStorage.setItem('history', '/home');
    } 
    if (location.pathname === '/' && localStorage.getItem('user')) {
      localStorage.setItem('history', '/home');
    }
    else if(location.pathname === '/Changepassword'){
      localStorage.setItem('history', '/');
    }
    else {
      localStorage.setItem('history', location.pathname);
    }
  }, [location]);*/

  useEffect(() => {
    console.log(myclasses)
  }, [myclasses]);
  

async function filldata(){
  console.log(userinfo.user.acc_id)
  await axios.get('https://api.kyusillid.online/api/getclasslist/' + userinfo.user.acc_id)
    .then(response => {
      setmyclasses(response.data);

    })
    .catch(error => {
      console.log(error);
    });

    await axios.get('https://api.kyusillid.online/api/getclasslist_archived/' + userinfo.user.acc_id)
    .then(response => {
      setmyarchive(response.data);
     
    })
    .catch(error => {
      console.log(error);
    });

}

 


  return (
 
    <myArchivedContext.Provider value={{myarchive, setmyarchive}}>
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
    </myArchivedContext.Provider>
  
  )
}

export default Container