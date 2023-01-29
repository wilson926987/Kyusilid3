import React, { useContext, useEffect, useState } from 'react'
import { Outlet , useNavigate, useLocation} from 'react-router-dom'
import Activitylogpanel from '../components/Activitylogpanel';
import { announcementlistContext, userInfoContext, topicfilterContext, activitytypefilterContext , topiclistContext , currentActivityContext , sourceMaterialContext , currentclassContext, myClasesContext , personlistContext } from '../../Globalcontext';
import {FaPlusCircle ,FaArrowCircleLeft} from  'react-icons/fa'
import ClassSelectionitem from '../components/ClassSelectionitem';
import axios from 'axios';

function ClassContainer() {

  

  const navigate = useNavigate();
  const {userinfo} = useContext(userInfoContext);
  const {currentclass} = useContext(currentclassContext);
  const {myclasses} = useContext(myClasesContext);
  const [navcreate, setnavcreate] = useState(false);
  const [currentactivity, setcurrentactivity] = useState();
  const [sourcematerial,setsourcematerial] = useState();
  const [currentpage, setcurrentpage] = useState();
  const [personlist, setpersonlist] = useState();
  const location = useLocation()


  const [announcementlist, setannouncementlist] = useState([
  ]
  );

 

  


  useEffect(()=>{   
      setcurrentpage(location.pathname);
      if(currentclass !== undefined){
        axios.get('http://localhost:8000/api/get-announcement/' + currentclass.classes_id)
        .then(response => {
          setannouncementlist(response.data)
         
        })
        .catch(error => {
          console.log(error);
        });

        axios.get('http://localhost:8000/api/getpersonlist/' + currentclass.classes_id)
        .then(response => {
          setpersonlist(response.data)
        
        })
        .catch(error => {
          console.log(error);
        });

      }
  },[location])

  function isactive(e){
    return e===currentpage ? true : false;

 }

 const togglenavcreate = ()=>{
    setnavcreate(!navcreate)
    console.log(navcreate)
 }

 const [classSelection , setClassSelection] = useState( (myclasses!== undefined && currentclass!== undefined) && makeSelection() )


 function makeSelection(){
  let currenttemp = myclasses.map(item=>{
    if(item.classId ===currentclass.classId){
      return { 'subjectname' : item.classname , 'classschedule' : item.classDay + ' ' + item.classSched_to + ' - ' + item.classSched_to}
    }
  })

  let temp = myclasses.map(item =>{
    if(item.classId !== currentclass.classId){
      return { 'subjectname' : item.classname , 'classschedule' : item.classDay + ' ' + item.classSched_to + ' - ' + item.classSched_to}
    }
  }) 
  currenttemp = currenttemp.filter( x => x!== undefined);
  temp = temp.filter( x => x!== undefined);
  var fin = currenttemp.concat(temp)
  return fin;
 }


 useEffect(()=>{
  setClassSelection((myclasses!== undefined && currentclass!== undefined) && makeSelection())
 },[currentclass])


 const [topiclist, settopiclist] = useState([
  {
    'topicId' : 1,
    'topicname' : 'Topic 1'
  },
  {
    'topicId' : 2,
    'topicname' : 'Topic 2'
  },
  {
    'topicId' : 3,
    'topicname' : 'Topic 3'
  }
 
 ])


 const [activitytypefilter, setactivitytypefilter] = useState('none')
 const [topicfilter, settopicfilter] = useState('none')

 useEffect(()=>{
  if(currentclass===undefined){
    navigate('/')
  }
 })
 
 
 if(currentclass===undefined){
  return <div></div>
 }
  return (
    <div className='classcontent'>
      <div className='classcontentmain'>
        <div className='row'> 
            <div className="col-md-12 " >
              <div id='top' className={`primary classheader borderradius-lg dbpanelmargin ${((isactive('/classes/sampleclass/createnew') || isactive('/classes/sampleclass/activity/activityId')) ? ' classheader-md' : ' classheader-lg')}`}>
                <div>
                  {!(isactive('/classes/sampleclass/createnew')|| isactive('/classes/sampleclass/activity/activityId') ) ?
                     <div>
                      <h3 >{currentclass.sub_name}</h3>
                     <h4 className='margintop12'>{currentclass.sub_code}</h4>
                    <h4>{currentclass.day_label} {currentclass.sched_from} - {currentclass.sched_to}</h4>
                    <h4>{currentclass.title + ' '+ currentclass.firstname +' ' +  currentclass.lastname + ' ' + currentclass.suffix}</h4>
                   </div> :
           

                    <div>
                       <h3 > {currentclass.sub_code + '- '+ currentclass.sub_name}</h3>
                       <h5>{currentclass.day_label} {currentclass.sched_from} - {currentclass.sched_to}</h5>
                    </div>
                  }
                </div>
              </div>

            <div className="classcontentsub">
              <div className="row">
                  <div className="col-lg-3 classnav-min">

                  {userinfo.usertype==='prof' &&
                      !isactive('/classes/sampleclass/createnew') ?
                      <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{setsourcematerial(); navigate('createnew')}}>
                      <FaPlusCircle /><h4>Create New</h4>
                     </div>
                     :
                    userinfo.usertype==='prof' &&
                    <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{navigate('/classes/sampleclass')}}>
                    <FaArrowCircleLeft /><h4>Cancel</h4>
                   </div>
                  
                  }

                  {!isactive('/classes/sampleclass/createnew') ?
                   <div className="classnav tertiary borderradius-md dbpanelmargin">
                    
                   <ul>                  
                     
                     <li className={`classnavitem ${isactive('/classes/sampleclass') && 'classnav-active'}`} onClick={()=>{navigate('/classes/sampleclass')}}>  Announcements </li>
                     <li><hr /></li>
                     <li className={`classnavitem ${isactive('/classes/sampleclass/modules') && 'classnav-active'}`} onClick={()=>{navigate('modules')}}>  Class Work</li>
                     <li><hr /></li>

                 
                  
                     {(isactive('/classes/sampleclass/modules') || isactive('/classes/sampleclass/activity/activityId')) &&  
                       <div>
                         <li className='classnavsubitem' onClick={()=>{settopicfilter('none') ; navigate('modules')}}>All topics</li>
                         <li><hr /></li>

                         {topiclist.map((topicitem, key)=>(
                          <React.Fragment key={key}> 
                              <li key={key} className='classnavsubitem' onClick={()=>{settopicfilter(topicitem.topicId) ; navigate('modules')}}>{topicitem.topicname}</li>
                              <li><hr /></li>
                          </React.Fragment>
  
                         ))}
                                
                       </div>
                     }

                      {userinfo.usertype==='prof' &&
                        <>
                        <li className={`classnavitem ${isactive('/classes/sampleclass/sourcematerials') && 'classnav-active'}`} onClick={()=>{navigate('sourcematerials')}}>  Source Materials</li>
                     <li><hr /></li>
                        </>
                     }
                      <li className={`classnavitem ${isactive('/classes/sampleclass/attendance') && 'classnav-active'}`} onClick={()=>{navigate('attendance')}}>  Attendance </li>
                     <li><hr /></li>

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


                               <personlistContext.Provider value={{personlist}}>
                               <announcementlistContext.Provider value={{announcementlist, setannouncementlist}}> 
                                  <sourceMaterialContext.Provider value={{sourcematerial, setsourcematerial}}>
                                <currentActivityContext.Provider value={{currentactivity, setcurrentactivity}}>
                                <topiclistContext.Provider value={{topiclist, settopiclist}}>
                                  <activitytypefilterContext.Provider value={{activitytypefilter, setactivitytypefilter}}>
                                 <topicfilterContext.Provider value={{topicfilter, settopicfilter}}>
                                    <Outlet /> 
                                 </topicfilterContext.Provider>
                                  </activitytypefilterContext.Provider>
                                  </topiclistContext.Provider>
                                </currentActivityContext.Provider>
                                </sourceMaterialContext.Provider>
                                </announcementlistContext.Provider>
                               </personlistContext.Provider>
                                
                                                
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

     {!(isactive('/classes/sampleclass/createnew') || isactive('/classes/sampleclass/activity/activityId') )  ?
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