import React, {  useState } from 'react'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'
import  {RiUserSettingsFill} from 'react-icons/ri'
import StudentSelectionitem from './StudentSelectionitem'


function ClassSelectionitem({classitems , handleClassSelection , handlestudentselect ,selectedstudcount , totalstudents}) {

    const [studentlist , setstudentlist] = useState(false)
    const [temp , settemp] = useState()

    const togglestudentlist= ()=>{
      setstudentlist(!studentlist); 
    }

   
 
    const togglecheck= ()=>{
     
   
      studentlist && classitems.selected && setstudentlist(false);
    
      handleClassSelection(classitems);


    }

   

  return (
    <li className='relative'>
     
      <div className='classSelectionitem borderradius-md ' onClick={togglecheck}>
          {classitems.selected ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
        <div className='ellipsis'> 
            <h4 className='ellipsis'>{classitems.classitem.sub_name}</h4>
            <p className='ellipsis'>{classitems.classitem.day_label}</p>
        </div>
      </div>
      
     
      <h5 className=' studentcount flex' onClick={togglestudentlist} > {selectedstudcount + "/" + totalstudents }</h5>

      <RiUserSettingsFill className='studentlistgear' onClick={togglestudentlist}  />
   
    
     
            
          <div className={`createactivitystudentlist tertiary ${studentlist && 'createactivitystudentlist-active' }`}>
              <ul>
                {classitems.studentlist.map((item, key)=>(
                      <StudentSelectionitem key={key}  studitem = {item} handlestudentselect={handlestudentselect}/>
                ))}      
              </ul>
          </div>      
    </li>
  )
}

export default ClassSelectionitem