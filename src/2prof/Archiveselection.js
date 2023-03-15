import React, { useState } from 'react'
import {ImCheckboxUnchecked ,ImCheckboxChecked} from 'react-icons/im'

function Archiveselection({item}) {

    const [selected, setselected] = useState(false);

  return (
    <li className=' flex  padding12' onClick={()=>{setselected(!selected)}}> 

    <div > {selected ? < ImCheckboxChecked />: <ImCheckboxUnchecked /> }</div>

    <div  className='marginleft12'> 
    <div>{item.sub_name}</div>
    <p> {item.yearlvl}{item.sec_name}</p>
    </div>

    
  </li>
  )
}

export default Archiveselection