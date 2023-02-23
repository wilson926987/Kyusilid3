import React, { useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([
    { text: "", points: 1, type: "radio", options: ["", ""], answer: "" }
  ]);

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", points: 1, type: "radio", options: ["", ""], answer: "" }
    ]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleDeleteOption = (index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <div className="Ques primary">
        <div className="Tion">
        <input type="text" placeholder="Enter Title"></input>
        <br></br>
        <input type="text" placeholder="Enter Description"></input>
        <br></br>
        <br></br>
        </div>
        </div>
      
      <div className="All">
      {questions.map((question, index) => (
        <div key={index}>
          <input
          className="textt"
            name="text"
            value={question.text}
            onChange={(e) => handleQuestionChange(index, e)}
          />
          <select
            className="Opt"
            name="points"
            value={question.points}
            onChange={(e) => handleQuestionChange(index, e)}
          >
            <option value={0}>Score</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <select
            name="type"
            className="Opt"
            value={question.type}
            onChange={(e) => handleQuestionChange(index, e)}
          >
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
            <option value="paragraph">Paragraph</option>
          </select>
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                className="Opt2"
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                />
                <button className="Opt3" 
                onClick={() => handleDeleteOption(index, optionIndex)}>
                  Delete
                </button>
              </div>
            ))}
            <button 
            className="Opt4"
            onClick={() => handleAddOption(index)}>Add Option</button>
          </div>
          
          <select
          className="Opt5"
            name="answer"
            value={question.answer}
            onChange={(e) => handleQuestionChange(index, e)}
          >
            
            {question.options.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
          <br />
        
          <button 
          className="Opt6"
          onClick={() => handleDeleteQuestion(index)}>
            Delete Question
          </button>
          
          <hr />
          
        </div>
      ))}
      <button 
      className="Opt7"
      onClick={handleAddQuestion}>Add Question
      </button>

      </div>
    </div>
  );
}

export default Quiz;
