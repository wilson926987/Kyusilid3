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
    <div><h4>Create new</h4>
                <div className='row margintop12'>
                        <div className="col-lg-7">
                          <div>
                                   
                          <label htmlFor="">Title</label> <br /><input type="text" /> <br />
                          <label htmlFor="">Description</label> <br /> <textarea name="" id="" cols="30" rows="10"></textarea><br />
                          <label htmlFor="">Upload</label>
                          <ul>
                            <li>-file</li>
                            <li>-link</li>
                           
                             </ul>
                             {activitytype==='Questionnaire' &&
                             <label htmlFor="" className='primary'>Questionaire( pag questionaire ung type)</label>}
                          </div>


                   
                        </div>

                        <div className="col-lg-5">
                          <div>
                            <div>
                              <select name="activitytype"  id="" onChange={(e)=>{setactivitytype(e.target.value)}}>
                               <option value="Material">Material</option>
                               <option value="Assignment">Assignment</option>
                               <option value="Activity">Activity</option>
                               <option value="Questionnaire">Questionnaire</option>
                               <option value="Attendance">Attendance</option>
                              </select>
                            </div>
                            <hr />
            
                             <div className='flex'>
                                 <label htmlFor="">Schedule</label> 
                                 <select name="schedule" id="schedule" onChange={(e)=>{setpostscheduletype(e.target.value)}}>
                                    <option value="fixed">fixed</option>
                                    <option value="relative">relative</option>
                              
                                  </select>                        
                             </div>
                          
                            <div>
                            {postscheduletype==='fixed' &&
                             <input type="date" name="" id="postdate" defaultValue={postdate} /> 
                                                 
                            }
                            {postscheduletype==='relative' &&                           
                              <>
                                <input type="number" defaultValue={posttimer}  min ='0'/> minutes after start of class
                              </>
                            }
                            <hr />


                            </div>

                            {(activitytype==='Assignment' || activitytype ==='Activity') &&
                              <>
                              <hr />
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
                              <hr />

                              <div className='flex'>
                                 <label htmlFor="">Due Date</label> 
                                 <select name="schedule" id="schedule" onChange={(e)=>{setduescheduletype(e.target.value)}}>
                                    <option value="fixed">fixed</option>
                                    <option value="relative">relative</option>
                                  </select>                        
                             </div>

                             {duescheduletype==='fixed' &&
                             <>
                           
                              <input type="date" name="" id="postdate" defaultValue={duedate} />      
                             </>

                                                  
                             }
                              {duescheduletype==='relative' &&
                                <>
                            
                                <input type="number" defaultValue={duetimer}  min ='0'/> minutes after posting
                              </>
                              }

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