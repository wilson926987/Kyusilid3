import React, { useState } from 'react'
import {FaClipboardList} from 'react-icons/fa'
import {AiFillFile} from 'react-icons/ai'

function ActivityItempanel() {

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
            <div>
              <p>Activityname</p>
            </div>
            <div>
              <p>Date posted</p>
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
           
            
        </li>
  )
}

export default ActivityItempanel