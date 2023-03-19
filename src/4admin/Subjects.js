import React, { useContext, useEffect, useState } from 'react'

import { subjectlistContext , subjectfilterContext} from '../Globalcontext';

function Subjects() {

  const subjectlist = useContext(subjectlistContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const subjectfilter = useContext(subjectfilterContext);

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(()=>{
      console.log(subjectlist)
  },[])

  useEffect(()=>{
    console.log(subjectfilter.subjectfilter)
  },[subjectfilter])

 

  return (
    <div className='tertiary borderradius-lg padding12'>
     
     <div className="flex"> 
      <div>
      <h4>Subjects table</h4>
      <p className='smallfont'> Last Updated :</p>
      </div>

<div className='search'>
      <input
           type="text"
            placeholder="Subject Code"
            onChange={handleSearch}
/>
</div>
</div>


      <div className="persontable margintop12 width100">
      <table className='width100' cellSpacing={0}>
       <thead className='primary'>
        <th>Units</th>
        <th>Year Level</th>
        <th>Subject Code</th>
        <th>Subject Name</th>

  
       </thead>
       <tbody>
       {subjectlist.subjectlist!== undefined &&
  <>
    {subjectlist.subjectlist.filter(itemtemp=>
      itemtemp.yearlvl == subjectfilter.subjectfilter &&
      itemtemp.sub_code.toLowerCase().includes(searchTerm.toLowerCase())
    ).map((item, key)=>(
      <tr key={key}>
        <td>{item.units}</td>
        <td>{item.yearlvl}</td>
        <td>{item.sub_code}</td>
        <td>{item.sub_name}</td>
        <td></td>
        <td></td>
      </tr>
    ))}
  </>
}

       </tbody>
     
      </table>
    </div>
    
      
    
      </div>
  )
}

export default Subjects