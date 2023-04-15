
import React, { useState } from "react";
import Dropdown from "../formcomponents/Dropdown";
import QuizitemContainer from "../components/quizitems/QuizitemContainer";
import axios from "axios";

function Quiz() {
  
  const [title, settitle] = useState();
  const [description, setdescrtiption] = useState();
  
const [questions, setQuestions] = useState([
    { "questionid": 1, "question": "", "points": 1, "type": "Multiplechoice", "content":[], "answer": "" }
  ]);
 
  const handleQuizSubmit = () => {
   
    const temp = {
      "title" : title,
      "description" : description,
      "questions" : questions
    }

    // console.log(JSON.stringify(temp));
  

    axios.post('https://api.kyusillid.online/api/quiz-question', temp).then((response) => {
      console.log(response.data);
    }).catch();
  };

 

  

  const handleQuestionChange = (item, questiontemp) => {
    setQuestions(questions.map((item2)=>({
      "question": item2.questionid=== item.questionid ? questiontemp : item2.question,
      'points' : item2.points,
      "type" : item2.type,
      "content": item2.content,
      "answer": item2.answer,
      "questionid": item2.questionid
    })))
  };

  const handleOptionChange = (item, typetemp) => {
    setQuestions(questions.map((item2)=>({
      "question": item2.question,
      'points' : item2.points,
      "type" : item2.questionid === item.questionid ? typetemp : item2.type ,
      "content": item2.content,
      "answer": item2.answer,
      "questionid": item2.questionid
    })))
  };

  const handleAnswerChange = (item, answertemp) => {
    setQuestions(questions.map((item2)=>({
      "question": item2.question,
      'points' : item2.points,
      "type" : item2.type ,
      "content": item2.content,
      "answer": item2.questionid === item.questionid ? answertemp : item2.answer,
      "questionid": item2.questionid
    })))
  };


  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { "questionid": questions.length+1, "question": "", "points": 1, "type": "Multiplechoice", "content":[], "answer": "" }
  
    ]);
  };

  const handleDeleteQuestion = (item) => {
    const updatedItems = questions.filter(item2 => item2.questionid !== item.questionid);
    setQuestions(updatedItems);


   
  };

  const handleaddoption= ( item , content)=>{
    

    setQuestions(questions.map(item2=>({
      "question": item2.question,
      'points' : item2.points,
      "type" :  item2.type,
      "content": item2.questionid===item.questionid? content : item2.content,
      "answer": item2.answer,
      "questionid": item2.questionid
    })))

    
 
  }


  const handleDeleteOption = (index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };
  
  

return(
  <div>
  
        <header className="Quiz-Header primary margintop12">
        
            <h1 className='quiz-text'>Form Title</h1>
            <input type="text" className="quiz-input-text commontextbox col-lg-4"   defaultValue={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter Title"/> 
            <br></br>
            <h1 className='quiz-text'>Form Description</h1>
            <input type="text" className="quiz-input-text commontextbox col-lg-4" defaultValue={description} onChange={e=>setdescrtiption(e.target.value)} placeholder="Enter Description"/>
            
        </header>
        
<div className="Questions-Options primary padding12 margintop12 paddingleft12">
   
{questions.map((item, key)=>(<div className="Ques">  
          <QuizitemContainer key={key} item={item} 
              handleOptionChange= {handleOptionChange} 
              handleDeleteQuestion = {handleDeleteQuestion} 
              handleaddoption={handleaddoption}
              handleQuestionChange={handleQuestionChange}
              handleAnswerChange={handleAnswerChange}/>
        </div>     ))}


        <button onClick={()=>{handleAddQuestion()}} className="secondary commonbutton lighttext col-lg-4">ADD QUESTIONS</button>
        <button onClick={()=>{handleQuizSubmit()}} className="secondary commonbutton lighttext col-lg-4">SUBMIT</button>
        </div>

  </div>
)
}
export default Quiz;


