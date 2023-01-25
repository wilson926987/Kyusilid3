import React, { useContext } from 'react'
import Classpanel from '../components/Classpanel'
import { myClasesContext } from '../../Globalcontext'


function MyclassesDefault() {
  const {myclasses} = useContext(myClasesContext);
  
   
    var curday = new Date().getDay() -1;
    const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday', 'Sunday'];


    const upcomingclass= myclasses.map(temp=>{
      
    })


 

  return (
    <div>
    <div className="col-md-12">
      <div className="classlisttimeline secondary borderradius-lg dbpanelmargin">
      </div>
    </div>


    <h4 className='title'>Upcoming</h4>
    

    <div className='classcontainer'>
   <div className="row">
   {myclasses.filter(temp=>{
     return dayList[curday] === temp.classDay;
   }).map((item)=>(
        <Classpanel key={item.classId}  classitem ={item}/>
      ))}
  

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