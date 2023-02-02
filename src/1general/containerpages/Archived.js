import React, { useContext } from 'react'
import Classpanel from '../components/Classpanel'
import { myArchivedContext } from '../../Globalcontext'

function Archived() {
  const {myarchive} = useContext(myArchivedContext);

  return (
    <div>

    <div className='classcontainer'>
        <div className="row">

          {myarchive !== undefined && myarchive.map((element, key)=>(
              <Classpanel  key ={key} classitem = {element}/> 

          ))}
           
      
            
        </div>
      </div>

    </div>
  )
}

export default Archived