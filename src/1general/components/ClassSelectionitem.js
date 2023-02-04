import React, { useEffect, useState } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'
import  {RiUserSettingsFill} from 'react-icons/ri'
import StudentSelectionitem from './StudentSelectionitem'

function ClassSelectionitem({classitems}) {
    const [tempcheck, settempcheck] = useState(false)
    const [studentlist , setstudentlist] = useState(false)

    const togglestudentlist= ()=>{
      setstudentlist(!studentlist);
    
    }
 
    const togglecheck= ()=>{
      settempcheck(!tempcheck)
      studentlist && tempcheck && setstudentlist(false);
    }

    useEffect(()=>{
      console.log('class sample : ' + classitems.classitem.sub_name)
      console.log(classitems.studentlist)
    },[])

  return (
    <li className='relative'>
      <div className='classSelectionitem borderradius-md ' onClick={togglecheck}>
          {tempcheck ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
        <div className='ellipsis'> 
            <h4 className='ellipsis'>{classitems.classitem.sub_name}</h4>
            <p className='ellipsis'>{classitems.classitem.day_label}</p>
        </div>
      </div>

     <RiUserSettingsFill className='studentlistgear' onClick={togglestudentlist}/>
        
      
      
          <div className={`createactivitystudentlist tertiary ${studentlist && 'createactivitystudentlist-active' }`}>

              <ul>
                {classitems.studentlist.map((item, key)=>(
                      <StudentSelectionitem key={key}  studitem = {item}/>
                ))}
             
            
              </ul>


          </div>
        
        
       
    </li>
  )
}

export default ClassSelectionitem