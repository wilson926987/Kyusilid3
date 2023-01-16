import React, { useState } from 'react'
import Sourcematerialpanel from './Sourcematerialpanel'

function Sourcetopicpanel({sourcetopicitem}) {

 
  
  const [SourceModulelist , setSourceModulelist] = useState([
    {
      'topicname' : sourcetopicitem.sourcetopicname,
      'activityID' :1,
      'activitytype' : 'Assignment',
      'category' : 'Lecture',
      'activityname' :'Introduction to Database assignment',
      'commentcount' : 20,
      'materialcount' : 0,
      'description' :"This is a sample description for assignment"

    },
    {
      'activityID' :2,
      'topicname' : sourcetopicitem.sourcetopicname,
      'activitytype' : 'Questionnaire',
      'category' : 'Lecture',
      'activityname' :'Introduction to Database Quizz',
      'commentcount' : 0,
      'materialcount' : 0,
      'description' :"This is a sample description for questionnaire"

    },
    {
      'topicname' : sourcetopicitem.sourcetopicname,
      'activityID' :3,
      'activitytype' : 'Material',
      'category' : 'Laboratory',
      'activityname' :'Introduction to Database lesson 1',
      'commentcount' : 6,
      'materialcount' : 4,
      'description' :"This is a sample description for material"

    },
    {
      'topicname' : sourcetopicitem.sourcetopicname,
      'activityID' :4,
      'activitytype' : 'Activity',
      'category' : 'Laboratory',
      'activityname' :'Introduction to Database Seatwork',
      'commentcount' : 0,
      'materialcount' : 0,
      'description' :"This is a sample description for activity"
    }
  ]);


  return (
    <div className='topicpanel borderradius-md'>
       <h4>{sourcetopicitem.sourcetopicname}</h4>
       <hr />

     <ul className="topiclist">


     {SourceModulelist.map((temp2)=>(
          <li className='relative flex activitypanel borderradius-md' key={temp2.activityID}>
                <Sourcematerialpanel  actItem = {temp2}/>
          </li>

      ))}
     </ul>
   
    </div>

  )
}

export default Sourcetopicpanel