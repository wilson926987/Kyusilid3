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
                <h4>{classitem.classname}</h4>
                <div className='classpanelclosed'>
                <h6>{classitem.classDay}</h6>

                </div>
         
                <div className='classpanelopen'>
                    <h5>{classitem.subjectcode}</h5>
                    <h5>{classitem.profname}</h5>
                    <h5>{classitem.classDay} {classitem.classSched_from} - {classitem.classSched_to}</h5>

                </div>
               
                
                </div>
             
             

        </div>
     </div>
  )
}

export default Classpanel