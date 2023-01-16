import React, { useEffect, useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {ImCheckboxUnchecked , ImCheckboxChecked} from 'react-icons/im'

function Multiselector({options, menuClass, itemClass, mainClass , controlClass, onChangeHandler, placeholderValue,mainActiveClass, controlActiveClass ,controlCloseClass}) {
  const [selecteditems, setselecteditems] = useState(options.map(item=>({
    'selected' : false , 'value' : item  
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
    onChangeHandler(classesselected)
 
  },[selecteditems])


   const [dropdownopen, setdropdownopen] = useState(false);
   const toggledropdown = ()=>{
    setdropdownopen(!dropdownopen)
   }

   const togglethisitem= (ett)=>{
   
    setselecteditems(selecteditems.map(item=>{
      if(ett=== item.value){
        return {'selected' : (!item.selected) , 'value' : item.value}
      }else{
        return item
      }
    }
      
    ))
        
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
                <div key={key} className={`flex ${itemClass}`} onClick={()=>{togglethisitem(optionitem.value)}}>  <div className='marginright12'>{optionitem.selected ? <ImCheckboxChecked /> : <ImCheckboxUnchecked/>  } </div> {optionitem.value} </div>
               ))}
            </div>
       }
    </div>
   
   
   </>
  )
}

export default Multiselector