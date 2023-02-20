import React, { useEffect, useState } from 'react'
import Adminpostpanel from '../components/Adminpostpanel'
import axios from 'axios'

function CalendarAnnouncements() {
  const [Adminannouncements, setadminannouncements] = useState();

  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/getadminannouncement/' + 1).then(response =>{
      setadminannouncements(response.data)
      console.log(response.data)
    }).catch();
  },[])




  return (
    <div className='col-md-3'>
    <div className='eventscontainer tertiary borderradius-lg'>
        <div className="calendarcontainer primary borderradius-lg"></div>
        <div className='announcementscontainer'>
           <h4> Announcements</h4>

           {Adminannouncements!== undefined &&  Adminannouncements.map((item, key)=>(
            <Adminpostpanel  key={key} item = {item}/>
           ))}



           {/* <Adminpostpanel /><Adminpostpanel /><Adminpostpanel /><Adminpostpanel /><Adminpostpanel /> */}
            
        </div>
    
    </div>
</div>
  )
}

export default CalendarAnnouncements