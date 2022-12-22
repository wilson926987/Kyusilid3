import React from 'react'
import avatar from '../../assets/images/avatar.jpg'

function Classinfoitem() {
  return (
    <div className='personpanel'>
            <div>
                <img src={avatar} alt="" />
            </div>
            <div className='personpanelcontent'>
                <p>Person name</p>
                <p>Person info</p>
            </div>

    </div>
  )
}

export default Classinfoitem