import React from 'react'
import {MdSend} from 'react-icons/md'

function Announcementpanel({announcementitem}) {
  return (
    <div className="announcementpanel primaryborder borderradius-md">
    <div className="announcementheader">
      <div>
          <h5>Announcement title</h5>
      </div>
      <div>
        <h6>Posted {announcementitem.dateposted} by {announcementitem.postedBy}</h6>
      </div>
    </div>

    <div className='announcementcontent'>
        {announcementitem.content}
    </div>
    <hr />

    <div className="announcementcomment relative"> 
        <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder'></textarea>
        <div className='sendbutton'>  <MdSend/></div>
      
    </div>

  </div>
    
  )
}

export default Announcementpanel