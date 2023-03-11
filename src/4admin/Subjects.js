import React, { useEffect, useState } from 'react'
import axios from 'axios';



function Subjects() {
 
  const [subject, setsubjects] = useState();

  useEffect(()=>{
    axios.get('https:api.kyusilid.online/getallsubjects/1').then(result=>{
      setsubjects(result.data)
    }).catch()
  },[])

  return (
    <div className='tertiary borderradius-lg padding12'>
     
     <div className="flex"> 
      <div>
      <h4>Subjects table</h4>
      <p className='smallfont'> last updated :</p>
      </div>

      <input type="text" placeholder='Search' className='marginleftauto' />
      </div>

      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
        <th>Year</th>
        <th>Subject code</th>
        <th>Subject name</th>
        <th>Classes</th>
        <th></th>
        
       </thead>
       <tbody>

        {subject !== undefined  && subject.map((item, key)=>(
            <tr key= {key}>

        
            <td>{item.units}</td>
            <td>{item.sub_code}</td>
            <td>{item.sub_name}</td>
            <td></td>
            <td>
              {/* <button className='commonbutton lighttext secondary' onClick={ ()=>{navigate('/kyusilidAdmin/department/sections')}}>View Classes</button>
               */}</td>
          </tr>

        ))}
      
        
       </tbody>
     
      </table>
    </div>
    
      
    
      </div>
  )
}

export default Subjects