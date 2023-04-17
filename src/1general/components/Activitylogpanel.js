import React from 'react'
import avatar from '../../assets/images/avatar.jpg'
import axios from 'axios';

function Activitylogpanel({classlog}) {


  const localise = (iso)=>{
 
    const date = new Date(`${iso}Z`);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString(undefined, options);
    return formattedDate;
   }


  return (
    <div className='activitylogpanel'>
        <div className='activitylogicon'>

        </div>
        {classlog.log_type === 'activity' ?
         <div>    
          <div className='flex'> <p className='activitysubtitle smol'> <b> {classlog.title} {classlog.firstname} {classlog.lastname} {classlog.suffix} </b>
           has posted a new {classlog.category} {classlog.activity_type} on {localise(classlog.created_at)} : 
          </p>
        
         </div>
         <p className='smol activitylogname'><b > {classlog.topic_name} : {classlog.activity_title}</b></p> 
 
         </div>
         :

         <div>    
          <div className='flex'> <p className='activitysubtitle smol'> <b> {classlog.title} {classlog.firstname} {classlog.lastname} {classlog.suffix} </b>
           has commented on a {classlog.activity_type} on {classlog.created_at} : 
          </p>
        
         </div>
         <p className='smol activitylogname'><b > {classlog.topic_name} : {classlog.activity_title}</b></p> 
 
         </div>

          
        
        }
       
       

    </div>
  )
}

export default Activitylogpanel