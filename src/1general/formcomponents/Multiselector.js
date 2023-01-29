import React, { useEffect, useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'

function Multiselector({options, menuClass, itemClass, mainClass , controlClass, onChangeHandler, placeholderValue,mainActiveClass, controlActiveClass ,controlCloseClass, selectedAndDisabled}) {
  
  const [selecteditems, setselecteditems] = useState(options.map(item=>({
    'selected' : item===selectedAndDisabled ? true : false  ,
     'value' : item

   
  })));

  const[classesselected, setclassesselected] = useState();

  useEffect(()=>{
    let count = 0;
    selecteditems.forEach(temp => {
      if (temp.selected ===true){
        count ++;
      }
    });
    setclassesselected(count)
    onChangeHandler(selecteditems)
 
  },[selecteditems])



   const [dropdownopen, setdropdownopen] = useState(false);
   const toggledropdown = ()=>{
    setdropdownopen(!dropdownopen)
   }

   const togglethisitem= (ett)=>{
    if(ett !=selectedAndDisabled){
      setselecteditems(selecteditems.map(item1=>{
        if(ett=== item1.value){
          return {'selected' : (!item1.selected) , 'value' : item1.value }
        }else{
          return item1
        }
      }
        
      )) 
    }
   
       
   }

  return (
   <>

     <div className={`${mainClass} " " ${dropdownopen && mainActiveClass }`}>
        <div className={` flex ${controlClass} ' ' ${dropdownopen ? controlActiveClass : controlCloseClass}`} onClick={toggledropdown}>
      
            {classesselected} items selected
           
            <AiOutlineCaretDown />
        </div>
       {dropdownopen &&
            <div className={menuClass}>
               {selecteditems.map((optionitem , key) =>(
                <div key={key} className={`flex ${itemClass}`} onClick={()=>{togglethisitem(optionitem.value)}} > 
                 <div className='marginright12'>{optionitem.selected ? <ImCheckboxChecked /> : <ImCheckboxUnchecked/>  } </div >
                <div className='ellipsis '> {optionitem.value.sub_name} <p className='smallfont'> {optionitem.value.day_label}</p></div>
                </div>
               ))}
            </div>
       }
    </div>
   
   
   </>
  )
}

export default Multiselector