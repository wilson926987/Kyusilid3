import React from 'react'
import Adminpostpanel from '../components/Adminpostpanel'

function CalendarAnnouncements() {
  return (
    <div className='col-md-3'>
    <div className='eventscontainer tertiary borderradius-lg'>
        <div className="calendarcontainer primary borderradius-lg"></div>
        <div className='announcementscontainer'>
           <h4> Announcements</h4>


           <Adminpostpanel /><Adminpostpanel /><Adminpostpanel /><Adminpostpanel /><Adminpostpanel />
            
        </div>
    
    </div>
</div>
  )
}

export default CalendarAnnouncements