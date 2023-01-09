import React, { useState } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'


function StudentSelectionitem() {
    const [checkboxcheked, setcheckbox] = useState(true);
    const togglecheckbox= ()=>{
        setcheckbox(!checkboxcheked)
    }
  return (
    <li className='relative'>
                    <div className='studentSelectionitem borderradius-md' onClick={togglecheckbox}>
                    {checkboxcheked ? <ImCheckboxChecked/>  : <ImCheckboxUnchecked/>} <h5>Student name 1</h5>
                    </div>

        </li>
  )
}

export default StudentSelectionitem