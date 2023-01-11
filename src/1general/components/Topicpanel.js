import React, { useContext, useState } from 'react'
import ActivityItempanel from './ActivityItempanel'
import { topicfilterContext ,activitytypefilterContext } from '../../Globalcontext';




function Topicpanel({topicitem}) {
  const {topicfilter, settopicfilter} = useContext(topicfilterContext)
  const {activitytypefilter, setactivitytypefilter} = useContext(activitytypefilterContext)

  const [ClassActivitylist , setClassActivitylist] = useState([
    {
      'topicId' : topicitem.topicname,
      'activityID' :1,
      'activitytype' : 'assignment',
      'category' : 'Lecture',
      'activityname' :'Introduction to Database assignment',
      'commentcount' : 20,
      'materialcount' : 0,
      'datePosted': 'November 6 , 2pm',
      'dateDue' : 'November 8 , 2pm',
      'description' :"This is a sample description for assignment"

    },
    {
      'activityID' :2,
      'topicId' : topicitem.topicname,
      'activitytype' : 'questionnaire',
      'category' : 'Lecture',
      'activityname' :'Introduction to Database Quizz',
      'commentcount' : 0,
      'materialcount' : 0,
      'datePosted': 'November 6 , 2pm',
      'dateDue' : 'November 8 , 2pm',
      'description' :"This is a sample description for questionnaire"

    },
    {
      'topicId' : topicitem.topicname,
      'activityID' :3,
      'activitytype' : 'material',
      'category' : 'Laboratory',
      'activityname' :'Introduction to Database lesson 1',
      'commentcount' : 6,
      'materialcount' : 4,
      'datePosted': 'November 6 , 2pm',
      'dateDue' : 'November 8 , 2pm',
      'description' :"This is a sample description for material"

    },
    {
      'topicId' : topicitem.topicname,
      'activityID' :4,
      'activitytype' : 'activity',
      'category' : 'Laboratory',
      'activityname' :'Introduction to Database Seatwork',
      'commentcount' : 0,
      'materialcount' : 0,
      'datePosted': 'November 6 , 2pm',
      'dateDue' : 'November 8 , 2pm',
      'description' :"This is a sample description for activity"
    }
  ]);

  return (
    <div className='topicpanel borderradius-md'>
       <h4>{topicitem.topicname}</h4> <hr />
    
       <ul className='topiclist'>
         
              {ClassActivitylist.filter((vartemp2)=>{
                if(activitytypefilter==='none'){
                  return vartemp2;
                }else{
                  return vartemp2.activitytype===activitytypefilter;
                }
              }).map((actItem)=>(
                <li className='relative flex activitypanel borderradius-md' key={actItem.activityID}>
                    <ActivityItempanel actItem = {actItem}/>
                </li>
                
              ))}
       </ul>
    </div>
  )
}

export default Topicpanel