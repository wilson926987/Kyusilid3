import React, { useContext, useState } from 'react'
import {FaClipboardList, FaCommentAlt} from 'react-icons/fa'
import {AiFillFile} from 'react-icons/ai'
import {MdSend} from 'react-icons/md'
import Avatar from '../../assets/images/avatar.jpg'
import { userInfoContext } from '../../Globalcontext'

function ActivityItempanel() {
  const {userinfo} = useContext(userInfoContext);
  const [maximized, setmaximized] = useState(false)
  const togglemaximise = ()=>{
    setmaximized(!maximized)
  }

  return (
        <li className={`borderradius-md ${maximized && 'panel-content-active2'}`}>
          <div className={`panel-header ${maximized && ' panelhighlighted'}`} onClick={togglemaximise} >
            <div className='activityicon'>
                <FaClipboardList />
            </div>
            <div className='activityname'>
              <p>Activityname</p> <FaCommentAlt/> <p>6</p>
            </div>
            <div>
              <p>Date posted</p>

              {userinfo.usertype==='prof' ?  <p>12/44 submitted</p> : <p>Due date</p>
             }
   

            </div>
          </div>

         
          <div className={`panel-content borderradius-md ${maximized && 'panel-content-active'}`}>
               {maximized &&
                  <div>
                  <AiFillFile />
                  filename
                </div>
              }       
          </div>
          {maximized &&
                  <div className='activitycommentsection'>
                    <h5>Class comments</h5>
                    <ul className='classcomments'>
                      <li>
                        <div className='commentprofile'>

                        </div>
                        <div className='commentcontent'>
                              <div className='flex'><h5>Student name</h5> <p>date posted</p></div>
                              <div className='commentmessage'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, odio! Est expedita iure eum sint aperiam excepturi, labore at. Enim vitae velit quae impedit modi commodi? Laboriosam, a placeat. Sapiente.
                              </div>

                        </div>
                        

                      </li>
                      <li>
                        <div className='commentprofile'>

                        </div>
                        <div className='commentcontent'>
                              <div className='flex'><h5>Student name</h5> <p>date posted</p></div>
                              <div className='commentmessage'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, odio! Est expedita iure eum sint aperiam excepturi, labore at. Enim vitae velit quae impedit modi commodi? Laboriosam, a placeat. Sapiente.
                              </div>

                        </div>
                        

                      </li>
                      <li>
                        <div className='commentprofile'>

                        </div>
                        <div className='commentcontent'>
                              <div className='flex'><h5>Student name</h5> <p>date posted</p></div>
                              <div className='commentmessage'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, odio! Est expedita iure eum sint aperiam excepturi, labore at. Enim vitae velit quae impedit modi commodi? Laboriosam, a placeat. Sapiente.
                              </div>

                        </div>
                        

                      </li>
               
                    </ul>

                    <div className="announcementcomment"> 
        <textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment'></textarea>
        <div className='sendbutton'>  <MdSend/></div>
      
    </div>
                    

              
                </div>
              }
        


           
            
        </li>
  )
}

export default ActivityItempanel