import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginHistoryProf from '../1general/components/LoginHistoryProf';





function Adminlog() {

  const [accountsnav, setaccountsnav] = useState(false)

  const navigate = useNavigate()
  function isactive(e){

    return true

 }
 
 return (
<div>
  <LoginHistoryProf></LoginHistoryProf>
  </div>
 )
 

}
 
 


  


export default Adminlog