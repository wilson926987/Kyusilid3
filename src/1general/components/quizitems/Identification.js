import React from 'react'

function Identification({handleAnswerChange, item}) {
  return (
    <div>
    <input type="text"  className='commontextbox col-lg-8' onChange={e=>{handleAnswerChange(item, e.target.value)}} placeholder='Enter answer'/>
    </div>
  )
}

export default Identification