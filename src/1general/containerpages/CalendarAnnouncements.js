import React, { useEffect, useState } from 'react'
import Adminpostpanel from '../components/Adminpostpanel'
import axios from 'axios'

function CalendarAnnouncements() {
  const [Adminannouncements, setadminannouncements] = useState();
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/getadminannouncement/' + 1).then(response =>{
      setadminannouncements(response.data)
      console.log(response.data)
    }).catch();
  },[])

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);


  }, []);




  return (
    <div className='col-md-3'>
    <div className='eventscontainer tertiary borderradius-lg'>
       
        <div className="calendarcontainer primary borderradius-lg">
        <div className="box2">
        <div className="cards">
          <h2>{currentTime.toLocaleTimeString()}</h2>
          <br></br>
          <h3>{currentTime.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
        </div>
      </div>
          </div>
    
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