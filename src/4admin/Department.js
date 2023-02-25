import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Outlet , useNavigate , useLocation, useOutletContext} from 'react-router-dom'
import { currentdeptContext , userInfoContext , departmentsContext , deptInfoContext} from '../Globalcontext'
import {BiEdit} from 'react-icons/bi'
import {FaUpload} from 'react-icons/fa'
import {GoTriangleDown ,GoTriangleUp} from 'react-icons/go'


function Department() {
    const navigate = useNavigate()
    const [subjectnav, setsubjectnav] = useState(false)
    const [classesnav, setclassesnav] = useState(false)
    const [accountsnav, setaccountsnav] = useState(false)
    const [currentpage, setcurrentpage] = useState();
    const [creatclassmodal, setcreateclassmodal] = useState(false);
    const location = useLocation()
    const {currentdept} = useContext(currentdeptContext);
    const [departmentinfo, setdepartmentinfo] = useState({}
    );
    const [schoolyear, setschoolyear] = useState( '2022 - 2023 , 1st sem')


    useEffect(()=>{
     if(currentdept != undefined){
      axios.get('https://api.kyusillid.online/api/getdeptinfo/' + currentdept.dep_id ).then(response =>{  
        setdepartmentinfo(response.data)
      
      }).catch(

      );   
     }

    } , [currentdept])
   




    

  


  function isactive(e){
    console.log(currentpage)

    return e===currentpage ? true : false;

 }

 const [schoolyearoption, setschoolyearoption] = useState(false);
const[schoolyearlist, setschoolyearlist] = useState([
  '2022 - 2023 , 2nd sem', '2022 - 2023 , 1st sem' , '2021 - 2022 , 2nd sem', '2021 - 2022 , 1st sem' ,'2020 - 2021 , 2nd sem'

])



  return (

    currentdept != undefined ?
      <div>
      <div className='col-lg-12 primary borderradius-lg adminheader flex'>
        <div className='lighttext'>
          <h2> {currentdept!== undefined && currentdept.dep_name}</h2>
    <div className="relative">
    <h4 className='margintop12' onClick={()=>{setschoolyearoption(!schoolyearoption)}}>School year :  {schoolyear} {schoolyearoption ? <GoTriangleUp className='schoolyearbutton'/> : <GoTriangleDown className='schoolyearbutton'/> }</h4>
        {schoolyearoption && 
          <div className='schoolyearoption primary borderradius-md'> 
            <ul>
              {schoolyearlist.map((item , key)=>(
                <li className='padding12' onClick={()=>{setschoolyear(item) ; setschoolyearoption(false)}}> <h4>{item}</h4></li>
              ))}
              
            </ul>
          </div>
        }

    </div>
        </div>
      </div>
  
  
      <div className="row">
        <div className="col-lg-3 margintop12">
            <div className="classnav tertiary borderradius-md dbpanelmargin">
              <ul>
                <li className={`classnavitem ${isactive('department') &&' classnav-active' }`} onClick={()=>{navigate('/kyusilidAdmin/department') ;setcurrentpage('department')}}>  Overview </li>
                <li><hr/></li>
                <li className={`classnavitem ${isactive('admin_announcements') &&' classnav-active' }`} onClick={()=>{navigate('admin_announcements') ;setcurrentpage('admin_announcements')}}>  Announcements </li>
                <li><hr/></li>
                <li className={`classnavitem ${isactive('subjects') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false);setclassesnav(false); setsubjectnav(!subjectnav) ;setcurrentpage('subjects')}}>  Subjects</li>
                <li><hr/></li>
                {subjectnav &&
                   <><li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>4th year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>3rd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>2nd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>1st year</li>
                   <li><hr/></li>
                   </>
                }
               
                <li className={`classnavitem ${isactive('sections') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false); setsubjectnav(false); setclassesnav(!classesnav) ;setcurrentpage('sections')}} >  Classes</li>
                <li><hr/></li> 
              {classesnav&&
                  <><li className="classnavsubitem" onClick={()=>{navigate('sections')}}>4th year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>3rd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>2nd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>1st year</li>
                  <li><hr/></li>
                  </>
              }
                <li className={`classnavitem ${isactive('accounts') &&' classnav-active' }`} onClick={()=>{setsubjectnav(false);setclassesnav(false); setaccountsnav(!accountsnav); setcurrentpage('accounts')}}>  Accounts </li>
                <li><hr/></li>
                {accountsnav &&
                 <><li className="classnavsubitem" onClick={()=>{navigate('accounts_prof')}}>Professors</li>
                 <li><hr/></li>
                 <li className="classnavsubitem" onClick={()=>{navigate('accounts_stud')}}>Students</li>
                 <li><hr/></li>                
                  </>
                }
               
                <li className="classnavitem " onClick={()=>{navigate('eventcalendar')}}>  Event calendar </li>
              
         
              </ul>
            </div>
  
            <div className="tertiary flex  margintop12 borderradius-md padding12 adminupdatepanel">
              <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreateclassmodal(true)}}>Update Class list</button>
              <button className='commonbutton secondary lighttext width100'>Update Student list</button>
              <button className='commonbutton secondary lighttext width100'>Update Professor list</button>
            </div>
        </div>
        <div className="col-lg-9 margintop12">
  
          <deptInfoContext.Provider value ={{departmentinfo, setdepartmentinfo}}>
          <Outlet />
          </deptInfoContext.Provider>
             
  
        </div>
      </div>


     {creatclassmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreateclassmodal(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
          <div className='sideoption borderradius-md'onClick={()=>{navigate('createclass') ; setcreateclassmodal(false)}} > <BiEdit/><h2>Manual Adding</h2></div>
          <div className='sideoption borderradius-md'> <FaUpload/><h2>Upload file</h2></div>
      </div>
          
</div>
     }
   
  
  
  
  
  
  
    </div>

    :
    <div>loading</div>
    
    


)

  
 
}

export default Department