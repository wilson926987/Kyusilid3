import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginHistoryProf from '../1general/components/LoginHistoryProf';





function AdminAddClass() {

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
                <li class={`classnavitem ${isactive('subjects') &&' classnav-active' }`} > Add Classes</li>
                <li><hr/></li>
               
                   <><li class="classnavsubitem" >1st Year</li>
                   <li>
                    <hr/></li>
                   <li class="classnavsubitem" >2nd Year</li>
                   <li><hr/></li>
                   <li class="classnavsubitem" >3rd Year</li>
                   <li><hr/></li>
                   <li class="classnavsubitem" >4th Year</li>
                   <li><hr/></li>
                
                   </>
              
              </ul>
            </div>

        </div>

  <LoginHistoryProf></LoginHistoryProf>
  </div>
 )
 

}
 
 


  


export default AdminAddClass