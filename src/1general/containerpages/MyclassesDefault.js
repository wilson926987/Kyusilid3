import React, { useContext } from 'react'
import Classpanel from '../components/Classpanel'
import { myClasesContext } from '../../Globalcontext'


function MyclassesDefault() {
  const {myclasses} = useContext(myClasesContext);
 
  const tempclass = {
    'classId' : 3,
    'classname' : 'Automata',
    'classSched_from' : '6:00',
    'classSched_to' : '8:00',
    'classDay' : 'Monday',
    'classbanner' : 1,
    'subjectcode' : 'Auto1111',
    'profname' : 'Juan delacruz'
  }




  return (
    <div>
    <div className="col-md-12">
      <div className="classlisttimeline secondary borderradius-lg dbpanelmargin">
      </div>
    </div>


    <h4 className='title'>Upcoming</h4>

    <div className='classcontainer'>
   <div className="row">
        <Classpanel classitem={tempclass}/>
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
      {myclasses.map((item)=>(
        <Classpanel key={item.classId}  classitem ={item}/>
      ))}
       
    </div>
   </div>

    

     
  
    
  
</div>
  )
}

export default MyclassesDefault