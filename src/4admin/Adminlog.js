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
         <div className="col-lg-3 margintop12">
            <div class="classnav tertiary borderradius-md dbpanelmargin">
              <ul>
                <li class={`classnavitem ${isactive('subjects') &&' classnav-active' }`} > Log in History</li>
                <li><hr/></li>
               
                   <><li class="classnavsubitem" >Professors</li>
                   <li>
                    <hr/></li>
                   <li class="classnavsubitem" >Student</li>
                   <li><hr/></li>
                   </>
              
              </ul>
            </div>

        </div>

  <LoginHistoryProf></LoginHistoryProf>
  </div>
 )
 

}
 
 


  


export default Adminlog