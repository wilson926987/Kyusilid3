import React, { useContext, useState, useEffect } from 'react'
import Classpanel from '../components/Classpanel'
import { myClasesContext } from '../../Globalcontext'


function MyclassesDefault() {
  const {myclasses} = useContext(myClasesContext);

      
  var days = {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6};
  
    function gettheday(day) {
      return days[day];
  }

    const [upcoming, setupcoming] = useState(
   
    );


    useEffect(()=>{
      
 

       
    },[])
   
   


 

  return (
    <div>
    <div className="col-md-12">
      <div className="classlisttimeline secondary borderradius-lg dbpanelmargin">
      </div>
    </div>


    <h4 className='title'>Upcoming</h4>
    

    <div className='classcontainer'>
   <div className="row">


 
  

    </div>
   </div>

   

    <h4 className='title'>All Classes</h4>

   <div className='classcontainer'>
   <div className="row">
   {myclasses!==undefined &&
       myclasses.map((item, key)=>(
        <Classpanel key={key}  classitem ={item}/>
      ))}
       
    </div>
   </div>

    

     
  
    
  
</div>
  )
}

export default MyclassesDefault