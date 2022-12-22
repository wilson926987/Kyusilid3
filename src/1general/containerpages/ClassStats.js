import React from 'react'
import Announcementpanel from '../components/Announcementpanel'

function ClassStats() {
  return (
    <div>
      <h4>Announcements</h4>


      <div className="col-md-12 margintop12 ">
        <Announcementpanel />
        <Announcementpanel />   
        <Announcementpanel />
       
       
      </div>

    </div>
  )
}

export default ClassStats