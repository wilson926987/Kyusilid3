import React, {  useState  } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'


function StudentSelectionitem({studitem , handlestudentselect}) {
  


   
    
  return (
    <li className='relative'>
                    <div className='studentSelectionitem borderradius-md' onClick={()=>{handlestudentselect(studitem)}}>
                    {studitem.selected ? <ImCheckboxChecked/>  : <ImCheckboxUnchecked/>} <h5> {studitem.studentitem.lastname}, {studitem.studentitem.firstname} {studitem.studentitem.middle}</h5>
                    </div>

        </li>
  )
}

export default StudentSelectionitem