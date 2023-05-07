import React, { useEffect, useState } from 'react'


function Multiplechoice({content = [] ,item , handleaddoption , handleAnswerChange}) {
  useEffect(() => {
    if (content.length === 0) {
      // Set up default options if no options have been provided
      const defaultOptions = [        { value: 'Option 0', index: 0 },        { value: 'Option 1', index: 1 },        { value: 'Option 2', index: 2 },        { value: 'Option 3', index: 3 },      ];
      handleaddoption(item, defaultOptions);
    }
  }, []);

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
        {content?.map((item, key)=>(
          <li key={key} className="flex width100 ">  <div>
           <label ><input type="text" className='Q commontextbox' value={item.value} onChange={(e)=>{editcontent(e.target.value , item.index)}} required/></label>
           </div>
           
           <div className='Qbtn'><button className='secondary commonbutton lighttext' onClick={()=>{deletecontent(item)}}>Delete</button></div></li>
        ))}
        
      
      </ul>

      <select required className='secondary commonbutton lighttext primary padding12'
            value={item?.answer}
        
      onChange={e=>{handleAnswerChange(item, e.target.value)}} >
            <option value="" hidden>Select Correct Answer</option>
          {content?.map((item,key)=>(
            <option  key={key} value={item.value}> {item.value}  </option>
          ))}
      </select>

      <button className='secondary commonbutton lighttext' onClick={addcontent}>Add Option </button>



    </div>
  )
}

export default Multiplechoice