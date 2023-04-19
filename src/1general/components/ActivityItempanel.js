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
  const {userinfo} = useContext(userInfoContext)
  const navigate = useNavigate()      
  const navigate2 =(e )=>{
    setcurrentactivity(e)
    navigate('/classes/sampleclass/activity/activityId')
  }

  const [commentcount, setcommentcount] = useState();

  const [shownew, setshownew] = useState(false);






  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/getcommentcount_act/'+ actItem.activity_id)
    .then(response => {
    setcommentcount(response.data)})
    .catch(error => {
      console.log(error);
    });

  if(userinfo.user.usertype ==='stud'){
    axios.get('https://api.kyusillid.online/api/checkview/' + actItem.activity_id + "/"+ userinfo.user.acc_id).then(
      response=> {
           setshownew(response.data === 0 ?true : false)
      }
    ).catch(error => console.log(error.data));

  }


  },[])

  const localise = (iso)=>{
 
    const date = new Date(`${iso}Z`);
    const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString(undefined, options);
    return formattedDate;
   }


  return (
    
        <li className={`relative flex activitypanel borderradius-md ${shownew && "primary2"}`} >
           <div className="row width100" onClick={()=>{navigate2(actItem)}}>
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                        {actItem.activity_type==='Material' ?
                          <RiBookFill />:
                          actItem.activity_type==='Questionnaire' ?
                          <MdQuiz/> :
                          actItem.activity_type==='Assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
                    </div>
          
                    <div className="col-lg-7 ">
                      <div className=' activitypanelsub1'>
                      <h5>{actItem.activity_title}</h5>
                      <p>{actItem.category} {actItem.activity_type} {actItem.activitytype==='Material' && `, ${actItem.materialcount} files`}</p>
                    </div>
                    </div>

                    <div className="col-lg-4 ">                   
                      <div className=' activitypanelsub2 marginleftauto'>
                        <p>Date posted : {localise(actItem.date_schedule)}</p>
                        {actItem.activity_type!=='Material' ? <p>Date due: {actItem.date_due !== null ? localise(actItem.date_due) : 'no due date'}</p> : <p>&nbsp;</p>}   
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