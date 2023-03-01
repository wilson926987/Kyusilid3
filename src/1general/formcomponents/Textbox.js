import React, { useEffect, useState } from 'react'

function Textbox({value, handleChange , placeholdervalue}) {

const [tempvalue, settempvalue] = useState(value !==undefined ? value : '')
const [focused, setFocused] = useState(false)
const onFocus = () => setFocused(true)
const onBlur = () => setFocused(false) 
useEffect(()=>{
    handleChange(tempvalue)
},[tempvalue])



  return (
 
          <div className='relative'>
            <input type="text" className='commontextbox primaryborder tertiary' defaultValue={tempvalue} onFocus={onFocus} onBlur={onBlur} onChange={(e)=>{settempvalue(e.target.value)}}/>
            <div className={`commontextboxplaceholder tertiary ${focused || tempvalue !== '' ? 'textplaceholder-sm' : 'textplaceholder-lg'}`}>{placeholdervalue}</div>
        </div>
    
  )
}

export default Textbox