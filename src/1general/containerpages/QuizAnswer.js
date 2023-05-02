import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function QuizAnswer({ questions }) {
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const {id} = useParams();
  const {id2} = useParams();

  

  useEffect(() => {
    axios
      .get("https://api.kyusillid.online/api/getID/" + id)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setQuestion(response.data.questions);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
   
  }, []);
  


  // const handleAnswerChange = (questionId, selectedAnswer) => {
  //   const temp = question.find((q) => q.questionid === questionId);
  //   const previousAnswer = answeredQuestions.find((q) => q.questionid === questionId);
  
  //   if (temp.answer === selectedAnswer) {
  //     if (!previousAnswer) {
  //       setScore(score + temp.points);
  //       setAnsweredQuestions([...answeredQuestions, {questionid: questionId, answer: selectedAnswer}]); // add question to answeredQuestions
  //     }
  //   } else {
  //     if (previousAnswer) {
  //       const newScore = score - temp.points;
  //       setScore(newScore < 0 ? 0 : newScore);
  //       setAnsweredQuestions(answeredQuestions.filter(q => q.questionid !== questionId));
  //     }
  //   }
  // };
  

  
  

  const MultipleChoiceQuestion = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const previousAnswer = answeredQuestions.find(q => q.questionid === question.questionid);
  
    useEffect(() => {
      if (previousAnswer) {
        setSelectedAnswer(previousAnswer.answer);
      }
    }, []);
  
    const handleSelection = (e) => {
      setSelectedAnswer(e.target.value);
      setAnsweredQuestions(prevAnswers => {
        const existingAnswerIndex = prevAnswers.findIndex(q => q.questionid === question.questionid);
        const newAnswer = { questionid: question.questionid, answer: e.target.value, correct_answer: question.answer, cpoints : question.points };
        if (existingAnswerIndex >= 0) {
          return [...prevAnswers.slice(0, existingAnswerIndex), newAnswer, ...prevAnswers.slice(existingAnswerIndex + 1)];
        } else {
          return [...prevAnswers, newAnswer];
        }
      });
    };
  
    return (
      <div className="tertiary padding12 borderradius-md margintop12 col-lg-6 divcenter">
        <h4 className="QQQ">{question.question}</h4>
        <hr></hr>
        <ul className="margintop12">
          {question.content.map((option) => (
            <li key={option.index} className="QQ padding12">
              <label>
                <input
                  type="radio" 
                  name={`question-${question.questionid}`}
                  value={option.value}
                  onChange={handleSelection}
                  checked={selectedAnswer === option.value}
                  required
                />
                &nbsp;&nbsp; {option.value}
              </label>
            </li>
          ))}
        </ul> 
      </div>
    );
  };
  

  const IdentificationQuestion = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
  
    // Use answeredQuestions state to set the default value of input field
    useEffect(() => {
      const previousAnswer = answeredQuestions.find((q) => q.questionid === question.questionid);
      if (previousAnswer) {
        setSelectedAnswer(previousAnswer.answer);
      }
    }, []);
  
    const handleInput = (e) => {
      setSelectedAnswer(e.target.value);
      setAnsweredQuestions(prevAnswers => {
        const existingAnswerIndex = prevAnswers.findIndex(q => q.questionid === question.questionid);
        const newAnswer = { questionid: question.questionid, answer: e.target.value, correct_answer: question.answer, cpoints : question.points};
        if (existingAnswerIndex >= 0) {
          return [...prevAnswers.slice(0, existingAnswerIndex), newAnswer, ...prevAnswers.slice(existingAnswerIndex + 1)];
        } else {
          return [...prevAnswers, newAnswer];
        }
      });
      
    };
    
  
    return (
      <div className="tertiary padding12 borderradius-md margintop12 col-lg-6 divcenter">
       <h4>{question.question}</h4>
        <input type="text" className="commontextbox" defaultValue={selectedAnswer} required onChange={handleInput} />
      </div>
    );
  };
  

  const [buttondisabled, setbuttondisabled] = useState(false)

      const handleSubmit = async () => {
      // Check if all required questions are answered
      const unansweredQuestions = question.filter(q => !answeredQuestions.some(aq => aq.questionid === q.questionid));
      if (unansweredQuestions.length > 0) {
        alert(`Please answer all questions before submitting. There are ${unansweredQuestions.length} unanswered questions.`);
        return; 
      }

      const answers = question.map(q => {
        const answer = answeredQuestions.find(aq => aq.questionid === q.questionid);
        return { questionid: q.questionid, answer: answer.answer, correct_answer: answer.correct_answer , cpoints: answer.cpoints};
      });

      var points = 0;
      var total = 0;
      

      
      answers.forEach(answer => {
        if (answer.answer == answer.correct_answer) {
          
          total = answers.reduce((acc, curr) => {
            return acc + parseInt(curr.cpoints) 
          }, 0);

          // total = points + parseInt(cpoints) ; // increment points if answer is correct
        }
      });
      

      const score = {
        assign_id: id2,
        answers: answers,
        score: total
      };
      console.log(score);
      
      await axios.post("https://api.kyusillid.online/api/submitscore", score)
        .then((response) => {
          
          alert("Score Submitted");
          setbuttondisabled(true);
          console.log(response.data);
          console.log(answers);
          console.log(score);
          //  window.close();
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div>


<header className="Quiz-Header primary margintop12">
        
        <h1 className='Quiz-title'>{title}</h1>
          <br></br>
          <hr></hr>
        <h3 className='Quiz-Desc'>{description}</h3>
       
    </header>
    {question.length > 0 ? (
        question.map((question) => {
          if (question.type === "Multiplechoice") {
            return (
              <MultipleChoiceQuestion
                key={question.questionid}
                question={question}
              />
            );
          } else if (question.type === "Identification") {
            return (
              <IdentificationQuestion
                key={question.questionid}
                question={question} 
              />
            );
          }
          return null;
        })
      ) : (
        <p>No questions found.</p>
      )}
     

      <div className="flex width100 divcenter margintop12 padding12 "> 
      {!buttondisabled ?
          <button className="secondary commonbutton borderradius-md lighttext col-lg-6 divcenter margintop12" onClick={handleSubmit}>
          <h2>Submit</h2>
        </button>
        
        :
        <button className="secondary commonbutton borderradius-md lighttext col-lg-6 divcenter margintop12" disabled >
        <h2>Done</h2>
      </button>
      }
      

      </div>
     
    </div>
  );
}

export default QuizAnswer;
