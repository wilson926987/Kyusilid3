import React, { useContext, useState } from 'react'
import { userInfoContext  , currentActivityContext} from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function ActivityItempanel({actItem}) {
  const {setcurrentactivity} = useContext(currentActivityContext)
  const navigate = useNavigate()      
  const navigate2 =(e )=>{
    setcurrentactivity(e)
    navigate('/classes/sampleclass/activity/activityId')
  }

  return (
     <React.Fragment>
          <div className="row width100" onClick={()=>{navigate2(actItem)}}>
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                        {actItem.activitytype==='material' ?
                          <RiBookFill />:
                          actItem.activitytype==='questionnaire' ?
                          <MdQuiz/> :
                          actItem.activitytype==='assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
                    </div>
          
                    <div className="col-lg-7 ">
                      <div className=' activitypanelsub1'>
                      <h5>{actItem.activityname}</h5>
                      <p>{actItem.category} {actItem.activitytype} {actItem.activitytype==='material' && `, ${actItem.materialcount} files`}</p>
                    </div>
                    </div>

                    <div className="col-lg-4 ">                   
                      <div className=' activitypanelsub2 marginleftauto'>
                        <p>Date posted : {actItem.datePosted}</p>
                        {actItem.activitytype!=='material' ? <p>Date due : {actItem.dateDue}</p> : <p>&nbsp;</p>}   
                      </div>
                    </div>
              </div>
              {actItem.commentcount>0 &&
                    <div className='activitypanelcomments'>
                    <div className="flex"><BiCommentDetail /> <p>{actItem.commentcount}</p></div>
                    <p> &nbsp;</p>
                    </div>}
     </React.Fragment>
  ) 
}

export default ActivityItempanel