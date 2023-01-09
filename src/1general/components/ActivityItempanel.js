import React, { useContext, useState } from 'react'
import { userInfoContext } from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'

function ActivityItempanel({activitytype, activityname, category, dateposted, datedue , commentcount , materialcount}) {

  return (
        <li className='relative flex activitypanel borderradius-md'>
              <div className="row width100">
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                        {activitytype==='material' ?
                          <RiBookFill />:
                          activitytype==='questionnaire' ?
                          <MdQuiz/> :
                          activitytype==='assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>
                      
                      
                      }
                       </div>
                    </div>
          
                    <div className="col-lg-8 ">
                      <div className=' activitypanelsub1'>
                      <h5>{activityname}</h5>
                      <p>{category} {activitytype} {activitytype==='material' && `, ${materialcount} files`}</p>
                    </div>
                    </div>

                    <div className="col-lg-3 ">                   
                      <div className=' activitypanelsub2 marginleftauto'>
                        <p>Date posted : November 1 {dateposted}</p>
                        {activitytype!=='material' ? <p>Date due : November2 {datedue}</p> : <p>&nbsp;</p>}   
                      </div>
                    </div>
              </div>
              {commentcount>0 &&
                    <div className='activitypanelcomments'>
                    <div className="flex"><BiCommentDetail /> <p>{commentcount}</p></div>
                    <p> &nbsp;</p>
                    </div>}

            
      
                  
           
           
        </li>
  ) 
}

export default ActivityItempanel