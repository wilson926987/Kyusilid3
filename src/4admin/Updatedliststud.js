import React, { useContext, useEffect } from 'react'
import { updatelistContext } from '../Globalcontext'

function Updatedliststud() {
    const {updatelist} = useContext(updatelistContext)

 

    return (
      <div className='tertiary borderradius-lg padding12'>
      <h4>Student list Update</h4>
      
  
      {updatelist!= undefined &&
       <div className='margintop12'>
          <h5 className='margintop12'>Added Students</h5>
             <table >
              <thead className='primary'>
              <tr>
                  <th className='padding12'>Student ID</th>
                  <th className='padding12'>Name</th>
              
                 </tr>
              </thead>
              <tbody>
                  {  updatelist.addedstud.map((item, key)=>(
                      <tr key={key}>
                          <td>{item.studnum}</td>
                          <td>{item.studname}</td>
                       
                      </tr>
                  ))}
              </tbody>             
          </table>

          <h5 className='margintop12'>Updated Students</h5>
             <table >
              <thead className='primary'>
              <tr>
                  <th className='padding12'>Student ID</th>
                  <th className='padding12'>Name</th>
              
                 </tr>
              </thead>
              <tbody>
                  {updatelist.updatedstud.map((item, key)=>(
                      <tr key={key}>
                          <td>{item.studnum}</td>
                          <td>{item.studname}</td>
                       
                      </tr>
                  ))}
              </tbody>             
          </table>
  
    
  
       </div>
         
      }
  
  
  </div>
      
    )
}

export default Updatedliststud