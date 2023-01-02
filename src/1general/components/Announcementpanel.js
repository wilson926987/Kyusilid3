import React from 'react'
import {MdSend} from 'react-icons/md'

function Announcementpanel() {
  return (
    <div className="announcementpanel primaryborder borderradius-md">
    <div className="announcementheader">
      <div>
          <h5>Announcement title</h5>
      </div>
      <div>
        <h6>Posted ##date# by ##Prof name #</h6>
      </div>
    </div>

    <div className='announcementcontent'>
      ## Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit rem eius iste. Neque assumenda voluptatum omnis facere. Similique corrupti voluptates repudiandae accusantium ipsa quis, aliquam delectus ex voluptate pariatur suscipit!
    </div>
    <hr />

    <div className="announcementcomment"> 
        <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment'></textarea>
        <div className='sendbutton'>  <MdSend/></div>
      
    </div>

  </div>
    
  )
}

export default Announcementpanel