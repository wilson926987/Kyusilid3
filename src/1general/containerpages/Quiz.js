import React, { useState } from 'react'
import Questionitem from '../../Quizitems/Questionitem'

function Quiz() {

  const [questionlist, setquestionlist] = useState(
      [
        {
          "questionname" : "sample question 1", "question_type" : "multiplechoice" , "correct_answer" : "tamang sagot"
      
        },
        {
          "questionname" : "sample question 2", "question_type" : "identification" , "correct_answer" : "tamang sagot2"
      
        }
        ,
        {
          "questionname" : "sample question 3", "question_type" : "multiplechoice" , "correct_answer" : "tamang sagot3"
      
        }
        ,
        {
          "questionname" : "sample question 4", "question_type" : "identification" , "correct_answer" : "tamang sagot4"
      
        }
      ]

  )  
  return (
    <div>


      {questionlist.map((item, key)=>(
        <div key={key} className= 'margintop12'> 
        <Questionitem questioninfo ={item}/>
        


        </div>
      ))}
    
    </div>
  )
}

export default Quiz