import React, { useState } from 'react'
import ActivityItempanel from './ActivityItempanel'



function Topicpanel() {

  return (
    <div className='topicpanel borderradius-md'>
       <h4>Topic Title</h4> <hr />
       <ul className='topiclist'>
          <ActivityItempanel activitytype={'assignment'} category={'Lecture'} activityname={'Introduction to Database activity'} commentcount={20}/>
          <ActivityItempanel activitytype={'questionnaire'}  category={'Lecture'} activityname={'Introduction to Database quiz'}/>
          <ActivityItempanel activitytype={'material'} category={'Laboratory'} activityname={'Introduction to Database lesson'} commentcount={6} materialcount={4}/>
          <ActivityItempanel activitytype={'activity'} category={'Laboratory'} activityname={'Introduction to Database seatwork'}/>
       </ul>
    </div>
  )
}

export default Topicpanel