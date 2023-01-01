import React, { useState } from 'react'
import Topicpanel from '../1general/components/Topicpanel'
import {FaPlus} from 'react-icons/fa'

function ClassModules() {
  const [createnewopen, setcreatenew] = useState();

  return (
    <div>
       <h4>Classwork</h4> 
  


        <div className='col-md-12 margintop12'>

            <Topicpanel />
            <Topicpanel />
            <Topicpanel />
        </div>
        

      

    </div>
  )
}

export default ClassModules