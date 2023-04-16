import React, { useState, useEffect } from "react";
import Dropdown from "../formcomponents/Dropdown";
import QuizitemContainer from "../components/quizitems/QuizitemContainer";
import axios from "axios";

function QuizDisplay() {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      axios.get('/api/questions')
        .then(response => {
          setQuestions(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleAnswer = (questionId, selectedAnswer) => {
      const question = questions.find(q => q.questionid === questionId);
  
      if (question.answer === selectedAnswer) {
        setScore(score + question.points);
      }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Final score: ${score}`);
    }
  
    return (
      <div>
        <header className="Quiz-Header primary margintop12">
        
        <h1 className='quiz-text'>Form Title</h1>
        <input type="text" className="quiz-input-text commontextbox col-lg-4"  disabled/> 
        <br></br>
        <h1 className='quiz-text'>Form Description</h1>
        <input type="text" className="quiz-input-text commontextbox col-lg-4" disabled />
        
    </header>
        <h1>Quiz</h1>
        <form onSubmit={handleSubmit}>
          {questions.map(question => (
            <div key={question.questionid}>
              <h2>{question.question}</h2>
              <p>Type: {question.type}</p>
              <p>Points: {question.points}</p>
              <ul>
                {question.content.map((answer, index) => (
                  <li key={index}>
                    <input
                      type={question.type === 'Multiple Choice' ? 'radio' : 'text'}
                      name={`question-${question.questionid}`}
                      id={`question-${question.questionid}-${index}`}
                      value={answer}
                      onChange={() => handleAnswer(question.questionid, answer)}
                    />
                    <label htmlFor={`question-${question.questionid}-${index}`}>{answer}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
        <p>Score: {score}</p>
      </div>
    );
       
                }
export default QuizDisplay;


