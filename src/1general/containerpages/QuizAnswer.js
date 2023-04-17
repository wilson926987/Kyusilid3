import React, { useState, useEffect } from "react";
import axios from "axios";

function QuizAnswer({ questions }) {
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kyusillid.online/api/getID")
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setQuestion(response.data.questions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    const question = questions.find((q) => q.questionid === questionId);
    if (question.answer === selectedAnswer) {
      setScore(score + question.points);
    }
  };

  const MultipleChoiceQuestion = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleSelection = (e) => {
      setSelectedAnswer(e.target.value);
      handleAnswerChange(question.questionid, e.target.value);
    };

    return (
      <div>
        <p>{question.question}</p>
        <ul>
          {question.content.map((option) => (
            <li key={option.index}>
              <label>
                <input
                  type="radio"
                  name={`question-${question.questionid}`}
                  value={option.value}
                  onChange={handleSelection}
                  checked={selectedAnswer === option.value}
                />
                {option.value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const IdentificationQuestion = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleInput = (e) => {
      setSelectedAnswer(e.target.value);
      handleAnswerChange(question.questionid, e.target.value);
    };

    return (
      <div>
        <p>{question.question}</p>
        <input type="text" value={selectedAnswer} onChange={handleInput} />
      </div>
    );
  };

  const handleSubmit = () => {
    axios
      .post("https://api.kyusillid.online/api/score", { score })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {question.length > 0 ? (
        question.map((question) => {
          if (question.type == "Multiplechoice") {
            return (
              <MultipleChoiceQuestion
                key={question.questionid}
                question={question}
              />
            );
          } else if (question.type == "Identification") {
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
      <h2>Score: {score}</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuizAnswer;