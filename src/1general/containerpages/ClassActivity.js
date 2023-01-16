import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { currentActivityContext , userInfoContext} from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'



function ClassActivity() {
  const navigate = useNavigate();

  const {currentactivity} = useContext(currentActivityContext);
  const {userinfo} = useContext(userInfoContext);
  const [responsepage, setresponsepage] = useState(false);

  useEffect(()=>{
    if(currentactivity===undefined){
        navigate('/')
    }
  },[])
  
  if(currentactivity=== undefined){
    return (<div></div>)
  }else{
    return (
      <div>

        <div className='flex'>
        <div className={`flex activitytab ${(!responsepage || userinfo.usertype==='stud') ? 'primary' : 'background'}`} onClick={()=>{setresponsepage(false)}}>
       <div className='activityiconcontainer'>  
                      <div className='activityicon tertiary marginright12'>
                        {currentactivity.activitytype==='material' ?
                          <RiBookFill />:
                          currentactivity.activitytype==='questionnaire' ?
                          <MdQuiz/> :
                          currentactivity.activitytype==='assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
        </div>
          
        <h4> { currentactivity.topicId}: {currentactivity.activityname}</h4>

       </div>


       {userinfo.usertype ==='prof' && (currentactivity.activitytype !== 'material') &&
        <div className= {`flex activitytab ${responsepage ? 'primary' : 'background'}`} onClick={()=>{setresponsepage(true)}}>
            
         <h4>Responses</h4>
 
        </div>
       
       }

        <div className="marginleftauto smallfont">
          <p>Date posted : {currentactivity.datePosted}</p>
          <p>Date Due : {currentactivity.dateDue}</p>
        </div>
        </div>
        <hr/>

       {!responsepage ?
        <React.Fragment>
      

        <div className="row">
          <div className="col-lg-8 ">
          <div className='activitydescription'> 
          {currentactivity.description}

        </div>
          <div className='activitycontent'>
            {currentactivity.activitytype ==='material' ?
              <div className="flex">
                 <div className='materialpanel primary borderradius-md'>
                      <RiBookFill />
                      <p>file name</p>
                 </div>  
              </div>
            :currentactivity.activitytype==='questionnaire' ?
                  <div className="flex">
                    <div className='questionnairepanel primary borderradius-md'>
                      <h4>Quizz 1</h4>
                      <hr />
                      <div className='margintop12'>
                      <h5> 20 items</h5>
                      <h5> 50 points</h5>
                      </div>
                      <div className='questionnairefooter flex'>
                 
                        {userinfo.usertype==='prof' ? <button className='secondary'>view quiz</button> : <button className='secondary'>take quiz</button>}
                      </div>
                  </div>
                  </div>
            :
            <div></div>
          }
        </div>

          </div>
           
         {userinfo.usertype==='stud' && (currentactivity.activitytype!== 'material' && currentactivity.activitytype !=='questionnaire') &&
           <div className="col-lg-4">
           <div className=" background borderradius-md submissionpanel">
             <h4>Your work</h4>
             <div className='flex '>
                <button className='secondary'>Add file</button>
                <button className='secondary'> Hand In</button>
               
             </div>
           </div>
          </div>}
        </div>
       

        <div className="activitycomments">
          <h4>Class comments</h4>
          
          (comments here)
        </div>
        </React.Fragment> :
        <div>
            <h4>Response here</h4>
        </div>

      
      
      }
  
           
  
  
      </div>
    )

  }
  
}

export default ClassActivity