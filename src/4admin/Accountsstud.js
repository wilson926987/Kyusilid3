import React from 'react'


function Accountsstud() {
  return (
    <div className='tertiary borderradius-lg padding12'>
     
    
     <div className="flex"> 
      <div>
      <h4>Student Accounts table</h4>
      <p className='smallfont'> last updated : September 2  by Juan dela Cruz</p>
      </div>

      <input type="text" placeholder='Search' className='marginleftauto' />
      </div>

      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
        <th>Student number</th>
        <th>Surname</th>
        <th>First name</th>
        <th>Middle</th>
        <th>Year</th>   
       </thead>
       <tbody>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>    <tr>
          <td>123877</td>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>

       </tbody>
      </table>
    </div>
   
      
    
      </div>
  )
}

export default Accountsstud