import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext , sourceMaterialContext , currentclassContext, topiclistContext , classAndstudentselectionContext} from '../Globalcontext'
import {AiFillFile} from 'react-icons/ai'
import axios from 'axios'
import ArrowSelector from '../1general/formcomponents/ArrowSelector'
import Dropdown from '../1general/formcomponents/Dropdown'
import {FaPlusCircle} from 'react-icons/fa'
import Infobox from '../1general/formcomponents/Infobox'


function Createnew() {
  const {userinfo} = useContext(userInfoContext)
  const {sourcematerial} = useContext(sourceMaterialContext)
  const {currentclass} = useContext(currentclassContext)
  const {topiclist , settopiclist} = useContext(topiclistContext)
  const {studentselection} = useContext(classAndstudentselectionContext)
  const navigate = useNavigate()
  const [recordingtype, setrecordingtype] = useState('form');
  const [topiclistemp, settopiclisttem]= useState()

  const [categorylist, setcategorylist] = useState([{
    'value' : currentclass.sessionname1, 'label' : currentclass.sessionname1
  }])


 
   
     


  useEffect(()=>{
    if(userinfo.usertype!== 'prof'){
      navigate('/');
    }

    setcategorylist([{
      'value' : currentclass.sessionname1, 'label' : currentclass.sessionname1
    }])
    
    
    if(currentclass.sessionname2 !== ''){
      setcategorylist(categorylist=> [...categorylist, { 'value' : currentclass.sessionname2 ,  'label' : currentclass.sessionname2}])
    }
   
  },[])

 


  useEffect(()=>{
    settopiclisttem(
      topiclist.map(function (obj) {
      
        return {'value': obj.topic_name, 'label': obj.topic_name}
       })
    )
  },[topiclist])

  

  
  const [postscheduletype, setpostscheduletype] = useState('fixed');
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [postdate, setpostdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));
  const [currentdate  , setcurrentdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));


  const [posttitle, setposttitle] = useState(sourcematerial!==undefined ? sourcematerial.activityname : '');
  const [description, setdescription] = useState();
  const [category, setcategory] = useState( sourcematerial!==undefined ? sourcematerial.category : categorylist[0])
  const [module, setmodulename] = useState(sourcematerial !== undefined ? sourcematerial.topicname :'')
  const [activitytype, setactivitytype] = useState(sourcematerial !==undefined ? sourcematerial.activitytype : "Material");
  const [duedate, setduedate] = useState();
  const [allowedit, setallowedit] = useState(false);
  const [allowlate, setallowlate] = useState(false)
  const [formduration, setformduration] = useState();
  const availabilitylist= [
    {'value' : 'all' , 'label' : 'All selected'},
    { 'value': 'attended', 'label' : 'All attended'}
  ]

  const graceperiodlist= [
    {
      'value' : '15 mins' , 'label' : '15 minutes'},
    {'value' : 'rest' , 'label' : 'until the end of class'},
    {'value' : 'none' , 'label' : 'no grace period'}
  ]

  const [graceperiod, setgraceperiod] = useState(graceperiodlist[0])
  const [availability, setavailability] = useState(availabilitylist[0].value);

 


  const Postoptions = [
    {'text': "1 hr before the start of class",'value' : -60},
{'text': "30 mins before the start of class",'value' : -30},
{'text': "10 mins before the start of class",'value' : -10},
{'text': "5 mins before the start of class",'value' : -5},
{'text': "at the start of class", 'value' : 0},
{'text': "5 mins after the start of class",'value' : 5},
{'text': "10 mins after the start of class",'value' : 10},
{'text': "30 mins after the start of class",'value' : 30},
{'text': "1 hr after the start of class",'value' :60} ]
  

const Dueoptions =[ 
{'text' : 'no due date','value' : 999},
{'text': "30 mins after posted",'value' : 30},
{'text': "45 mins after posted",'value' : 45},
{'text': "1 hour after posted",'value' : 60},
{'text': "2 hours after posted",'value' : 120},
{'text': "3 hours after posted",'value' : 180},
{'text': 'today','value' : 999},
{'text' : 'before the next discussion','value' : 999}
 ]



 const activitytpelist = [
  {'value' : 'Material','label' : 'Material'},
  {'value' : 'Assignment','label' : 'Assignment'},
  {'value' : 'Activity','label' : 'Activity'},
  {'value' : 'Questionnaire','label' : 'Questionnaire'},
  {'value' : 'Attendance','label' : 'Attendance'}

]


const [inputtopicname, setinputtopicname] = useState();
const [createtopic, setcreatetopic]= useState(false);

async function createnewtopic(e){
  setcreatetopic(false);
  e.preventDefault();

  let newtopicitem={
    'topic_name' : inputtopicname,
    'classes_id' :  currentclass.classes_id
  }

  await axios.post('http://localhost:8000/api/createtopic/' , newtopicitem)
  .then(response => {    
      console.log(response.data)  ;    

  })
  .catch(error => {
    console.log(error);
  });

  await axios.get('http://localhost:8000/api/get-topiclist/' + currentclass.classes_id)
  .then(response => {
    settopiclist(response.data);
  
  })
  .catch(error => {
    console.log(error);
  });

}

async function createActivity(){
  let temp = {
    'title' : posttitle,
    'description': description,
    'activity_type' : activitytype,
    'category' : category,
    'topic' : module,
    'post_schedule': postdate,
    'allowedit' : allowedit,
    'allowlate' : allowlate,
    'availability' : availability,
    'duedate' : duedate,
    'questionnaire_link' : 'google.com',
    'studentselection' : studentselection
  }


  // await axios.post('http://localhost:8000/api/createtopic/' , newtopicitem)
  // .then(response => {    
  //     console.log(response.data)  ;    

  // })
  // .catch(error => {
  //   console.log(error);
  // });
  console.log(JSON.stringify(temp));
}   


const handlecreateactivity=()=>{
   createActivity();
}






  return (
    <div>
                <div className='row margintop12'>
                        <div className="col-lg-7 createactivitytitle">

                          {activitytype !== 'Attendance' ?
                           <div>
                                   
                          <p className="smallfont">Title</p><input type="text"  disabled={sourcematerial!==undefined} className='primaryborder' placeholder='title' defaultValue={posttitle}  onChange={(e)=>{setposttitle(e.target.value)}}/> <br />
                           <br />
                           <p className="smallfont">Description</p><textarea name="" id="" cols="30" rows="6" className='primaryborder' placeholder='description' onChange={(e)=>{setdescription(e.target.value)}}></textarea><br />
                           <br />
                           
 
 
                           {!(activitytype==='Questionnaire' || activitytype==='Attendance') &&
                               (  (sourcematerial !== undefined )?
                              
                               
                                 <div className='uploadedfile flex primary borderradius-md'>
                                     <AiFillFile/>
                                     <h5>sample uploaded file</h5>
 
                                 </div>
                                :
                                 <>
                                <label htmlFor="">Upload</label>
                                 <div className="flex">
                                 <div className='primary uploadpanel borderradius-md'>
                               
                                   <h4>File</h4>
                                 </div>                    
                                 </div> 
                                 
                                </> )                               
                         }
                          
                              {activitytype==='Questionnaire' &&
                              <label htmlFor="" className='primary'>Questionaire( pag questionaire ung type)</label>}
                           </div> 
                           :
                           <div>
                            <h4>New Attendance</h4>
                            <p className='smallfont'> {currentdate}</p>
                           </div>
                          }
                                          
                        </div>

                        <div className="col-lg-5 createactivitytitle">
                          <div>
                            <div>
                              < p className=' smallfont'>Activity type</p>
                       


                              <Dropdown
                                options={activitytpelist}
                                onChangeHandler= {setactivitytype}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue= 'select activity type'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                disabled ={sourcematerial !== undefined}
                            />   

                            </div>
                            <br />

                            
               
                            {activitytype!== 'Attendance' &&
                            <>

<div>
                             <p className='smallfont'> Category</p>

                              
                              <Dropdown
                                options={categorylist}
                                onChangeHandler= {setcategory}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                disabled ={sourcematerial !== undefined}
                            />
                            </div>
                            <br />

                            <div>
                              <p className="smallfont">Module</p>
                              <div className="row">
                              <div className='col-lg-6'>
                              <Dropdown
                                   options={topiclistemp}
                                onChangeHandler= {setmodulename}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                controlClass='dropdowncontrol'
                                placeholderValue= 'select topic '
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                disabled ={sourcematerial !== undefined}
                            />
                              </div>

                              <div className="col-lg-6">
                              <button className='commonbutton lighttext borderradius-md secondary' onClick={()=>{setcreatetopic(!createtopic)}}> <FaPlusCircle/> Create Topic</button>
    
                          {createtopic && 
                            <div className='createtopicmodal tertiary borderradius-md flex'>
                            <input type="text"  onChange={(e)=> {setinputtopicname(e.target.value)}}/>

                            <button className='commonbutton secondary borderradius-md lighttext margintop12' onClick={()=>{setcreatetopic(false)}}>Cancel</button>

                          <form action="" onSubmit={(e)=>{createnewtopic(e)}}>
                          <button className='commonbutton secondary borderradius-md lighttext' >Create</button>

                          </form>

                              
                          </div>
                          }
                            
                              </div>

                              </div>

                           
                            </div>



                            <br />
                             
                                 <p className="smallfont">Schedule</p>
                               
                                  <div className="flex">
                                  <Dropdown
                                   options={[
                                    {'value' :'fixed',
                                      'label' : 'fixed'  
                                    },
                                    {'value' :'relative',
                                    'label' : 'relative schedule'  
                                    }
                                  ]}
                                onChangeHandler= {setpostscheduletype}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue='select option'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                defaultValue={ {'value' :'fixed',
                                'label' : 'fixed'  
                              }}
                         
                                  /> 
                                  
                                  <Infobox infocontent={'select whether it will be a fixed date or will be based by the class schedule'}/></div>                   
                            
                          
                            <div>
                            {postscheduletype==='fixed' &&
                       
                       
                             <input type="datetime-local" className='dropdowncontrol primary borderradius-md margintop12' defaultValue={postdate}  min={currentdate} onChange={(e)=>{setpostdate(e.target.value)}}/>
                                                 
                            }
                            {postscheduletype==='timed' &&                           
                                <ArrowSelector options={Postoptions} startingvalue={4} />
                            }
                  
                            </div>
                            </>
                                                  
                            }
            
                            
                            {(activitytype==='Assignment' || activitytype ==='Activity' || activitytype==='Questionnaire') &&
                              <>
                              <br />
                              <div>
                                <input type="checkbox" name="" id="allowedit" onChange={(e)=> {setallowedit(e.target.checked)}} /> <label htmlFor="allowedit">Allow Students to edit once submitted</label> <br />
                                <input type="checkbox" name='' id='allowlate' onChange={(e)=> {setallowlate(e.target.checked)}}/> <label htmlFor="allowlate">Allow late submissions</label> <br />
                               <br />
                               <p className="smallfont">Limit availability</p>

                              <div className="flex">
                              <Dropdown
                                options={availabilitylist}
                                onChangeHandler= {setavailability}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                              
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                defaultValue={availabilitylist[0]} /> 

                                <Infobox infocontent={'available only to students who filled up the attendance. Automatically creates an attendance form if there is none'} />
                              </div>
                             
                              
                               

                                <br />

                              </div>
                 

                      
                        
                             <br />
                            <p className="smallfont">Due Date</p>
                            <Dropdown
                                options={Dueoptions}
                                onChangeHandler= {setduedate}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'                           
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                defaultValue={Dueoptions[0]} /> 
                                        
                              </>                     
                            }
                              {(activitytype=== 'Attendance') &&
                                <>
                                <p className="smallfont">recording type</p>
                                <div className="flex">
                                <Dropdown
                                   options={[
                                    {'value' :'form',
                                      'label' : 'form'  
                                    },
                                    {'value' :'manual',
                                    'label' : 'manual recording'  
                                    }
                                  ]}
                                onChangeHandler= {setrecordingtype}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue='select option'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                defaultValue= {{'value' : 'form' , 'label' : 'form'}}
                         
                                  /> 
                                  <Infobox infocontent={'set if the attendance will be displayed as form or will be tallied by the professor . Attendance can still be edited by the professor regardless of the type of form'} />
                               
                                 

                                </div>

                               


                                  <br/>
                                 {activitytype ==='Attendance' && recordingtype ==='form' &&
                                 <>
                                  <p className="smallfont">Form duration</p>

                                  <div className="flex">
                                  <Dropdown
                                            options={[
                                          
                                            {'value' :'15 mins',
                                            'label' : '15 minutes'  
                                            },
                                            {'value' :'30 mins',
                                            'label' : '30 minutes'  
                                            },
                                            {'value' :'class duration',
                                            'label' : 'class duration'  
                                            }
                                          ]}
                                        onChangeHandler= {setformduration}
                                        mainClass= 'dropdownmain primary borderradius-md'
                                        itemClass= 'dropdownitem'
                                        placeholderValue='select option'
                                        controlClass='dropdowncontrol'
                                        menuClass='dropdownmenu primary'
                                        controlActiveClass='dropdowncontrolactive'
                                        mainActiveClass='dropdownmain-active'
                                        defaultValue= { 
                                          {'value' :'15 mins',
                                          'label' : '15 minutes'  
                                          }}
                    
                             />
                             <Infobox  infocontent={'Set the duration before the attendance form marks the rests of the students late'}/>
                                  </div>

                                  <br />
                                  <p className='smallfont'> Grace period</p>
                                  <div className="flex">
                                  <Dropdown
                                    options={graceperiodlist}
                                    onChangeHandler= {setformduration}
                                    mainClass= 'dropdownmain primary borderradius-md'
                                    itemClass= 'dropdownitem'
                                    placeholderValue='select option'
                                    controlClass='dropdowncontrol'
                                    menuClass='dropdownmenu primary'
                                    controlActiveClass='dropdowncontrolactive'
                                    mainActiveClass='dropdownmain-active'
                                    defaultValue= { 
                                            {'value' :'15 mins',
                                            'label' : '15 minutes'  
                                            }}  />

                                    <Infobox  infocontent={'Set the duration before the attendance form marks the rests of the students as absent'}/>
                     
                            
                                  </div>
                             
                             </>
                                 
                                 }




                                </>

                            }

                           

                              
                         </div>
                       
                        </div>

                </div> 
                <br />
                <hr />
                <div className="createactivityfooter">
                  
                   
                <button className='primary createactivityconfirm' onClick={handlecreateactivity}>Confirm</button>
                

                </div>
              
             
    
    </div>
  )
}

export default Createnew