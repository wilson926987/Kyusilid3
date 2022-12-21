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

    <Classpanel></Classpanel>

    <h4 className='title'>All Classes</h4>

   <div className='classcontainer'>
   <div className="row">
        <Classpanel></Classpanel>
        <Classpanel></Classpanel>
        <Classpanel></Classpanel><Classpanel></Classpanel>
        
      
        <div className="col-lg-3">
          <div className='classpanel borderradius-md primary '>

          </div>
        </div>

    </div>
   </div>

    

     
  
    
  
</div>
  )
}

export default MyclassesDefault