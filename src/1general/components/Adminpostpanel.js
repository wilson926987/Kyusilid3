import React from 'react'
import {HiSpeakerphone} from 'react-icons/hi'
import Avatar from '../../assets/images/avatar.jpg'

function Adminpostpanel() {
  return (
    <div className='adminpostpanel borderradius-md'>
      <div className='adminposticons'>
        <div>
            <HiSpeakerphone />
        </div>
        <div>
            <img src={Avatar} alt="" />
        </div>
        
      </div>
      <div>
          <div className="adminposttitle">
                <h5>Admin Juan delaCruz</h5>
                <p>posted on December 25, 2022</p>
          </div>

          <div className='adminpostcontent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium velit officiis placeat maiores iure dolores blanditiis cumque itaque veritatis!</p>
          </div>

          <div className="adminpostfooter">
            
          </div>
      </div>
    </div>
  )
}

export default Adminpostpanel