import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext } from '../Globalcontext'

function Createnew() {
  const {userinfo} = useContext(userInfoContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(userinfo.usertype!== 'prof'){
      navigate('/');
    }
  })

  const [postscheduletype, setpostscheduletype] = useState('fixed');
  const [postdate, setpostdate] = useState();
  const [posttimer, setposttimer] = useState(0);
  const [activitytype, setactivitytype] = useState('Material');
  const [duedate, setduedate] = useState();
  const [duescheduletype, setduescheduletype] = useState('fixed');
  const [duetimer, setduetimer] = useState(0);
  const [availability, setavailability] = useState();
  

  return (
    <div>
                <div className='row margintop12'>
                        <div className="col-lg-7 createactivitytitle">
                          <div>
                                   
                          <label htmlFor="">Title</label> <br /><input type="text"  className='primaryborder' placeholder='title'/> <br />
                          <br />
                          <label htmlFor="">Description</label> <br /> <textarea name="" id="" cols="30" rows="6" className='primaryborder' placeholder='description'></textarea><br />
                          <label htmlFor="">Upload</label>
                          <ul>
                            <li>-file</li>
                            <li>-link</li>
                           
                             </ul>
                             {activitytype==='Questionnaire' &&
                             <label htmlFor="" className='primary'>Questionaire( pag questionaire ung type)</label>}
                          </div>


                   
                        </div>

                        <div className="col-lg-5 createactivitytitle">
                          <div>
                            <div>
                              <label htmlFor="activitytype">Activity type</label>
                              <select name="activitytype" className='primary primaryborder' id="activitytype" onChange={(e)=>{setactivitytype(e.target.value)}}>
                               <option value="Material">Material</option>
                               <option value="Assignment">Assignment</option>
                               <option value="Activity">Activity</option>
                               <option value="Questionnaire">Questionnaire</option>
                               <option value="Attendance">Attendance</option>
                              </select>
                            </div>
               


                            {activitytype!== 'Attendance' &&
                            <>
                            <br />
                             
                                 <label htmlFor="schedule">Schedule</label> <br />
                                 <select name="schedule" id="schedule" className='primaryborder' onChange={(e)=>{setpostscheduletype(e.target.value)}}>
                                    <option value="fixed">fixed</option>
                                    <option value="timed">timed</option>           
                                  </select>                        
                            
                          
                            <div>
                            {postscheduletype==='fixed' &&
                             <input type="date" name="" className='primaryborder' id="postdate" defaultValue={postdate} /> 
                                                 
                            }
                            {postscheduletype==='timed' &&                           
                              <>
                        
                                <input type="number" defaultValue={posttimer} className='primaryborder' min ='0'/> minutes after start of class
                              </>
                            }
                      


                            </div>
                            </>
                            
                            
                            
                            }
            
                            

                            {(activitytype==='Assignment' || activitytype ==='Activity') &&
                              <>
                              <br />
                              <div>
                                <input type="checkbox" name="" id="allowedit" /> <label htmlFor="allowedit">Allow Students to edit once submitted</label> <br />
                                <input type="checkbox" name='' id='allowlate'/> <label htmlFor="allowlate">Allow late submissions</label> <br />
                                <label htmlFor="limitavailability">Limit availability</label>  
                                <select name="" id="">
                                    <option value="none">None</option>
                                    <option value="present">Only present</option>


                                </select>
                                <br />

                              </div>
                 

                      
                        
                             
                             <label htmlFor="">Due Date</label> 
                                <input type="number" defaultValue={duetimer}  min ='0'/> hours after posting <br />
                                <button>today</button> <br />
                                <button>this week</button> <br />
                                <button>this month</button><br />
                            

                              </>

                            
                            
                            }

                              


                          </div>
                        </div>

                </div> 
                <div className="margintop12">
                  <button>Confirm</button>
                </div>
    
    </div>
  )
}

export default Createnew