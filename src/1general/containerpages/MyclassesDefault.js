import React from 'react'
import Classpanel from '../components/Classpanel'


function MyclassesDefault() {
  return (
    <div>
    <div className="col-md-12">
      <div className="classlisttimeline secondary borderradius-lg dbpanelmargin">
      </div>
    </div>


    <h4 className='title'>Upcoming</h4>

    <div className='classcontainer'>
   <div className="row">
        <Classpanel></Classpanel>

        <div className="col-lg-3 classpanel-min">
          <div className='classpanelsched' >
            <div className='borderradius-md'>
              <h4>Monday , 4:00 am</h4>
              <button className='primary'>View Schedule</button>
            </div>
          </div>
        </div>
  

    </div>
   </div>

   

    <h4 className='title'>All Classes</h4>

   <div className='classcontainer'>
   <div className="row">
        <Classpanel></Classpanel>
        <Classpanel></Classpanel>
        <Classpanel></Classpanel><Classpanel></Classpanel>
    </div>
   </div>

    

     
  
    
  
</div>
  )
}

export default MyclassesDefault