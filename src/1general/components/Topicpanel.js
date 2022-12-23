import React, { useState } from 'react'
import ActivityItempanel from './ActivityItempanel'



function Topicpanel() {

  return (
    <div className='topicpanel borderradius-md'>
       <h4>Topic Title</h4> <hr />
       <ul className='topiclist'>
          <ActivityItempanel/>
          <ActivityItempanel/>
       </ul>
    </div>
  )
}

export default Topicpanel