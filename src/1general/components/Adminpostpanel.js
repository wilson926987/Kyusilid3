import React from 'react'
import {HiSpeakerphone} from 'react-icons/hi'
import Avatar from '../../assets/images/avatar.jpg'
import Swal from 'sweetalert2'



function Adminpostpanel({item}) {

  const fire= (e)=>{
     
    Swal.fire({
    
   
      text: e
    
    })
  }
  return (
    <div className='adminpostpanel borderradius-md' onClick={()=>{fire(item.announcement_content)}}>
      <div className='adminposticons'>
        <div>
            <HiSpeakerphone />
        </div>
        <div>
            <img src={Avatar} alt="" />
        </div>
        
      </div>
      <div>
          
                <h5>{item.title} {item.firstname} {item.middle} {item.lastname} {item.suffix}</h5>
                <p className='smallfont'>posted on {item.created_at}</p>
               
      

          <div className='adminpostcontent margintop4'>
            <p>{item.announcement_content}</p>
          </div>

    
      </div>
    </div>
  )
}

export default Adminpostpanel