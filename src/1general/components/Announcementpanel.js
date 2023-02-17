import React, { useContext, useState } from 'react'
import {MdSend} from 'react-icons/md'
import axios from 'axios'
import { useEffect } from 'react';
import { announcementlistContext, userInfoContext , currentclassContext , forcerefreshContext } from '../../Globalcontext';
import {AiFillEdit} from 'react-icons/ai'


function Announcementpanel({announcementitem , forcerefresh}) {

  const  currentdatestamp =   new Date().toISOString().slice(0, 19).replace('T', ' ');
  const [commentinput, setcommentinput] = useState();
  const {userinfo} = useContext(userInfoContext);
  const {setannouncementlist} = useContext(announcementlistContext);
  const {currentclass} = useContext(currentclassContext);
  const {forecerefreshHandler} = useContext(forcerefreshContext);

<<<<<<< HEAD
  const url = userinfo.user.usertype ==='prof' ?  'https://api.kyusillid.online/api/get-announcement/' : 'https://api.kyusillid.online/api/get-announcementforstudent/'
=======
  const url = userinfo.user.usertype ==='prof' ?  'https://kyusillid.online/api/get-announcement/' : 'https://kyusillid.online/api/get-announcementforstudent/'
>>>>>>> 2e1da572e8095c5e3e0537914aab504abc15afc4
  
 


 
 
  const postcomments = async (e)=>{
    
    if (commentinput != undefined){
      await axios.post('http://localhost:8000/api/postcomment/' , 
        {
          "an_id": announcementitem.announcementitem.an_id,
          "acc_id": userinfo.user.acc_id,
          "com_content": commentinput
      }
      )
      .then()
      .catch(error => {
        console.log(error);
      });

      await axios.get(url + currentclass.classes_id)
      .then(response => {
        setannouncementlist(response.data)
       
      })
      .catch(error => {
        console.log(error);
      });

      setcommentinput("");
  
  
      
    }
  }

  const postnow = async ()=>{
  

  await axios.put('http://localhost:8000/api/updateannouncement/' , {"an_id" : announcementitem.announcementitem.an_id}).then(
    forecerefreshHandler()
  ).catch();




  }

  const [editmenu, setedditmenu] = useState(false);



 


  return (
    <div className="announcementpanel borderradius-md background margintop12">
    <div className="announcementheader">
      <div>
          <h5>{announcementitem.announcementitem.an_title}</h5>
      </div>
      <div className='flex'>
        <h6>Created {announcementitem.announcementitem.created_at} by {announcementitem.announcementitem.firstname} {announcementitem.announcementitem.lastname}</h6>
          <div className='marginleft12 relative'> <AiFillEdit onClick={()=>{setedditmenu(!editmenu)}}/>
            {editmenu && <div className='absolute tertiary editmenu  borderradius-md'> <ul><li className='padding12 borderradius-md'>edit</li> <li className='padding12 borderradius-md'>delete</li></ul> </div>  }
          </div>
      </div>
    </div>

    <div className='announcementcontent'>
        {announcementitem.announcementitem.an_content}
    </div>
    <hr className='margintop12'/>

    <div className="announcementcomment relative"> 
      {announcementitem.commentlist !== undefined && announcementitem.commentlist.length>0 &&
      
        <div>
            <h5>Class Comments</h5>
            <div className="">
               {announcementitem.commentlist.map((commentitem , key)=>(
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

      



{announcementitem.announcementitem.schedule < currentdatestamp ?



 <> 
  <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder margintop12' value={commentinput} onChange={(e)=> setcommentinput(e.target.value)} ></textarea>
   
   <div className='sendbutton' onClick={postcomments}>   <MdSend/></div> 

   </>
  
   :
   <div className='flex '>
      <div className='marginleftauto flex'>
     
        <h6>To be posted at :  {announcementitem.announcementitem.schedule}</h6> 
        <button className='commonbutton secondary borderradius-md lighttext' onClick={postnow}> Post now</button>
      
      </div>
    
   </div>

}
     
    </div>

  </div>
    
  )
}

export default Announcementpanel