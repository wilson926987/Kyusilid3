import React from 'react'
import Multiplechoice from './Multiplechoice'
import SelectMany from './SelectMany'
import Identification from './Identification'
import Quiz from '../../containerpages/Quiz'


function QuizitemContainer({item , handleOptionChange ,handleaddoption, handleDeleteQuestion, handleQuestionChange , handleAnswerChange, handlePointsChange}) {

    
console.log(item);
    const quizoption = [
        {"value" : "Multiplechoice",
        "label": "Multiple choice"},
        {"value" : "Identification",
        "label": "Identification"}
        // {"value" : "Selectmany",
        // "label": "Select Multiple"}
    ]
  return (
    <div className='padding12 borderradius-md col-lg-6'>

    <h1 style={{fontSize:20 }}> {item.questionid}</h1>
         <div className='flex'>
            <input type= "text"
                value={item?.question}
            className='Q commontextbox padding12' placeholder='Enter Question' onChange={e=>{handleQuestionChange(item, e.target.value)}}/>
            <input type="number"
             className="quiz-input-text commontextbox col-lg-2" value={item?.points} onChange={(e) => handlePointsChange(item, e.target.value)} placeholder="Points" />
            <div className='marginleftauto'> 
            <select className='mult commonbutton lighttext secondary'
            onChange={(e)=>{
              
                    handleOptionChange( item, e.target.value);
                
            }} >
                {quizoption.map((item2,key)=>(
                    
                    <option key={key} value={item2.value} selected={item2.value===item.type }>{item2.label}</option>
                    
                ))}
                
            </select>
            </div>
         </div>

         <div className='padding12 '>
         {item.type==='Multiplechoice' ? 
        <Multiplechoice content= {item?.content} item={item} handleaddoption={handleaddoption} handleAnswerChange={handleAnswerChange}/> :
            // item.type ==='Selectmany' ?
            // <SelectMany content= {item.content} item={item} handleaddoption={handleaddoption} handleAnswerChange={handleAnswerChange}/>: 
            <Identification handleAnswerChange={handleAnswerChange} item={item}/>
        
        }
         
         </div>

         <button onClick={()=>{handleDeleteQuestion(item)}} className='commonbutton lighttext secondary'>Delete Question Item</button>
    </div>
  )
}

export default QuizitemContainer