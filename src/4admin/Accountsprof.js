import React from 'react'


function Accountsprof() {
  return (
    <div className='tertiary borderradius-lg padding12'>
     
     <div className="flex"> 
      <div>
      <h4>Professor Accounts table</h4>
      <p className='smallfont'> last updated : September 2  by Juan dela Cruz</p>
      </div>

      <input type="text" placeholder='Search' className='marginleftauto' />
      </div>


      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
      
        <th>Surname</th>
        <th>First name</th>
        <th>Middle</th>
        
       </thead>
       <tbody>
        <tr>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>Jhon</td>
          <td>X</td>
        </tr>
        <tr>
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

export default Accountsprof