import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext , sourceMaterialContext , currentclassContext, topiclistContext , classAndstudentselectionContext} from '../Globalcontext'
import {AiFillFile} from 'react-icons/ai'
import axios from 'axios'
import ArrowSelector from '../1general/formcomponents/ArrowSelector'
import Dropdown from '../1general/formcomponents/Dropdown'
import {FaPlusCircle} from 'react-icons/fa'
import Infobox from '../1general/formcomponents/Infobox'
import { FileUploadSharp } from '@mui/icons-material'


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

  const [filename, setfilename] = useState();


  useEffect(()=>{
    console.log(sourcematerial)
  },[])

 
   
     


  useEffect(()=>{
    console.log(sourcematerial)

    if(userinfo.usertype!== 'prof'){
      navigate('/');
    }

    setcategorylist([{
      'value' : currentclass.sessionname1, 'label' : currentclass.sessionname1
    }])
    
    
    if(currentclass.sessionname2 !== ''){
      setcategorylist(categorylist=> [...categorylist, { 'value' : currentclass.sessionname2 ,  'label' : currentclass.sessionname2}])
    }
    setpostdate(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));

    console.log(currentclass.sessionname1)
   
  },[])

 


  useEffect(()=>{
    if(topiclist!= undefined && topiclist !== null){
      settopiclisttem(
       

         topiclist.topiclist.map(item =>(
          {"value" : item.topic_name , "label" : item.topic_name}
         ))
      )
    }
   
  },[topiclist])


  const NewQuiz = async ()=>{
    if(sourcematerial === undefined){
      await axios.post('https://api.kyusillid.online/api/quizID').then(
      response=> {
        setQuizId(response.data);

   
        window.open('/Quiz/' + response.data , '_blank');
      }
    ).catch();
    }
    
  }

  

  
  const [postscheduletype, setpostscheduletype] = useState('fixed');
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [postdate, setpostdate] = useState();
  const [currentdate  , setcurrentdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));


  const [posttitle, setposttitle] = useState(sourcematerial!==undefined ? sourcematerial.activity_title : '');
  const [description, setdescription] = useState(sourcematerial !== undefined ? sourcematerial.description : '');
  const [category, setcategory] = useState( sourcematerial!==undefined ? sourcematerial.category : categorylist[0])
  const [module, setmodulename] = useState(sourcematerial !== undefined ? sourcematerial.topic_name :'')
  const [activitytype, setactivitytype] = useState(sourcematerial !==undefined ? sourcematerial.activity_type : "Material");
  const [duedate, setduedate] = useState('none');
  const [allowedit, setallowedit] = useState(false);
  const [allowlate, setallowlate] = useState(true)
  const [formduration, setformduration] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [QuizId, setQuizId] = useState();


  const [filelist, setfilelist] = useState([]);

  useEffect(()=>{
    console.log(filelist)
  },[filelist])


  
  useEffect(()=>{
    
    if(selectedFile !== null && selectedFile !== undefined){
      const formData = new FormData();
    formData.append("file_link", selectedFile);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.kyusillid.online/api/uploadfile");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setfilelist(filelist =>[...filelist, {
          "id" : response.id,
          "filename" :  response.data.name,
          "url" : response.url

        }])
       

      }
    };
    xhr.send(formData);
    }else{
      setfilename();
      console.log('no selected file')
    }
    
  },[selectedFile])

  
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

  const [schedoffset, setschedoffst] = useState(0);
  const availabilitylist= [
    {'value' : 'all' , 'label' : 'All selected'},
    { 'value': 'attended', 'label' : 'All attended'}
  ]

  const graceperiodlist= [
    {'value' : '15 mins' , 'label' : '15 minutes'},
    {'value' : 'rest' , 'label' : 'until the end of class'},
    {'value' : 'none' , 'label' : 'no grace period'}
  ]

  const [graceperiod, setgraceperiod] = useState(graceperiodlist[0])
  const [availability, setavailability] = useState(availabilitylist[0].value);

 

    

const Dueoptions =[ 
{'label' : 'no due date','value' : 'none'},
{'label': "30 mins after posted",'value' : 30},
{'label': "1 hour after posted",'value' : 60},
{'label': "within this class",'value' : 'withinclass'},
{'label': 'today','value' : 'today'},
{'label' : 'before the next discussion','value' : 'nextweek'}
 ]



 const activitytpelist = [
  {'value' : 'Material','label' : 'Material'},
  {'value' : 'Assignment','label' : 'Assignment'},
  {'value' : 'Activity','label' : 'Activity'},
  {'value' : 'Questionnaire','label' : 'Questionnaire'},
  {'value' : 'Midterm_Exam','label' : 'Midterm Exam'},
  {'value' : 'Final_Exam','label' : 'Final Exam'}

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

  await axios.post('https://api.kyusillid.online/api/createtopic' , newtopicitem)
  .then(response => {    
      console.log(response.data)  ;    

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

}



async function createActivity(){

  let newtopicitem = {
    'created_by' : sourcematerial !== undefined ? sourcematerial.createdby : userinfo.user.acc_id,
    'posted_by': userinfo.user.acc_id,
    'title' :    posttitle.length!== 0 ? posttitle : 'new ' + activitytype,
    'description':  description,
    'activity_type' :  activitytype,
    'category' : sourcematerial!==undefined ? sourcematerial.category   :  category['value'] ,
    'topic' :    module.length !== 0 ? module :  'no topic',
    'allowedit' : allowedit,
    'allowlate' : allowlate,
    'availability' : availability,
    'duedate' : duedate,
    'quiz_link' : sourcematerial !== undefined ? sourcematerial.quiz_link: QuizId,
    'studentselection' : studentselection,
    'schedule' : postdate,
    'postschedtype' : postscheduletype,
    'scheduleoffset' : schedoffset, 
    'points' : 100,
    'file_list': filelist
  }
  console.log(JSON.stringify(newtopicitem))

 

  await axios.post('https://api.kyusillid.online/api/createactivity' , newtopicitem)
  .then(response => {    
      console.log(response.data)  ;    

  })
  .catch(error => {
    console.log(error);
  });



  

  
}

const handleFileInput = (event) => {
  setSelectedFile(event.target.files[0]);
};

const handlecreateactivity=()=>{
   createActivity();
   navigate('/classes/sampleclass')
} 



  return (
    <div>
                <div className='row margintop12'>
                        <div className="vertical col-lg-7 createactivitytitle">

                          {activitytype !== 'Attendance' ?
                           <div>
                                   
                          <p className="smallfont">TITLE</p><input type="text" required  disabled={sourcematerial!==undefined} className='primaryborder' placeholder='Title' defaultValue={posttitle}  onChange={(e)=>{setposttitle(e.target.value)}}/> <br />
                           <br />
                           <p className="smallfont">DESCRIPTION</p><textarea name="" id="" cols="30" rows="6" className='primaryborder'  value={description} placeholder='Description' onChange={(e)=>{setdescription(e.target.value)}}></textarea><br />
                           <br />
                           
 
 
                           {!(activitytype==='Questionnaire' || activitytype==='Attendance' || activitytype === 'Midterm Exam' || activitytype === 'Final Exam') &&
                               (  (sourcematerial !== undefined )?
                              
                               
                                 <div className='uploadedfile flex primary borderradius-md'>
                                     <AiFillFile/>
                                     <h5>sample uploaded file</h5>
 
                                 </div>
                                :
                                 <>
                               
                           
                                <label htmlFor="">UPLOAD</label> 
                                <br></br> <br></br>

                                <label for="file-input" class="custom-file-upload secondary borderradius-md lighttext">
                               
                                <i class="fa fa-cloud-upload lighttext"></i> CHOOSE FILE
                              </label>
                              <input id="file-input" type="file" onChange={handleFileInput} />
                              
                                 
                              <br></br> <br></br>
                               { filelist.map((item, key)=>(
                                <a href={item.url} key={key}>
                                    <div className='commonbutton flex primary borderradius-md'>
                                  <AiFillFile/>
                                  <h5 className='ellipsis'>{item.filename}</h5>
                                  </div>
                                </a>
                               ))}
                          
            
                                </> )                               
                         }
                          
                              {(activitytype ==='Questionnaire') && 

                              <div className='secondary lighttext createquestionnaire' onClick={()=>{NewQuiz();}}>
                                  <h3>Edit Questionnaire</h3>

                             
                              </div>



}
                              {activitytype ==='Midterm Exam' &&
                              <label htmlFor="" className='primary'>Midterm Exam</label>}
                              {activitytype ==='Final Exam' &&
                              <label htmlFor="" className='primary'>Final Exam</label>}
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
                              < p className=' smallfont'>ACTIVITY TYPE</p>
                       


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
                             <p className='smallfont'> CATEGORY</p>

                              
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
                                defaultValue= {sourcematerial !== undefined ? {'value' : sourcematerial.category , 'label' : sourcematerial.category} : undefined}
                         
                            />


                            </div>
                            <br />

                        


                            <div>
                              <p className="smallfont">MODULE</p>
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
                            {sourcematerial === undefined &&   <button className='commonbutton lighttext borderradius-md secondary' onClick={()=>{setcreatetopic(!createtopic)}}> <FaPlusCircle/> CREATE TOPIC</button>
    }
                          {createtopic && 
                            <div className='createtopicmodal tertiary borderradius-md flex'>
                            <input type="text"  onChange={(e)=> {setinputtopicname(e.target.value)}}/>

                            <button className='commonbutton secondary borderradius-md lighttext margintop12' onClick={()=>{setcreatetopic(false)}}>CANCEL</button>

                          <form action="" onSubmit={(e)=>{createnewtopic(e)}}>
                          <button className='commonbutton secondary borderradius-md lighttext' >CREATE</button>

                          </form>

                              
                          </div>
                          }
                            
                              </div>
                              </div>                         
                            </div>



                            <br />
                             
                                 <p className="smallfont">POSTING SCHEDULE</p>
                               
                                  <div className="flex">
                                  <Dropdown
                                   options={[
                                    {'value' :'fixed',
                                      'label' : 'Set Date and Time'  
                                    },
                                    {'value' :'timed',
                                    'label' : 'Class Schedule'  
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
                                  
                                  <Infobox infocontent={'select whether if you can Set Date and Time or will be based by the class schedule'}/></div>                   
                            
                          
                            <div>
                            {postscheduletype==='fixed' &&
                       
                       
                             <input type="datetime-local" className='dropdowncontrol primary borderradius-md margintop12' defaultValue={postdate}  min={currentdate} onChange={(e)=>{setpostdate(e.target.value)}}/>
                                                 
                            }
                            {postscheduletype==='timed' &&                           
                                <ArrowSelector options={Postoptions} startingvalue={4}  selectorHandler= {setschedoffst}/>
                            }
                  
                            </div>
                            </>
                                                  
                            }
            
                            
                            {(activitytype==='Assignment' || activitytype ==='Activity' || activitytype==='Questionnaire' || activitytype === 'Midterm_Exam' || activitytype == 'Final_Exam' || activitytype==='Examination') &&
                              <>
                              <br />
                              <div>
                                <input type="checkbox" name='' id='allowlate'  defaultChecked={allowlate} onChange={(e)=> {setallowlate(e.target.checked)}}/> <label htmlFor="allowlate"><b>ALLOW LATE SUBMISSION</b></label> <br />
                  
                               <br />
            
 
                                <br />

                              </div>
                 

                      
                        
                             <br />
                            <p className="smallfont">DUE DATE</p>
                            <Dropdown
                                options={Dueoptions}
                                onChangeHandler= {setduedate}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'                           
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                defaultValue={Dueoptions[0]} 
                                placeholderValue='select due option'/> 
                                
                                      
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
                  
                   
                <button className='secondary lighttext createactivityconfirm' onClick={handlecreateactivity}>Confirm</button>
                

                </div>
              
             
    
    </div>
  )
}

export default Createnew