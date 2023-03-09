import React, { useContext } from 'react'
import Classpanel from '../components/Classpanel'
import { myArchivedContext , myClasesContext} from '../../Globalcontext'
import { useState } from 'react';

import Archiveselection from '../../2prof/Archiveselection';


function Archived() {
  const {myarchive} = useContext(myArchivedContext);
  const {myclasses} = useContext(myClasesContext);

  const [selectclasses, setselectclasses] = useState(false);
  const [classselection, setclassselection] = useState(
    myclasses.map()


  )


  return (
    <div className='flex '>

      <div className={`archiveselection borderradius-lg tertiary  ${selectclasses && 'archiveselectionactive'}`}>

        <ul>

          {myclasses !== undefined   &&  myclasses.map((item, key)=>(
                   <Archiveselection item= {item}/>
          ))}
          {myarchive !== undefined   &&  myarchive.map((item, key)=>(
                   <Archiveselection item= {item}/>
          ))}




  
    
        </ul>

        <button className='commonbutton lighttext secondary '> Update Archived</button>


      </div>




    <div className='width100'>
      <div className='classcontainer '>
      
      <div className='flex '>
      <h4> Archived classes</h4>
     <div className='marginleftauto'>

     {!selectclasses ?   <button className='commonbutton secondary lighttext' onClick={()=>setselectclasses(true)}> <h4>select classes </h4></button>
      :<button className='commonbutton secondary lighttext' onClick={()=>{setselectclasses(false)}}> <h4> Cancel </h4></button>}
    
     </div>
    
    </div>

   

        <div className="row">

          {myarchive !== undefined && myarchive.map((element, key)=>(
              <Classpanel  key ={key} classitem = {element}/> 

          ))}
           
      
            
        </div>
      </div></div>

    </div>
  )
}

export default Archived