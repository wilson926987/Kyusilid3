import React, { useContext, useEffect, useState } from 'react'
import Sourcetopicpanel from './Sourcetopicpanel'
import { modulelistContext } from '../Globalcontext'

function SourceMaterials() {

  const {modulelist} = useContext(modulelistContext);
  useEffect(()=>{
    console.log(modulelist)
  },[modulelist])
  


  return (
    <div className='topicpanel borderradius-md'>
      <div className='flex'>   <h4>Materials for {modulelist.classinfo}</h4> <p className='smallfont marginleftauto'>last updated: November 4</p></div>
  
    
    <ul className='topiclist'>
      
    </ul>


    <div className='col-md-12 margintop12'>
    
      {modulelist.topiclist !== undefined && modulelist.topiclist.map(sourcetopicitem=>(
           
             <Sourcetopicpanel  key={sourcetopicitem.topic_id} sourcetopicitem = {sourcetopicitem}/>
        

      ))}
      
    
    </div>
    
 </div>
  )
}

export default SourceMaterials