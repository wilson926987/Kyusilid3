import React, { useContext, useEffect, useState } from 'react'
import { Outlet , useNavigate, useLocation} from 'react-router-dom'
import Activitylogpanel from '../components/Activitylogpanel';
import {setactivityContext, responseContext, classbannerContext , settingsContext, modulelistContext, forcerefreshContext, classAndstudentselectionContext, announcementlistContext, userInfoContext, topicfilterContext, activitytypefilterContext , topiclistContext , currentActivityContext , sourceMaterialContext , currentclassContext, myClasesContext , personlistContext } from '../../Globalcontext';
import {FaPlusCircle ,FaArrowCircleLeft} from  'react-icons/fa'
import {BiChevronsLeft} from 'react-icons/bi'
import ClassSelectionitem from '../components/ClassSelectionitem';
import axios from 'axios';
import classbanner1 from '../../assets/images/classbanner1.png'
import classbanner2 from '../../assets/images/classbanner2.png'
import classbanner3 from '../../assets/images/classbanner3.png'
import classbanner4 from '../../assets/images/classbanner4.png'
import classbanner5 from '../../assets/images/classbanner5.png'
import classbanner6 from '../../assets/images/classbanner6.png'
import classbanner7 from '../../assets/images/classbanner7.png'
import classbanner8 from '../../assets/images/classbanner8.png'



function ClassContainer() {
 const [Activitytype, setActivitytype] = useState();

  const classbannerlist = [classbanner1, classbanner1, classbanner2 , classbanner3, classbanner4, classbanner5, classbanner6, classbanner7, classbanner8]

  const navigate = useNavigate();
  const {userinfo} = useContext(userInfoContext);
  const {currentclass} = useContext(currentclassContext);
  const [classbanner, setclassbanner] = useState();
  const [navcreate, setnavcreate] = useState(false);
  const [currentactivity, setcurrentactivity] = useState();
  const [sourcematerial,setsourcematerial] = useState();
  const [currentpage, setcurrentpage] = useState();
  const [personlist, setpersonlist] = useState();
  const [topiclist, settopiclist] = useState([]);
  const [modulelist, setmodulelist] = useState([]);
  const location = useLocation();
  const [announcementlist, setannouncementlist] = useState([]);
  const [classsettings, setclasssettings] = useState();
  const [attendance, setAttendance] = useState("");
  const [responseinfo, setresponseinfo] = useState();

  const [studentselection ,setstudentselection] = useState();
  const [class_log, setclass_log] = useState([]);

  const [actlog, setactlog] = useState(true)
  

  const forecerefreshHandler= async()=>{
  
    await axios.get(url + currentclass.classes_id)
    .then(response => {
      setannouncementlist(response.data)
     
    })
    .catch(error => {
      console.log(error);
    });

  }

  const [sampleurl, setsampleurl] = useState()

  const [createdropdown, setcreatedropdown] = useState(false);


  
 

  const 
  goToURL =()=>{
    window.open(  sampleurl, '_blank' );
  }



  const url = (userinfo.user.usertype ==='prof' || userinfo.user.usertype ==='admin') ?  'https://api.kyusillid.online/api/get-announcement/' : 'https://api.kyusillid.online/api/get-announcementforstudent/'
  

  useEffect(()=>{   
      setcurrentpage(location.pathname);
      if(currentclass !== undefined){
  
        filldata();
        setclassbanner(currentclass!== undefined? currentclass.classbanner: 0)
        setsampleurl(currentclass.class_link !==undefined ? currentclass.class_link  : "")

        
      }


      if(currentclass===undefined){
        navigate('/')
      }
   

  },[location , currentclass])


  const getactivitybyId =  (e)=>{
  
 
     axios.get('https://api.kyusillid.online/api/getactivitybyId/' + e).then(

      response=>
          {setcurrentactivity(response.data)

          }

    ).then(
        navigate( '/classes/sampleclass/activity/activityId')   
    ).catch();

 }



  async function filldata(){
 
        await axios.get(url + currentclass.classes_id)
        .then(response => {
          setannouncementlist(response.data)
         
        })
        .catch(error => {
          console.log(error);
        });

        await axios.get('https://api.kyusillid.online/api/getpersonlist/' + currentclass.classes_id)
        .then(response => {
          setpersonlist(response.data)
        
        })
        .catch(error => {
          console.log(error);
        });

        await axios.get('https://api.kyusillid.online/api/get-topiclist/' + currentclass.classes_id)
        .then(response => {
          settopiclist(response.data);
        
        })
        .catch(error => {
          console.log(error);
        });

        

        if(userinfo.usertype==='prof' || userinfo.usertype ==='admin'){



     
    
             await axios.get('https://api.kyusillid.online/api/getstudentlist/' + userinfo.user.acc_id + "/" + currentclass.classes_id)
            .then(response => {
        
              const temp = response.data.map( item=>({
                  'selected' :   true, 
                  'classitem' : item.classitem ,
                
                  'studentlist': item.studentlist.map(item2=>({
                  'selected' : true, 'studentitem' : item2
                  }))
                })
                );
                setstudentselection(temp);
            })
            .catch(error => {
              console.log(error);
            });
          
         


          await axios.get('https://api.kyusillid.online/api/get-topiclist/' + currentclass.moduleSource)
        .then(response => {
          setmodulelist(response.data);
         
        
        })
        .catch(error => {
          console.log(error);
        });
        }

        await axios.get('https://api.kyusillid.online/api/getclass_log/' + currentclass.classes_id)
        .then(response=>{
            setclass_log(response.data)
        }).catch(error=>{console.log(error)})

        setclasssettings(
          {'classbanner' : 1}
          )
  }




  function isactive(e){
    return e===currentpage ? true : false;

 }




 const [activitytypefilter, setactivitytypefilter] = useState('none')
 const [topicfilter, settopicfilter] = useState('none')





function classSelection(classitem){


  setstudentselection(studentselection.map(item=>({
    'selected' :  item.classitem.classes_id === classitem.classitem.classes_id ? !classitem.selected : item.selected,
    'classitem' : item.classitem,
    'studentlist' : item.studentlist
  })))
  
}

function toggleStudentselect(studentitem){
  setstudentselection(studentselection.map(item=>({
    'selected' :  item.selected,
    'classitem' : item.classitem,
    'studentlist' : item.studentlist.map(item2=>({
      'selected' : studentitem.studentitem.acc_id === item2.studentitem.acc_id ? !studentitem.selected : item2.selected, 
      'studentitem' : item2.studentitem
      }))
  })))

}
function handleButtonClick() {
  markAttendance();
  goToURL();
}






const markAttendance = () => {
  const temp ={
    classes_id: currentclass.classes_id,
    acc_id: userinfo.user.acc_id,
  }


  console.log(JSON.stringify(temp))
  axios.post("https://api.kyusillid.online/api/AttendanceIn", {
      classes_id: currentclass.classes_id,
      acc_id: userinfo.user.acc_id,
    })
    .then((response) => {
      setAttendance(response.data.attendance.att_status);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
}





 
 if(currentclass===undefined){
  return <div></div>
 }
  return (
    <div className='classcontent'>
      <div className='classcontentmain'>
        <div className='row'> 
            <div className="col-lg-12 " >
              <div id='top' className={`primary classheader relative borderradius-lg dbpanelmargin ${((isactive('/classes/sampleclass/createnew') || isactive('/classes/sampleclass/activity/activityId') || isactive('/classes/sampleclass/marks')) ? ' classheader-md' : ' classheader-lg')}`}
              
              
              >

                <div className='classbanner borderradius-lg'  style={{backgroundImage: `url(${classbannerlist[classbanner]})`}}>

                </div>
           

                
              
                <div className='classtitle'>
                  {!(isactive('/classes/sampleclass/createnew')|| isactive('/classes/sampleclass/activity/activityId') || isactive('/classes/sampleclass/marks') ) ?
                     <div>      
                      <h1 >{currentclass.sub_name} </h1>
                     <h3 className='margintop12'>{currentclass.sub_code}</h3>
                    <h3>{currentclass.day_label} {currentclass.sched_from} - {currentclass.sched_to} {currentclass.sessionname2 != null && (", " + currentclass.sched_from2 + " - " + currentclass.sched_to2)}</h3>
                    <h3> { currentclass.title!== undefined && currentclass.title !== null && currentclass.title}{currentclass.firstname!== undefined  && currentclass.firstname !== null && ' '+ currentclass.firstname +' ' +  currentclass.lastname + ' ' } {currentclass.middle != undefined && currentclass.middle != null && currentclass.middle} {currentclass.suffix!== undefined && currentclass.suffix !== null && currentclass.suffix}</h3>
                
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
                  <div className="col-lg-4 classnav-min">
                        
                        

                  {currentclass.isarchived ===0 &&
                      
              
                      (  (userinfo.usertype==='prof' || userinfo.usertype ==='admin') && 
                        !isactive('/classes/sampleclass/createnew') ?
                        <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{setcreatedropdown(!createdropdown)}}>
                        <FaPlusCircle /><h4>Create New</h4>
                        
                      </div>
                      :
                      (userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&
                      <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin" onClick={()=>{ setcreatedropdown(false); navigate('/classes/sampleclass')}}>
                      <FaArrowCircleLeft /><h4>Cancel</h4>
                    </div>)
                }




                    {currentclass.isarchived === 0 &&

                    <>
                      <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin"  onClick={handleButtonClick}>
                          
                      <h4>Class Link</h4>

                        </div>

                        {/* <div className="secondary lighttext navcreatenew borderradius-lg dbpanelmargin">
                          <h4 onClick={markAttendance}>Attendance</h4>

                        </div> */}
                    </>
                      
                        
                      }

                    {createdropdown && 

                        <ul className='secondary borderradius-md createlist'>

                          <li className='padding12 lighttext borderradius-md' onClick={()=> { setcreatedropdown(false); setsourcematerial();setActivitytype({'value': "Material" , "label" : "Material"}); navigate('createnew')}}>Material</li>
                          <li className='padding12 lighttext borderradius-md' onClick={()=>{setsourcematerial();setcreatedropdown(false);setActivitytype({'value': "Activity" , "label" : "Activity"}); navigate('createnew')}}>Activity</li>
                          <li className='padding12 lighttext borderradius-md' onClick={()=>{setsourcematerial();setcreatedropdown(false);setActivitytype({'value': "Assignment" , "label" : "Assignment"}); navigate('createnew')}}>Assignment</li>
                          <li className='padding12 lighttext borderradius-md' onClick={()=>{setsourcematerial();setcreatedropdown(false);setActivitytype({'value': "Questionnaire" , "label" : "Questionnaire"}); navigate('createnew')}}>Questionnaire</li>
                        </ul>
                    
                    
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

                         {topiclist !== undefined && topiclist?.topiclist?.map((topicitem, key)=>(
                          <React.Fragment key={key}> 
                              <li key={key} className='classnavsubitem' onClick={()=>{settopicfilter(topicitem.topic_id) ; navigate('modules')}}>{topicitem.topic_name}</li>
                              <li><hr /></li>
                          </React.Fragment>
  
                         ))}
                                
                       </div>
                     }

                      {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&
                        <>
                        <li className={`classnavitem ${isactive('/classes/sampleclass/sourcematerials') && 'classnav-active'}`} onClick={()=>{navigate('sourcematerials')}}>  Source Materials</li>
                     <li><hr /></li>
                        </>
                     }
                      <li className={`classnavitem ${isactive('/classes/sampleclass/attendance') && 'classnav-active'}`} onClick={()=>{navigate('attendance')}}>  Attendance </li>
                     <li><hr /></li>

                     <li className={`classnavitem ${isactive('/classes/sampleclass/info') && 'classnav-active'}`} onClick={()=>{navigate('info')}}>  Class info </li>
                     <li><hr /></li>
                     {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&
                        <>
                          <li className={`classnavitem ${isactive('/classes/sampleclass/marks') && 'classnav-active'}`} onClick={()=>{navigate('marks')}}> Marks </li>
                          <hr/>
                     </>
                     }
                     <li className={`classnavitem ${isactive('/classes/sampleclass/messages') && 'classnav-active'}`} onClick={()=>{navigate('messages')}}> Messages </li>
                 
                     {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&
                      <>
                       <hr/>
                       <li className={`classnavitem ${isactive('/classes/sampleclass/settings') && 'classnav-active'}`} onClick={()=>{navigate('settings')}}> Settings </li>
               

                      </>
                     }
                     



                     
                  
                   </ul>
                  
                   
                 </div>

:

<div className='classnav tertiary borderradius-md dbpanelmargin '>

<ul className='notransition '>

{studentselection!== undefined &&
      studentselection.map((item, key)=>(
     <ClassSelectionitem key={key} classitems={item} handleClassSelection= {classSelection}  handlestudentselect={toggleStudentselect}
      selectedstudcount = {item.studentlist.filter(temp =>{ return temp.selected=== true}).length}
      totalstudents = {item.studentlist.length}
     
      />
       
  ))} 

  {studentselection=== undefined && 
    <h5>Loading student list...</h5>
  }



</ul>

</div>
                
                }
                  </div>
                  <div className="col-lg-8 outletcontainer-min">
                    <div className="tertiary borderradius-md outletcontainer">




                                <forcerefreshContext.Provider value ={{forecerefreshHandler}}>
                                <classAndstudentselectionContext.Provider value={{studentselection, setstudentselection}}> 
                               <personlistContext.Provider value={{personlist}}>
                               <announcementlistContext.Provider value={{announcementlist, setannouncementlist}}> 
                                  <sourceMaterialContext.Provider value={{sourcematerial, setsourcematerial}}>
                                <currentActivityContext.Provider value={{currentactivity, setcurrentactivity}}>
                                <topiclistContext.Provider value={{topiclist, settopiclist}}>
                                  <activitytypefilterContext.Provider value={{activitytypefilter, setactivitytypefilter}}>
                                 <topicfilterContext.Provider value={{topicfilter, settopicfilter}}>
                                <modulelistContext.Provider value={{modulelist, setmodulelist}}>
                               <settingsContext.Provider value={{classsettings, setclasssettings}}>
                                <classbannerContext.Provider value={{classbanner, setclassbanner}}>

                                  <responseContext.Provider value={{responseinfo, setresponseinfo}}>

                                    <setactivityContext.Provider value={{Activitytype, setActivitytype}}>
                                    <Outlet />  
                                    </setactivityContext.Provider>
                                 
                                  </responseContext.Provider>
                            

                                </classbannerContext.Provider>
                           
                               </settingsContext.Provider>                  
                                </modulelistContext.Provider>                                  
                                 </topicfilterContext.Provider>
                                  </activitytypefilterContext.Provider>
                                  </topiclistContext.Provider>
                                </currentActivityContext.Provider>
                                </sourceMaterialContext.Provider>
                                </announcementlistContext.Provider>
                               </personlistContext.Provider>
                               </classAndstudentselectionContext.Provider>
                                </forcerefreshContext.Provider>
                            
                               
                  
                                
                                                
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

     {!(isactive('/classes/sampleclass/createnew') || isactive('/classes/sampleclass/activity/activityId') || isactive('/classes/sampleclass/marks') )  &&
         <div className={`padding12 marginleft12 borderradius-md activitylog ${!actlog ? 'activitylog-closed' : 'tertiary'}`}>
        
        {actlog  ?
        <> <div className="flex">
        <h4>Class Activity log</h4> 
                <div className='marginleftauto'>
                <button className="commonbutton primary lighttext smallfont" onClick={()=>{setactlog(false)}}>Hide</button>
                </div>
        </div>
 
{class_log.map(item=>
     (<Activitylogpanel key={item.classlog_id} classlog= {item} getactivitybyId={getactivitybyId}/>)
)}</>
:
<div className='relative'>

  <div className='padding12 primary actlogbutton' onClick={()=>{setactlog(true)}}>  <BiChevronsLeft/></div>
  
  </div>}
         
       </div>  
    }
    </div>
  )
 
 

}

export default ClassContainer