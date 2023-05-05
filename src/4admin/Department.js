import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Outlet , useNavigate , useLocation, useOutletContext} from 'react-router-dom'
import { subjectmoduleContext, adminSampleClassContext, adminYearfilterContext, accountlistContext, adminclasslistContext, subjectlistContext, currentdeptContext , userInfoContext , departmentsContext , deptInfoContext , subjectfilterContext} from '../Globalcontext'
import {BiEdit} from 'react-icons/bi'
import {FaUpload} from 'react-icons/fa'
import ImportClass from './ImportClass'
import ImportProfessor from './ImportProfessor'
import ImportStudent from './ImportStudent'
import { ContentChild } from '@angular/core'
import BSIT from '../assets/images/BSIT1.png'
import GENED from '../assets/images/GENED.png'
import BSIE from '../assets/images/BSIE1.png'


function Department() {
    const navigate = useNavigate()
    const [subjectnav, setsubjectnav] = useState(false)
    const [classesnav, setclassesnav] = useState(false)
    const [accountsnav, setaccountsnav] = useState(false)
    const [currentpage, setcurrentpage] = useState();
    const [creatclassmodal, setcreateclassmodal] = useState(false);
    const [createstudmodal, setcreatestudmodal] = useState(false);
    const [createproffmodal, setcreateproffmodal] = useState(false);
    const location = useLocation()
    const {currentdept} = useContext(currentdeptContext);
    const [departmentinfo, setdepartmentinfo] = useState({}
    );
    const [subjectlist, setsubjectlist] = useState();
    const [subjectfilter, setsubjectfilter] = useState(4);
    const [adminclasslist, setadminclasslist] = useState();
    const [accountlist, setaccountlist] = useState();
    const [yearlistfilter, setyearlistfilter] = useState();
    const [sampleclassid, setsampleclassid] = useState();
    const [topicid, settopicsid] = useState();

    const {userinfo} = useContext(userInfoContext)




    useEffect(()=>{
     if(currentdept != undefined){
      axios.get('https://api.kyusillid.online/api/getsubjectlist/'+ currentdept.dep_id  ).then(response1 =>{
        setsubjectlist(response1.data);
    
      }).catch();

      axios.get('https://api.kyusillid.online/api/getdeptinfo/' + currentdept.dep_id ).then(response =>{  
        setdepartmentinfo(response.data)  
      }).catch(); 

  
      axios.get('https://api.kyusillid.online/api/getclasslist2/' + currentdept.dep_id ).then(
        response2=>setadminclasslist(response2.data)
      ).catch();

      axios.get('https://api.kyusillid.online/api/accountlist/' +currentdept.dep_id).then(
        response3=> setaccountlist(response3.data)
      ).catch();
      
     }
    

    } , [currentdept])

    const [upclass, setupclass] = useState(false);
    const [upstud, setupstud] = useState(false)
    const [upproff, setupproff] = useState(false)




  function isactive(e){

    return e===currentpage ? true : false;

 }


 const adminheaders = ["", BSIT, GENED, "", "" , BSIE,"" , "" ,"" ,"","","",""];



  return (

    currentdept != undefined ?
      <div>
      <div className='col-lg-12 primary borderradius-lg adminheader flex' style={{backgroundImage: `url(${adminheaders[currentdept.dep_id]})`}}>
        <div className='lighttext'>
          <h2> {currentdept!== undefined && currentdept.dep_name}</h2>
          <h4 className='margintop12'>School Year : 2022 - 2023 , 1st sem</h4>
         
        </div>
      </div>
  
  
      <div className="row">
        <div className="col-lg-3 margintop12">
            <div className="classnav tertiary borderradius-md dbpanelmargin">
              <ul>
                <li className={`classnavitem ${isactive('department') &&' classnav-active' }`} onClick={()=>{navigate('/kyusilidAdmin/department')}}>  Overview </li>
                <li><hr/></li>
                <li className="classnavitem " onClick={()=>{navigate('admin_announcements')}}>  Announcements </li>
                <li><hr/></li>
            
                <li className={`classnavitem ${isactive('subjects') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false);setclassesnav(false); setsubjectnav(!subjectnav) ;setcurrentpage('subjects')}}>  Subjects</li>
                <li><hr/></li>
                {subjectnav &&
                   <><li className="classnavsubitem" onClick={()=>{setsubjectfilter(4); navigate('subjects')}}>4th year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{setsubjectfilter(3); navigate('subjects')}}>3rd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{ setsubjectfilter(2); navigate('subjects')}}>2nd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{ setsubjectfilter(1); navigate('subjects')}}>1st year</li>
                   <li><hr/></li>
                   </>
                }
               
                <li className={`classnavitem ${isactive('sections') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false); setsubjectnav(false); setclassesnav(!classesnav) ;setcurrentpage('sections')}} >  Classes</li>
                <li><hr/></li> 
              {classesnav&&
                  <><li className="classnavsubitem" onClick={()=>{ setyearlistfilter(4); navigate('sections')}}>4th year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{setyearlistfilter(3); navigate('sections')}}>3rd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{setyearlistfilter(2); navigate('sections')}}>2nd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{setyearlistfilter(1); navigate('sections')}}>1st year</li>
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
               
            
         
              </ul>
            </div>
  {/* {userinfo.admintype === 3 &&
    
    <div className="tertiary flex  margintop12 borderradius-md padding12 adminupdatepanel">
    <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreateclassmodal(true)}}>Update Class list</button>
    <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreatestudmodal(true)}}>Update Student list</button>
    <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreateproffmodal(true)}}>Update Professor list</button>
  </div>
  
  } */}
        </div>
        <div className="col-lg-9 margintop12">
  
          <deptInfoContext.Provider value ={{departmentinfo, setdepartmentinfo}}>
          <subjectlistContext.Provider value = {{subjectlist}}>
            <subjectfilterContext.Provider value = {{subjectfilter}}>
            <adminclasslistContext.Provider value={{adminclasslist}}>
              <accountlistContext.Provider value={{accountlist , setaccountlist}}>
                <adminYearfilterContext.Provider value={{yearlistfilter}}>
                  <adminSampleClassContext.Provider value={{sampleclassid , setsampleclassid}}>
                    <subjectmoduleContext.Provider  value={{topicid, settopicsid}}>
                   
                      <Outlet />
                 
                 
                    </subjectmoduleContext.Provider>       
                  </adminSampleClassContext.Provider>
                </adminYearfilterContext.Provider>
              </accountlistContext.Provider>      
            </adminclasslistContext.Provider>  
            </subjectfilterContext.Provider>
          </subjectlistContext.Provider>      
          </deptInfoContext.Provider>
             
  
        </div>
      </div>


    


      
    


   
   


    </div>

    :
    <div>loading</div>
    
    


)

  
 
}

export default Department