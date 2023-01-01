import React, { useState } from 'react'

function ClassSelectionitem({classsched1, classname1, ifchecked1}) {
    const [tempcheck, settempcheck] = useState(false)
    const toggletempcheck = ()=>{
        settempcheck(!tempcheck)
    }

  return (
    <li className='classSelectionitem borderradius-md' onClick={toggletempcheck}> 
        <input type="checkbox" name="" id="" checked = {tempcheck}/>
        <div> 
            <h4>{classname1}</h4>
            <p>{classsched1}</p>
        </div>
    </li>
  )
}

export default ClassSelectionitem