import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { currentActivityContext , userInfoContext } from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment, MdSend} from 'react-icons/md'

import {BsGearFill} from 'react-icons/bs'
import axios from 'axios';
import Textbox from '../formcomponents/Textbox';



function ClassActivity() {
  const navigate = useNavigate();

  const {currentactivity} = useContext(currentActivityContext);
  const {userinfo} = useContext(userInfoContext);
  const [activitytab ,setactivitytab] = useState( 'default');

  const [act_commentlist, set_actcommnentlist] = useState([]);
  const [commentinput, setcommentinput] = useState();
  const [activitysettings, setactivitysettings] = useState(false);
  const [edittitle, setedittitle] = useState(currentactivity.activity_title)
  const [editdescription, seteditdescription] = useState(currentactivity.description);


  const postcomments = async ()=>{

    if(commentinput != ""){
      const temp = {
        "acc_id" : userinfo.user.acc_id,
        "activity_id" : currentactivity.activity_id,
        "comment_content" : commentinput
      }
      console.log(JSON.stringify(temp))
  
      await axios.put('https://api.kyusillid.online/api/createactivitycomment', temp).then(response =>{
        set_actcommnentlist(response.data);
        
        
      }).catch(error => {
        console.log(error);
      });

      setcommentinput('');
    } 
  }

  const handledit = (e)=>{
    e.preventDefault();
  }
  

  useEffect(()=>{
    if(currentactivity===undefined){
        navigate('/')
    }
     axios.get('https://api.kyusillid.online/api/getactivitycommentlist/' + currentactivity.activity_id).then(response=>
      {set_actcommnentlist(response.data)}
     )



  },[currentactivity])
  
  if(currentactivity=== undefined){
    return (<div></div>)
  }else{
    return (
      <div>

        <div className='flex'>
        <div className={`flex activitytab ${(activitytab ==='default' || userinfo.usertype==='stud') ? 'primary' : 'background'}`} onClick={()=>{setactivitytab('default') ; setactivitysettings(false)}}>
       <div className='activityiconcontainer'>  
                      <div className='activityicon tertiary marginright12'>
                        {currentactivity.activitytype==='Material' ?
                          <RiBookFill />:
                          currentactivity.activitytype==='Questionnaire' ?
                          <MdQuiz/> :
                          currentactivity.activitytype==='Assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
        </div>
          
        <h4 className='ellipsis'> { currentactivity.topic_name}: {currentactivity.activity_title}</h4>

       </div>

       


       {userinfo.usertype ==='prof' && (currentactivity.activity_type !== 'Material') &&
        <div className= {`flex activitytab ${activitytab === 'responses'  ? 'primary' : 'background'}`} onClick={()=>{setactivitytab('responses') ; setactivitysettings(false)}}>
            
         <h4>Responses</h4>
 
        </div>
       
       }


{userinfo.usertype === 'prof' &&
   
   <div className='flex activitytab background relative' >
      <div  onClick={()=>{setactivitysettings(!activitysettings)}}>
      <BsGearFill />
      </div>
    
       {activitysettings && 
  
           <div className='activitysettings tertiary borderradius-md'>
        <ul>
          <li className='padding12' onClick={()=>{setactivitytab('edit') ; setactivitysettings(false) }}>Edit {currentactivity.activity_type}</li>
          <li className='padding12'>Delete {currentactivity.activity_type}</li>
          <li className='padding12'>Post to Source Modules</li>

         </ul>
         </div>        
      }
   </div>  
   }

        <div className="marginleftauto smallfont">
          <p>Date posted : {currentactivity.date_schedule}</p>
         {currentactivity.activity_type !== 'Material' ?  <p>Date Due : {currentactivity.date_due !== null ? currentactivity.date_due : 'no due date' }</p> : <p>&nbsp;</p>}
        </div>
        </div>
        <hr/>

       {activitytab === 'default' ?
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
          <hr/>  
          {act_commentlist.map((item)=>(
            <div key={item.comment_id} className='margintop12'>
              <div className='flex'> <h6>{item.firstname} {item.middle} {item.lastname} {item.suffix}</h6> <p className='smallfont marginleftauto'>{item.date_posted}</p></div>
              <div> {item.comment_content}</div>
            </div>
          ))}

<div className='relative'>
<textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder margintop12' value={commentinput} onChange={(e)=> setcommentinput(e.target.value)} ></textarea>
   
   <div className='sendbutton' onClick={postcomments}>   <MdSend/></div> 
</div>
        
          
        
        </div>
        </React.Fragment> :

        activitytab ==='responses' ?
        <div>
            <h4>Response here</h4>
        </div>
        :
        <div> 
          {/* edit activity */}

          <form onSubmit={handledit} >
            <div className="col-lg-6">
            <Textbox value={edittitle}  handleChange={setedittitle} placeholdervalue={'new title'}/> 
            </div>

            <div className="col-lg-6 creatactivitytitle">
            <textarea name="" id="" cols="30" rows="6" className='primaryborder commontextarea width100 marginleft10'  value={editdescription} placeholder='new description' onChange={(e)=>{seteditdescription(e.target.value)}}></textarea>
          
            </div>

          <div className='flex editactivityfooter'>
           <button type='submit' className='commonbutton secondary lighttext '>Confirm changes</button>

          </div>
            


          </form>





        </div>

      
      
      }

     
  
  
      </div>
    )

  }
  
}

export default ClassActivity