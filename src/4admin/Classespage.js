import React from 'react'
import { useNavigate } from 'react-router-dom'


function Classespage() {
  const navigate = useNavigate()

  return (
    <div className='tertiary borderradius-lg padding12'>
     
     <div className="flex"> 
      <div>
      <h4>Classes table</h4>
      <p className='smallfont'> last updated : September 2  by Juan dela Cruz</p>
      </div>

      <input type="text" placeholder='Search' className='marginleftauto' />
      </div>

      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
      
        <th>Class Id</th>
        <th>Year and Section</th>
        <th>Subject</th>
        <th>Professor</th>
        <th>Schedule</th>
        <th>Number of Students</th>
        <th></th>
        
       </thead>
       <tbody>
        <tr>
          <td>1</td>
          <td>SBIT- 4J</td>
          <td>Practicum</td>
          <td>juan Dela Cruz</td>
          <td>Schedule</td>
          <td>40</td>
          <td> <button className="secondary lighttext commonbutton" onClick={()=>{navigate('/kyusilidAdmin/department/sections/samplesection')}}>View Class</button></td>
        </tr>
       
       </tbody>

     
      </table>
    </div>
    
      
    
      </div>
  )
 


}

export default Classespage