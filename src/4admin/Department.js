import React, { useState, useEffect } from 'react'
import { Outlet , useNavigate , useLocation} from 'react-router-dom'



function Department() {
    const navigate = useNavigate()
    const [subjectnav, setsubjectnav] = useState(false)
    const [classesnav, setclassesnav] = useState(false)
    const [accountsnav, setaccountsnav] = useState(false)
    const [currentpage, setcurrentpage] = useState();
    const location = useLocation()

    useEffect(()=>{   
      let temp = location.pathname.split('/')
      if(temp.includes('subjects')){
        setcurrentpage('subjects');
      }else if(temp.includes('sections')){
        setcurrentpage('sections')
      }else if(temp.includes('accounts_stud') || temp.includes('accounts_prof')){
        setcurrentpage('accounts')
      }else{
        setcurrentpage('department')
      }
      
  },[location])


  function isactive(e){

    return e===currentpage ? true : false;

 }


  
    return (
      <div>
      <div className='col-lg-12 primary borderradius-lg adminheader flex'>
        <div className='lighttext'><h2>Bachelor of Science in Information Technology</h2>
          <h4 className='margintop12'>School year : 2022 - 2023 , 1st sem</h4>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-3 margintop12">
            <div class="classnav tertiary borderradius-md dbpanelmargin">
              <ul>
                <li class={`classnavitem ${isactive('department') &&' classnav-active' }`} onClick={()=>{navigate('/kyusilidAdmin/department')}}>  Overview </li>
                <li><hr/></li>
                <li class={`classnavitem ${isactive('subjects') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false);setclassesnav(false); setsubjectnav(!subjectnav) ;setcurrentpage('subjects')}}>  Subjects</li>
                <li><hr/></li>
                {subjectnav &&
                   <><li class="classnavsubitem" onClick={()=>{navigate('subjects')}}>4th year</li>
                   <li><hr/></li>
                   <li class="classnavsubitem" onClick={()=>{navigate('subjects')}}>3rd year</li>
                   <li><hr/></li>
                   <li class="classnavsubitem" onClick={()=>{navigate('subjects')}}>2nd year</li>
                   <li><hr/></li>
                   <li class="classnavsubitem" onClick={()=>{navigate('subjects')}}>1st year</li>
                   <li><hr/></li>
                   </>
                }
               
                <li class={`classnavitem ${isactive('sections') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false); setsubjectnav(false); setclassesnav(!classesnav) ;setcurrentpage('sections')}} >  Classes</li>
                <li><hr/></li>
              {classesnav&&
                  <><li class="classnavsubitem" onClick={()=>{navigate('sections')}}>4th year</li>
                  <li><hr/></li>
                  <li class="classnavsubitem" onClick={()=>{navigate('sections')}}>3rd year</li>
                  <li><hr/></li>
                  <li class="classnavsubitem" onClick={()=>{navigate('sections')}}>2nd year</li>
                  <li><hr/></li>
                  <li class="classnavsubitem" onClick={()=>{navigate('sections')}}>1st year</li>
                  <li><hr/></li>
                  </>
              }
                <li class={`classnavitem ${isactive('accounts') &&' classnav-active' }`} onClick={()=>{setsubjectnav(false);setclassesnav(false); setaccountsnav(!accountsnav); setcurrentpage('accounts')}}>  Accounts </li>
                <li><hr/></li>
                {accountsnav &&
                 <><li class="classnavsubitem" onClick={()=>{navigate('accounts_prof')}}>Professors</li>
                 <li><hr/></li>
                 <li class="classnavsubitem" onClick={()=>{navigate('accounts_stud')}}>Students</li>
                 <li><hr/></li>                
                  </>
                }
               
                <li class="classnavitem " onClick={()=>{navigate('eventcalendar')}}>  Event calendar </li>
          
         
              </ul>
            </div>

            <div className="tertiary flex  margintop12 borderradius-md padding12 adminupdatepanel">
              <button className='commonbutton secondary lighttext width100'>Update Class list</button>
              <button className='commonbutton secondary lighttext width100'>Update Student list</button>
              <button className='commonbutton secondary lighttext width100'>Update Professor list</button>
  
     
            </div>
        </div>
        <div className="col-lg-9 margintop12">
         <Outlet/>  

        </div>
      </div>
   






</div>

  )
}

export default Department