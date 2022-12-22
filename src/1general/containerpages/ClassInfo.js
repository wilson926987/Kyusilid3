import React from 'react'
import Classinfoitem from '../components/Classinfoitem'

function ClassInfo() {
  return (
    <div>

      <div className="persontable">
        <div className='classinfotitle'>
            <h4>Professors</h4>
      
        </div>

        
        <Classinfoitem />
        <Classinfoitem />

      </div>


        <div className="persontable">
          <div className='classinfotitle'>
            <div>
                <h4>Students</h4>        
                <h6>## total students#</h6>
            </div>
          
            <input type="text"  placeholder='search'/>
          
          </div>
  
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
        <Classinfoitem />
    
        </div>
    </div>
  )
}

export default ClassInfo