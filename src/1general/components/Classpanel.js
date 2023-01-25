import React from 'react'
import Avatar from '../../assets/images/avatar.jpg'


function Classpanel({classitem}) {
  return (
   
    <div className="col-lg-3 classpanel-min">
        <div className='classpanel borderradius-md primary '>
            <div className='classpanelheader secondary'>        
            </div>
            <div className='classpaneltitle'>
                    <div className='classpanelprofile'>
                    <img src={Avatar} alt="" />
                    </div>
                <h4>{classitem.sub_name}</h4>
                <div className='classpanelclosed'>
                <h6>{classitem.classDay}</h6>

                </div>
         
                <div className='classpanelopen'>
                    <h5>{classitem.sub_code}</h5>
                    <h5>{classitem.pf_firstname} {classitem.pf_lastname}</h5>
                    <h5>{classitem.day_label} {classitem.sched_from} - {classitem.sched_to}</h5>

                </div>
               
                
                </div>
             
             

        </div>
     </div>
  )
}

export default Classpanel