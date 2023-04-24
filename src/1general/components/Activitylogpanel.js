import React, { useContext, useEffect, useState } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { currentActivityContext } from '../../Globalcontext';

function Activitylogpanel({classlog ,getactivitybyId}) {


  const localise = (iso)=>{
 
    const date = new Date(`${iso}Z`);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString(undefined, options);
    return formattedDate;
   }

   const navigate = useNavigate();
  // const {setcurrentactivity} = useContext(currentActivityContext)
   const [shownew, setshownew] = useState(false);

 

   useEffect(()=>{
    const givenDate = new Date(classlog.created_at);
    const now = new Date();
    const timeDiff = now.getTime() - givenDate.getTime();
    setshownew(timeDiff < 30000000)
  


   },[])

   

  
   


  

  return (
    <div className={`flex borderradius-md padding12 margintop12  ${shownew && "primary2"}`} onClick={()=>{getactivitybyId(classlog.activity_id)}}>
       
        {classlog.log_type === 'activity' ?
         <div>    
          <div className='flex'> <p className='activitysubtitle smallfont'> <b> {classlog.title} {classlog.firstname} {classlog.lastname} {classlog.suffix} </b>
           has posted a new {shownew} {classlog.category} {classlog.activity_type} on {localise(classlog.created_at)} : 
          </p>
        
         </div>
         <h5 className=' activitylogname'> {classlog.topic_name} : {classlog.activity_title}</h5> 
 
         </div>
         :

         <div>    
          <div className='flex'> <p className='activitysubtitle smallfont'> <b> {classlog.title} {classlog.firstname} {classlog.lastname} {classlog.suffix} </b>
           has commented on a {classlog.activity_type} on {classlog.created_at} : 
          </p>
        
         </div>
         <h5 className='activitylogname'>{classlog.topic_name} : {classlog.activity_title}</h5> 
 
         </div>

          
        
        }
       
       

    </div>
  )
}

export default Activitylogpanel