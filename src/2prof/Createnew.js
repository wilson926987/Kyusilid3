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
  

  return (
    <div><h4>Create new</h4>
                <div className='row'>
                        <div className="col-lg-7">
                          <div>
                                   
                          <label htmlFor="">Title</label> <br /><input type="text" /> <br />
                          <label htmlFor="">Description</label> <br /> <textarea name="" id="" cols="30" rows="10"></textarea><br />
                          <label htmlFor="">Upload</label>
                          <ul>
                            <li>-file</li>
                            <li>-link</li>
                            <li>-questionnaire</li>
                             </ul>
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
                                <input type="text" defaultValue={posttimer}  /> minutes after start of class
                              </>
                            }


                            </div>

                              


                          </div>
                        </div>

                </div> 
    
    </div>
  )
}

export default Createnew