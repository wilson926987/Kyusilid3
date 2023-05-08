
import React, { useState, useEffect } from "react";
import Dropdown from "../formcomponents/Dropdown";
import QuizitemContainer from "../components/quizitems/QuizitemContainer";
import axios from "axios";
import { useParams } from "react-router";


function Quiz() {
  
  const [title, settitle] = useState();
  const [description, setdescrtiption] = useState();

  const {id} = useParams();
  
  const [questions, setQuestions] = useState([
    { "questionid": 1, "question": "", "points": "", "type": "Multiplechoice", "content":[], "answer": "" }
  ]);

  const handleQuizSubmit = () => {
    const isQuestionValid = questions.every(
      (question) => question.question !== "" && question.type !== "" && question.points !== "" && question.answer !== ""
    );
    
    if (!isQuestionValid) {
      alert("Please select question, points, and type for all questions before submitting.");
      return;
    }
    
    const temp = {
      "id" : id,
      "title" : title,
      "description" : description,
      "questions" : questions
    }
  
    console.log(JSON.stringify(temp));
  
    axios.post("https://api.kyusillid.online/api/quiz-questions", temp)
      .then((response) => {
        console.log(response.data);
        alert("Successfully created Quiz")
        window.close(); // Close the form after submitting and saving the data
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create Quiz");
      });
  };
  
  // const handleQuizSubmit = () => {
   
  //   const temp = {
  //     "id" : id,
  //     "title" : title,
  //     "description" : description,
  //     "questions" : questions
  //   }

  //    console.log(JSON.stringify(temp));
     
  //    axios.post("https://api.kyusillid.online/api/quiz-questions", temp).then((response) => {
  //     console.log(response.data);
  //     alert("Successfully created Quiz")
  //     window.close(); // Close the form after submitting and saving the data
  //   }).catch((error) => {
  //     console.error(error);
  //     alert("Failed to create Quiz");
  //   });
  // };

  useEffect(() => {
    axios
    .get("https://api.kyusillid.online/api/getID/" + id)
    .then((response) => {
      settitle(response.data.title || null);
      setdescrtiption(response.data.description || null);
      setQuestions(response.data.questions || [
        { "questionid": 1, "question": "", "points": "", "type": "Multiplechoice", "content": [        { value: 'Option 0', index: 0 },        { value: 'Option 1', index: 1 },        { value: 'Option 2', index: 2 },        { value: 'Option 3', index: 3 },      ], "answer": "" }
      ]);
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  },[])


  //   axios.post("https://api.kyusillid.online/api/quiz-questions", temp).then((response) => {
  //     console.log(response.data);
  //   }).catch();

  //   alert("Successfully created Quiz")
  //   window.close();
  // };

 

  const handlePointsChange = (item, points) => {
          setQuestions(questions.map((item2)=>({
            "question": item2.question,
            'points' : item2.questionid === item.questionid ? points : item2.points,
            "type" : item2.type,
            "content": item2.content,
            "answer": item2.answer,
            "questionid": item2.questionid
          })))
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
      "content": typetemp == "Identification" ? [ { value: 'Option 0', index: 0 },        { value: 'Option 1', index: 1 },        { value: 'Option 2', index: 2 },        { value: 'Option 3', index: 3 }]: item2.content,
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
    const isQuestionValid = questions.every(
      (question) => question.question !== "" && question.type !== "" && question.points !== "" && question.answer !== ""
    );
  
    if (isQuestionValid) {
      setQuestions([
        ...questions,
        {
          questionid: questions.length + 1,
          question: "",
          points: "",
          type: "Multiplechoice",
          content: [],
          answer: "",
        },
      ]);
    } else {
      alert("Please select question, points question and type before adding a new question.");
    }
  };
  

  // const handleAddQuestion = () => {
  //   setQuestions([
  //     ...questions,
  //     { "questionid": questions.length+1, "question": "", "points": "", "type": "Multiplechoice", "content":[], "answer": "" }
  
  //   ]);
  // };

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
        
            <h1 className='quiz-text'>Form Title </h1>
            <input type="text" className="quiz-input-text commontextbox col-lg-4"   defaultValue={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter Title"/> 
            <br></br>
            <h1 className='quiz-text'>Form Description</h1>
            <input type="text" className="quiz-input-text commontextbox col-lg-4" defaultValue={description} onChange={e=>setdescrtiption(e.target.value)} placeholder="Enter Description"/> 
        </header>
        
<div className="Questions-Options tertiary padding12 margintop12 paddingleft12 divcenter">
   
{questions.map((item, key)=>(<div className="Ques">  
          <QuizitemContainer key={key} item={item} 
              handleOptionChange= {handleOptionChange} 
              handleDeleteQuestion = {handleDeleteQuestion} 
              handleaddoption={handleaddoption}
              handleQuestionChange={handleQuestionChange}
              handleAnswerChange={handleAnswerChange}
              handlePointsChange={handlePointsChange}/>
        </div>     ))}

<hr></hr>
        <button onClick={()=>{handleAddQuestion()}} className="secondary commonbutton lighttext col-lg-4">ADD QUESTIONS</button>
        <button onClick={()=>{handleQuizSubmit()}} className="secondary commonbutton lighttext col-lg-4">SUBMIT</button>
        </div>

  </div>
)
}
export default Quiz;


