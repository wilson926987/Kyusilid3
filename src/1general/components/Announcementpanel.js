import React, { useState } from 'react'
import {MdSend} from 'react-icons/md'
import axios from 'axios'
import { useEffect } from 'react';


function Announcementpanel({announcementitem}) {
  const [commentslist, setcommentslist] = useState();

  useEffect(()=>{
    axios.get('http://localhost:8000/api/getcomments/'+ announcementitem.an_id)
    .then(response => {
    setcommentslist(response.data)})
    .catch(error => {
      console.log(error);
    });
    console.log(' ahsdfjhaskfh'+announcementitem.an_id)
    console.log(commentslist)
  },[])


 


  return (
    <div className="announcementpanel primaryborder borderradius-md">
    <div className="announcementheader">
      <div>
          <h5>{announcementitem.an_title}</h5>
      </div>
      <div>
        <h6>Posted {announcementitem.dateposted} by {announcementitem.postedBy}</h6>
      </div>
    </div>

    <div className='announcementcontent'>
        {announcementitem.an_content}
    </div>
    <hr />

    <div className="announcementcomment relative"> 
      {commentslist != undefined &&
      
        <div>
            <h4>Class Comments</h4>
            <div className="">
               {commentslist.map((commentitem , key)=>(
                 <div key={key} className='padding12'>
                    <div className="flex">
                      <h5>{commentitem.title + " " + commentitem.firstname + ' ' + commentitem.lastname + ' '  + commentitem.suffix }</h5>
                      <p className='smallfont marginleftauto'>{commentitem.date_posted}</p>
                    </div>
                    <div className='ellipsis '>
                          {commentitem.com_content}
                    </div>
           
                 </div>
               ))}
                  
            </div>
        </div>
      }



        <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder'></textarea>
        <div className='sendbutton'>  <MdSend/></div>
      
    </div>

  </div>
    
  )
}

export default Announcementpanel