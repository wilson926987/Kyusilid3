import React, { useContext, useEffect, useState } from 'react'
import { Outlet , useNavigate, useLocation} from 'react-router-dom'
import Activitylogpanel from '../components/Activitylogpanel';
import { userInfoContext } from '../../Globalcontext';
import {FaPlusCircle} from  'react-icons/fa'
import {RiArrowLeftCircleFill} from 'react-icons/ri'
import ClassSelectionitem from '../components/ClassSelectionitem';


function ClassContainer() {


  const navigate = useNavigate();
  const {userinfo} = useContext(userInfoContext);
  const [navcreate, setnavcreate] = useState(false);


  const [currentpage, setcurrentpage] = useState();
  const location = useLocation()

  useEffect(()=>{   
      setcurrentpage(location.pathname);
      
  },[location])

  function isactive(e){
    return e===currentpage ? true : false;

 }

 const togglenavcreate = ()=>{
    setnavcreate(!navcreate)
    console.log(navcreate)
 }

 const [classSelection , setClassSelection] = useState(
  [
    {
      'subjectname' : 'Class 1',
      'classschedule' : 'class schedule',
      'checked' : false
    },
    {
      'subjectname' : 'Class 1',
      'classschedule' : 'class schedule',
      'checked' : false
    },
    {
      'subjectname' : 'Class 1',
      'classschedule' : 'class schedule',
      'checked' : false
    },
    {
      'subjectname' : 'Class 1',
      'classschedule' : 'class schedule',
      'checked' : false
    }

 ])



  return (
    <div className='classcontent'>
     

      <div className='classcontentmain'>
        <div className='row'> 
            <div className="col-md-12 " >
              <div className={`primary classheader borderradius-lg dbpanelmargin ${(isactive('/classes/sampleclass/createnew') ? ' classheader-md' : ' classheader-lg')}`}>
                <div><h3 id='top'>Class name</h3>
                  {!isactive('/classes/sampleclass/createnew') ?
                     <div>
                     <h4>Subject code</h4>
                    <h4>Saturdays 5am- 12pm</h4>
                    <h4>Prof name</h4>
                   </div> :
                   <h5>Saturdays 5am - 12pm</h5>
                  }
                </div>
              </div>

            <div className="classcontentsub">
              <div className="row">
                  <div className="col-lg-3 classnav-min">

                  {userinfo.usertype==='prof' &&
                      !isactive('/classes/sampleclass/createnew') ?
                      <div className="primary navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{navigate('createnew')}}>
                      <FaPlusCircle /><h4>Create New</h4>
                     </div>
                     :
                     <div className="primary navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{navigate('/classes/sampleclass')}}>
                     <RiArrowLeftCircleFill /><h4 >Cancel</h4>
                    </div>
                  
                  }

                  {!isactive('/classes/sampleclass/createnew') ?
                   <div className="classnav tertiary borderradius-md dbpanelmargin">
                    
                   <ul>                  
                     
                     <li className={`classnavitem ${isactive('/classes/sampleclass') && 'classnav-active'}`} onClick={()=>{navigate('/classes/sampleclass')}}>  Announcements </li>
                     <li><hr /></li>
                     <li className={`classnavitem ${isactive('/classes/sampleclass/modules') && 'classnav-active'}`} onClick={()=>{navigate('modules')}}>  Class Modules</li>
                     <li><hr /></li>
                  
                     {isactive('/classes/sampleclass/modules') &&  
                       <div>
                         <li className='classnavsubitem'>All topics</li>
                         <li><hr /></li>
                         <li className='classnavsubitem'>topic 1</li>
                         <li><hr /></li>
                         <li className='classnavsubitem'>topic 2</li>
                         <li><hr /></li>
                    
                       </div>
                     }

                     <li className={`classnavitem ${isactive('/classes/sampleclass/info') && 'classnav-active'}`} onClick={()=>{navigate('info')}}>  Class info </li>
                     <li><hr /></li>
                     {userinfo.usertype=== 'prof' &&
                          <li className={`classnavitem ${isactive('/classes/sampleclass/marks') && 'classnav-active'}`} onClick={()=>{navigate('marks')}}> Marks </li>
                     
                     }
                     
                  
                   </ul>
                  
                   
                 </div>

:

<div className='classnav tertiary borderradius-md dbpanelmargin '>

<ul className='notransition'>

  {classSelection.map((item, key)=>(
      <ClassSelectionitem key={key} classname1={item.subjectname} classsched1={item.classschedule} ifchecked1 = {item.checked}/>
  ))}
  
                     
                


</ul>

</div>
                
                }
                  </div>


                  <div className="col-lg-9 outletcontainer-min">
                    <div className="tertiary borderradius-md outletcontainer">
                          <Outlet /> 
                          <div>
                          <a href="#top">Back to top</a>
                          </div>

                    </div>
                
                  </div>

                </div>
            </div>


            </div>



        </div>

      </div>

     {!isactive('/classes/sampleclass/createnew')  ?
         <div className='activitylog borderradius-md tertiary'>
         <h4>Class Activity log</h4>
         <Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel />

        </div>
      :
        <div>
        </div>
        
    
    
    }


      
    




   

    </div>

  )
}

export default ClassContainer