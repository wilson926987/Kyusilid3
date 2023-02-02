import React, { useContext, useEffect, useState } from 'react'
import { userInfoContext  , currentActivityContext} from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ActivityItempanel({actItem}) {
  const {setcurrentactivity} = useContext(currentActivityContext)
  const navigate = useNavigate()      
  const navigate2 =(e )=>{
    setcurrentactivity(e)
    navigate('/classes/sampleclass/activity/activityId')
  }

  const [commentcount, setcommentcount] = useState();


  useEffect(()=>{
    axios.get('http://localhost:8000/api/getcommentcount_act/'+ actItem.activity_id)
    .then(response => {
    setcommentcount(response.data)})
    .catch(error => {
      console.log(error);
    });
  },[])


  return (
     <React.Fragment>
          <div className="row width100" onClick={()=>{navigate2(actItem)}}>
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                        {actItem.activity_type==='material' ?
                          <RiBookFill />:
                          actItem.activity_type==='questionnaire' ?
                          <MdQuiz/> :
                          actItem.activity_type==='assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
                    </div>
          
                    <div className="col-lg-7 ">
                      <div className=' activitypanelsub1'>
                      <h5>{actItem.activity_name}</h5>
                      <p>{actItem.category} {actItem.activity_type} {actItem.activitytype==='material' && `, ${actItem.materialcount} files`}</p>
                    </div>
                    </div>

                    <div className="col-lg-4 ">                   
                      <div className=' activitypanelsub2 marginleftauto'>
                        <p>Date posted : {actItem.date_posted}</p>
                        {actItem.activitytype!=='material' ? <p>Date due : {actItem.date_due}</p> : <p>&nbsp;</p>}   
                      </div>
                    </div>
              </div>
              {commentcount>0 &&
                    <div className='activitypanelcomments'>
                    <div className="flex"><BiCommentDetail /> <p>{commentcount}</p></div>
                    <p> &nbsp;</p>
                    </div>}
     </React.Fragment>
  ) 
}

export default ActivityItempanel