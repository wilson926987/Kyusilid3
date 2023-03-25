import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profilenotif from './Profilenotif'

import { Outlet , useNavigate} from 'react-router-dom'
import { userInfoContext , myClasesContext  , currentclassContext , myArchivedContext} from '../../Globalcontext'
import axios from 'axios'



function Container() {

  const {userinfo} = useContext(userInfoContext);
  const [myclasses, setmyclasses] = useState();
  const [myarchive, setmyarchive] = useState();




  useEffect(() => {
    filldata(); 
  
    if(userinfo.user.first_login ===1){
    
      navigate('/Changepassword')
    }
  
    if(userinfo.usertype === 'admin'){
      navigate('/kyusilidAdmin');
    }
  
  },[userinfo]);
  

async function filldata(){
  await axios.get('https://api.kyusillid.online/api/getclasslist/' + userinfo.user.acc_id)
    .then(response => {
      setmyclasses(response.data);
      console.log(response.data);
     
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

  const [currentclass, setcurrentclass] = useState()


  const navigate = useNavigate();
  useEffect(()=>{
    if(userinfo.usertype === 'admin'){
      navigate('/kyusilidAdmin');
    }
  })


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