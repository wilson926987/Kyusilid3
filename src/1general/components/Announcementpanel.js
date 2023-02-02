import React, { useState } from 'react'
import {MdSend} from 'react-icons/md'
import axios from 'axios'
import { useEffect } from 'react';


function Announcementpanel({announcementitem}) {
  const [commentslist, setcommentslist] = useState();
  const  currentdatestamp =   new Date().toISOString().slice(0, 19).replace('T', ' ');

  useEffect(()=>{
    axios.get('http://localhost:8000/api/getcomments/'+ announcementitem.an_id)
    .then(response => {
    setcommentslist(response.data)})
    .catch(error => {
      console.log(error);
    });

  },[])


 


  return (
    <div className="announcementpanel borderradius-md background margintop12">
    <div className="announcementheader">
      <div>
          <h5>{announcementitem.an_title}</h5>
      </div>
      <div>
        <h6>Created {announcementitem.created_at} by {announcementitem.firstname} {announcementitem.lastname}</h6>
    
      </div>
    </div>

    <div className='announcementcontent'>
        {announcementitem.an_content}
    </div>
    <hr className='margintop12'/>

    <div className="announcementcomment relative"> 
      {commentslist !== undefined && commentslist.length>0 &&
      
        <div>
            <h5>Class Comments</h5>
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



{announcementitem.schedule < currentdatestamp ?
 <>
 <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder margintop12'></textarea>
   <div className='sendbutton'>  <MdSend/></div>
   </>
   :
   <div className='flex '>
      <div className='marginleftauto flex'>
     
        <h6>To be posted at :  {announcementitem.schedule}</h6> 
        <button className='commonbutton secondary borderradius-md lighttext'> Post now</button>
      
      </div>
    
   </div>

}
     
    </div>

  </div>
    
  )
}

export default Announcementpanel