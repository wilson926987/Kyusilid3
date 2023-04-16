import React from 'react'
import avatar from '../../assets/images/avatar.jpg'


function Classinfoitem({personitem}) {
  return (
    <div className='personpanel'>
            <div>
                <img src={avatar} alt="" />
            </div>
            <div className='personpanelcontent'>
                <p>{personitem.title} {personitem.firstname} {personitem.lastname} {personitem.middle} {personitem.suffix} </p>
                <p> {personitem.usertype === 'prof' ? personitem.dep_name : personitem.stud_no }</p>
            </div>

    </div>
  )
}

export default Classinfoitem