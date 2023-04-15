import React, { useEffect, useState } from 'react'


function Multiplechoice({content ,item , handleaddoption , handleAnswerChange}) {

  const addcontent = ()=>{
    const newcontent = content.concat({"value" : "option "+content.length , "index" : content.length})
   handleaddoption(item, newcontent)
  }


  const editcontent =(value, index)=>{
    const newcontent = content.map((item)=>(
      {
      "value" : item.index === index ? value : item.value,
      "index" : item.index
    }
    ))
    handleaddoption(item, newcontent)
  }

  const deletecontent= (delitem)=>{
    const newcontent =content.filter(item=>  delitem.value !== item.value)
    
    handleaddoption(item, newcontent);
  }
 
  return (
    <div>
      <ul className=''>
        {content.map((item, key)=>(
          <li key={key} className="flex width100 ">  <div>
           <label ><input type="text" className='commontextbox' defaultValue={item.value} onChange={(e)=>{editcontent(e.target.value , item.index)}}/></label>
           </div> 
           <div ><button className='secondary commonbutton lighttext' onClick={()=>{deletecontent(item)}}>Delete</button></div></li>
        ))}
        
      
      </ul>

      <select className='secondary commonbutton lighttext primary padding12'  onChange={e=>{handleAnswerChange(item, e.target.value)}}>
            <option value='select answer' >Select Answer</option>
          {content.map((item,key)=>(
            <option key={key} value={item.value}> {item.value}</option>
          ))}
      </select>

      <button className='secondary commonbutton lighttext' onClick={()=>addcontent()}>Add Option</button>



    </div>
  )
}

export default Multiplechoice