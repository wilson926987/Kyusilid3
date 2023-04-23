import React, { useEffect, useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import './formcomponents.css'

function Dropdown({options, menuClass, itemClass, mainClass , controlClass, onChangeHandler, placeholderValue,mainActiveClass, controlActiveClass ,controlCloseClass , disabled = false , defaultValue = undefined }) {
   const [valuetemp, setvalue] = useState(defaultValue);
   const [dropdownopen, setdropdownopen] = useState(false);
   const toggledropdown = ()=>{
    if(disabled=== false){
        setdropdownopen(!dropdownopen)
    }
   }

   useEffect(()=>{
        if(defaultValue !==undefined){
            setvalue(defaultValue)
            onChangeHandler(defaultValue.value)
        }
      
   },[defaultValue])


  return (
    <div className={`${mainClass} " " ${dropdownopen && mainActiveClass }`}>
        <div className={` flex ${controlClass} ' ' ${dropdownopen ? controlActiveClass : controlCloseClass}`} onClick={toggledropdown}>
            {valuetemp!== undefined ? valuetemp.label : placeholderValue !==undefined ? placeholderValue : 'choose option'}
            <AiOutlineCaretDown />
        </div>
       {dropdownopen &&
            <div className={menuClass}>
                {options.map((item, key)=>(
                    <div key={key} className={itemClass} onClick={()=>{onChangeHandler(item.value); setvalue(item); toggledropdown()}}>{item.label}</div>
                ))}
            </div>
       }


    </div>
  )
}

export default Dropdown