import React, { useState } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'
import  {RiUserSettingsFill} from 'react-icons/ri'
import StudentSelectionitem from './StudentSelectionitem'

function ClassSelectionitem({classsched1, classname1, ifchecked1}) {
    const [tempcheck, settempcheck] = useState(false)
    const [studentlist , setstudentlist] = useState(false)

    const togglestudentlist= ()=>{
      setstudentlist(!studentlist);
    
    }
 
    const togglecheck= ()=>{
      settempcheck(!tempcheck)
      studentlist && tempcheck && setstudentlist(false);
    }

  return (
    <li className='relative'>
      <div className='classSelectionitem borderradius-md ' onClick={togglecheck}>
          {tempcheck ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
        <div> 
            <h4>{classname1}</h4>
            <p>{classsched1}</p>
        </div>
      </div>

     <RiUserSettingsFill className='studentlistgear' onClick={togglestudentlist}/>
        
      
      
          <div className={`createactivitystudentlist tertiary ${studentlist && 'createactivitystudentlist-active' }`}>

              <ul>
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
                <StudentSelectionitem />
              </ul>


          </div>
        
        
       
    </li>
  )
}

export default ClassSelectionitem