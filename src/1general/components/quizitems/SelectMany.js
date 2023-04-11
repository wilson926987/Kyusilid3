import React from 'react'

function SelectMany({content, item, handleaddoption, handleAnswerChange}) {

    const addcontent = ()=>{
        const newcontent = content.concat({"value" : "option "+content.length , "index" : content.length})
       handleaddoption(item, newcontent)
      }
    
      const deletecontent= (delitem)=>{
        const newcontent =content.filter(item=>  delitem.value !== item.value)
        console.log(newcontent)
        handleaddoption(item, newcontent);
      }
 

      return (
        <div>
          <ul className=''>
            {content.map((item, key)=>(
              <li key={key} className="flex width100 ">  <div>
               <label ><input type="text" className='commontextbox' defaultValue={item.value} onChange={e=>handleAnswerChange(item, e.target.value)}/></label>
               </div> 
               <div ><button className='secondary commonbutton lighttext' onClick={()=>{deletecontent(item)}}>delete option</button></div>
               <div> <input type="checkbox"/></div>
               </li>
            ))}
          
          </ul>
    
       
    
          <button className='secondary commonbutton lighttext' onClick={addcontent}>add option</button>
    
    
    
        </div>
      )
}

export default SelectMany