import React, { useEffect, useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import './formcomponents.css'

function Dropdown({options, menuClass, itemClass, mainClass , controlClass, onChangeHandler, placeholderValue,mainActiveClass, controlActiveClass ,controlCloseClass}) {
   const [valuetemp, setvalue] = useState();
   const [dropdownopen, setdropdownopen] = useState(false);
   const toggledropdown = ()=>{
    setdropdownopen(!dropdownopen)
   }

 
 

  return (
    <div className={`${mainClass} " " ${dropdownopen && mainActiveClass }`}>
        <div className={` flex ${controlClass} ' ' ${dropdownopen ? controlActiveClass : controlCloseClass}`} onClick={toggledropdown}>
            {valuetemp!== undefined ? valuetemp : placeholderValue !==undefined ? placeholderValue : 'choose option'}
            <AiOutlineCaretDown />
        </div>
       {dropdownopen &&
            <div className={menuClass}>
                {options.map((item, key)=>(
                    <div key={key} className={itemClass} onClick={()=>{onChangeHandler(item); setvalue(item); toggledropdown()}}>{item}</div>
                ))}
            </div>
       }


    </div>
  )
}

export default Dropdown