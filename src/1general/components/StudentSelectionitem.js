import React, { useState } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'


function StudentSelectionitem({studitem}) {
    const [checkboxcheked, setcheckbox] = useState(true);
    const togglecheckbox= ()=>{
        setcheckbox(!checkboxcheked)
    }
    
  return (
    <li className='relative'>
                    <div className='studentSelectionitem borderradius-md' onClick={togglecheckbox}>
                    {checkboxcheked ? <ImCheckboxChecked/>  : <ImCheckboxUnchecked/>} <h5> {studitem.lastname}, {studitem.firstname} {studitem.middle}</h5>
                    </div>

        </li>
  )
}

export default StudentSelectionitem