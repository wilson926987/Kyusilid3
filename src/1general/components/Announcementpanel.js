import React, { useContext, useState } from 'react'
import {MdSend} from 'react-icons/md'
import axios from 'axios'
import { useEffect } from 'react';
import { announcementlistContext, userInfoContext , currentclassContext , forcerefreshContext } from '../../Globalcontext';
import {AiFillEdit} from 'react-icons/ai'
import Swal from 'sweetalert2';


function Announcementpanel({announcementitem , forcerefresh}) {

  const  [currentdatestamp , setdatestamp] = useState();
  const [commentinput, setcommentinput] = useState();
  const {userinfo} = useContext(userInfoContext);
  const {setannouncementlist} = useContext(announcementlistContext);
  const {currentclass} = useContext(currentclassContext);
  const {forecerefreshHandler} = useContext(forcerefreshContext);

  const url = userinfo.user.usertype ==='prof' ?  'https://api.kyusillid.online/api/get-announcement/' : 'https://api.kyusillid.online/api/get-announcementforstudent/'
  

  useEffect(()=>{
    setdatestamp(new Date().toISOString().slice(0, 19).replace('T', ' '));
    
  },[])
 
 
  const postcomments = async (e)=>{
    
    if (commentinput != undefined){
      await axios.post('https://api.kyusillid.online/api/postcomment' , 
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

  const [forcetrue, setforcetrue] = useState(false)

  const postnow = async ()=>{
    setforcetrue(true)
  

  await axios.put('https://api.kyusillid.online/api/updateannouncement' , {"an_id" : announcementitem.announcementitem.an_id}).then(
    forecerefreshHandler()
  ).catch();

  }

  const [editmenu, setedditmenu] = useState(false);

  const confirmdelete = async (e)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('https://api.kyusillid.online/api/deleteannouncement/' + e).then(
          forecerefreshHandler()
        ).catch();
  
        axios.get(url + currentclass.classes_id)
        .then(response => {
          setannouncementlist(response.data)
         
        })
        .catch(error => {
          console.log(error);
        });

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      
       
      }
    })
 
  }


 const localise = (iso)=>{
 
  const date = new Date(`${iso}Z`);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = date.toLocaleString(undefined, options);
  return formattedDate;
 }


  const deletecomment = async(e)=>{

    if(window.confirm('delete this post?') === true){
      await axios.delete('https://api.kyusillid.online/api/deleteannouncementcomment/' + e).then().catch();
      await axios.get(url + currentclass.classes_id)
      .then(response => {
        setannouncementlist(response.data)
       
      })
      .catch(error => {
        console.log(error);
      });

    }
   
  }



  return (

    <div>
    
       
          {announcementitem !== undefined ? 
            <div className="announcementpanel borderradius-md background margintop12">
            
            <div className="relative padding12">
              
                 <h5 className='wrap marginright25'>{ announcementitem !== undefined  && announcementitem.announcementitem.an_title}</h5>

           
            
                <div className='flex'>
                  <h6 className='smallfont marginright25 wrap'>Created: {announcementitem !== undefined  && localise(announcementitem.announcementitem.created_at)} by {announcementitem !== undefined  && announcementitem.announcementitem.firstname} { announcementitem !== undefined  && announcementitem.announcementitem.lastname}</h6>
                
                </div>
             

              {userinfo.user.usertype ==='prof' &&  <div className='marginleft12 editannounce background borderradius-lg'> <AiFillEdit onClick={()=>{setedditmenu(!editmenu)}}/>
                      {editmenu && <div className='absolute tertiary editmenu  borderradius-md marginleftauto'> <ul><li className='padding12 borderradius-md' onClick={()=>{ setedditmenu(!editmenu) ;confirmdelete(announcementitem.announcementitem.an_id) }}>delete</li></ul> </div>  }
                    </div>}

             
            </div>

          
        
            <div className='announcementcontent wrap'>
                {announcementitem !== undefined  && announcementitem.announcementitem.an_content}
               
              
            </div>
            <hr className='margintop12'/>
        
            <div className="announcementcomment relative"> 
              {announcementitem !== undefined  && announcementitem.commentlist !== undefined && announcementitem.commentlist.length>0 &&
              
                <div>
                    <h5>Class Comments</h5>
                    <div className="">
                       {announcementitem !== undefined  && announcementitem.commentlist.map((commentitem , key)=>(
                         <div key={key} className='padding12'>
                            <div className="flex commentheader">
                              <h5>{commentitem.title + " " + commentitem.firstname + ' ' + commentitem.lastname + ' '  + commentitem.suffix }</h5>

                              
                              {commentitem.acc_id === userinfo.user.acc_id &&
                              <button className="commonbutton secondary lighttext commentbutton" onClick={()=>{deletecomment(commentitem.com_id)}}>delete</button>}
                              <p className='smallfont marginleftauto'>{localise(commentitem.date_posted)}</p>
                            </div>
                            <div className='ellipsis '>
                                  {commentitem.com_content}
                            </div>
                   
                         </div>
                       ))}
                          
                    </div>
                </div>
              }
        
              
        
        
        
        {(announcementitem !== undefined  && announcementitem.announcementitem.schedule <= currentdatestamp) || forcetrue ?
        
        
        
         <div> 
          <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea tertiary primaryborder margintop12' value={commentinput} onChange={(e)=> setcommentinput(e.target.value)} ></textarea>
           
           <div className='sendbutton' onClick={postcomments}>   <MdSend/></div> 
        
           </div>
          
           :
           <div className='flex '>
              <div className='marginleftauto flex'>
             
                <h6>To be posted at :  {announcementitem !== undefined  && localise(announcementitem.announcementitem.schedule)}</h6> 
                <button className='commonbutton secondary borderradius-md lighttext' onClick={postnow}> Post now</button>
              
    
              </div>
            
           </div>
        
        }
             
            </div>
        
          </div>
          : <div></div> }
    </div>


  
    
  )
}

export default Announcementpanel