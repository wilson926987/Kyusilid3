import React, { useState } from 'react'
import Sourcetopicpanel from './Sourcetopicpanel'

function SourceMaterials() {

  const [sourcetopiclist , setsourcetopiclist] = useState([   
    {'sourcetopicID' : 1,
      'sourcetopicname' : 'Week 1'
    },
    {'sourcetopicID' : 2,
    'sourcetopicname' : 'Week 2'
    },
    {'sourcetopicID' : 3,
    'sourcetopicname' : 'Week 3'
    },
    {'sourcetopicID' : 4,
    'sourcetopicname' : 'Week 4'
}
  ])


  return (
    <div className='topicpanel borderradius-md'>
      <div className='flex'>   <h4>Materials for ##subject_name#</h4> <p className='smallfont marginleftauto'>last updated: November 4</p></div>
  
    
    <ul className='topiclist'>
      
    </ul>


    <div className='col-md-12 margintop12'>
    
      {sourcetopiclist.map(sourcetopicitem=>(
           
             <Sourcetopicpanel  key={sourcetopicitem.sourcetopicID} sourcetopicitem = {sourcetopicitem}/>
        

      ))}
      
    
    </div>
    
 </div>
  )
}

export default SourceMaterials