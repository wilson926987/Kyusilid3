import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate, useLocation } from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext , myArchivedContext, forceviewContext} from '../../Globalcontext'
import axios from 'axios'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState();
  const [myarchive, setmyarchive] = useState();
  const {forceview} = useContext(forceviewContext)

  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    filldata(); 
  
    if(userinfo.user.first_login ===1){
      localStorage.removeItem('history')
      navigate('/Changepassword')
    }

  
    if(userinfo.usertype === 'admin' && !forceview){
      console.log(forceview)
      navigate('/kyusilidAdmin');
    }
    
  },[userinfo]);




  

async function filldata(){

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
   
    <div className='maincontainer'>
        <Sidebar/>
        <div className='content'>
         
            <Profilenotif />
            <Outlet/> 
        </div> 
        </div>
    
    </myClasesContext.Provider> 
    </myArchivedContext.Provider>
  
  )
}

export default Container