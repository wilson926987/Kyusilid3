import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'


function Classpanel() {
  return (
   
    <div className="col-lg-3 classpanel-min">
        <div className='classpanel borderradius-md primary '>
            <div className='classpanelheader secondary'>        
            </div>
            <div className='classpaneltitle'>
                    <div className='classpanelprofile'>
                    <img src={Avatar} alt="" />
                    </div>
                <h4>Class name</h4>
                <div className='classpanelclosed'>
                <h6>Monday</h6>

                </div>
         
                <div className='classpanelopen'>
                    <h5>Subject code</h5>
                    <h5>Prof name</h5>
                    <h5>Schedule</h5>

                </div>
               
                
                </div>
             
             

        </div>
     </div>
  )
}

export default Classpanel