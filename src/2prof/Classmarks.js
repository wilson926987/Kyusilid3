import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { currentclassContext } from "../Globalcontext";
import * as XLSX from "xlsx";

function Classmarks() {
  const [data, setData] = useState();
  const { currentclass } = useContext(currentclassContext);
  const [searchFilter, setSearchFilter] = useState("");
  const [gradeType, setGradeType] = useState("midterm"); // add this line to define gradeType state

  const handleMidtermClick = () => {
    setGradeType("midterm");
  };

  const handleFinalClick = () => {
    setGradeType("final");
  };

  useEffect(() => {
    axios
      .get(
        "https://api.kyusillid.online/api/getgradelist/" +
          currentclass.classes_id
      )
      .then((response) => setData(response.data))
      .catch();

    console.log(currentclass.classes_id);

    console.log(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("gradelist", JSON.stringify(data));
  }, []);

  const [searchfilter, setsearchfilter] = useState("");
  const [showTextbox, setShowTextbox] = useState(false);

  const handleView = (index) => {
    setShowTextbox(!showTextbox);
  };

function exportGrades() {
  if (data) {
    const exportData = data.map((item) => {
      return {
        Name: item.student.name,
        'Activity 1': '75 / 100',
        'Activity 2': '75 / 100',
        'Activity 3': '75 / 100',
        'Assignment 1': '84 / 100',
        'Assignment 2': '84 / 100',
        'Assignment 3': '84 / 100',
        'Quiz 1' : '82 / 100',
        'Quiz 2' : '82 / 100',
        'Quiz 3' : '82 / 100',
        Attendance: '100',
        "Midterm Exam": '94 / 100',
        "Midterm Grade": '87.62',
        'Final Activity 1': '75 / 100',
        'Final Activity 2': '75 / 100',
        'Final Activity 3': '75 / 100',
        'Final Assignment 1': '84 / 100',
        'Final Assignment 2': '84 / 100',
        'Final Assignment 3': '84 / 100',
        'Final Quiz 1' : '82 / 100',
        'Final Quiz 2' : '82 / 100',
        'Final Quiz 3' : '82 / 100',
        Attendance: '100',
        "Final Exam": '94 / 100',
        "Final Term Grade": '87.62',
        "Final Grade" : '2.75',
        "" : "This is a placeholder, Export in progress"
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Grades");
    XLSX.writeFile(workbook, "grades.xlsx");
  }
}

  return (
    <div>
      <div class="container">
        <button id="export" onClick={() => exportGrades()}>
          Export
        </button>

        <div class="search">
          <input
            type="text" 
            placeholder="Search by name"
            name="search"
            onChange={(e) => {
              setsearchfilter(e.target.value);  
            }}
          />
        </div>
      </div>
      <div class="buttons">
  <div className={gradeType === 'midterm' ? 'active' : 'btnsss'}>
  <button id='gradetype' onClick={() => setGradeType('midterm')} style={{ width: '100%', color: gradeType === 'midterm' ? '#064273' : '#000', border: '#FFFFFF', borderBottom: gradeType === 'midterm' ? '4px solid #064273' : '',}}>
    Midterm Grade
  </button>
</div>
<div className={gradeType === 'final' ? 'active' :'btnsss1'}>
  <button id='gradetype' onClick={() => setGradeType('final')} style={{ width: '100%', color: gradeType === 'final' ? '#064273' : '#000', border: '#FFFFFF', borderBottom: gradeType === 'final' ? '4px solid #064273' : '',}}>
    Final Grade
  </button>
</div>
</div>
<br></br>
<br></br>
        
      <div className="persontable width100">
      <table className='width100' cellSpacing={0}>
        <thead>
          <tr className="primary">
            <th>Name</th>
            {gradeType === "midterm" && (  
              <>
              {data &&
                  data.map((item, index) => {
                    if (index > 0) return null; // skip rendering for other students
                    let loopHasRun = false; // Define a boolean variable to keep track of whether the loop has run or not
                    return (
                      <>
                        {Array.from({ length: item.activity_count ? item.activity_count : 1 }, (_, i) => (
                          <th key={`activity-${i+1}`}>
                          {item.midterm_activity && item.midterm_activity[`midterm_activity_${i+1}`] && item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_name ? item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_name : 'Activity #'}

                          </th>                         
                        ))}
                        <th>|</th>
                        {Array.from({ length: item.assignment_count ? item.assignment_count : 1 }, (_, i) => (
                          <th key={`assignment-${i+1}`}>
                            {item.midterm_assignment && item.midterm_assignment[`midterm_assignment_${i+1}`] && item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_name ? item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_name : 'Assignment #'}
                          </th>
                        ))}
                        <th>|</th>
                        {Array.from({ length: item.quiz_count ? item.quiz_count : 1 }, (_, i) => (
                          <th key={`quiz-${i+1}`}>
                           {item.midterm_quiz && item.midterm_quiz[`midterm_quiz_${i+1}`] && item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_name ? item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_name : 'Quiz #'}
                          </th>
                        ))}
                      </>
                    );
                  })}
<th>|</th>
                <th>Midterm Exam</th>
                <th>|</th>
              </>
            )}
           {gradeType === "final" && (
  <>
                {data &&
                  data.map((item, index) => {
                    if (index > 0) return null; // skip rendering for other students
                    let loopHasRun = false; // Define a boolean variable to keep track of whether the loop has run or not
                    return (
                      <>
                        {Array.from({ length: item.finals_activity_count ? item.finals_activity_count : 1 }, (_, i) => (
                          <th key={`activity-${i+1}`}>
                            {item.finals_activity[`finals_activity_${i+1}`] && item.finals_activity[`finals_activity_${i+1}`].finals_activity_name ? item.finals_activity[`finals_activity_${i+1}`].finals_activity_name : 'Activity #'}
                          </th>
                        ))}<th>|</th>
                        {Array.from({ length: item.finals_assignment_count ? item.finals_assignment_count : 1 }, (_, i) => (
                          <th key={`assignment-${i+1}`}>
                            {item.finals_assignment && item.finals_assignment[`finals_assignment_${i+1}`] && item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_name ? item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_name : 'Assignment #'}
                          </th>
                        ))}<th>|</th>
                        {Array.from({ length: item.finals_quiz_count ? item.finals_quiz_count : 1 }, (_, i) => (
                          <th key={`quiz-${i+1}`}>
                            {item.finals_quiz && item.finals_quiz[`finals_quiz_${i+1}`] && item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_name ? item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_name : 'Quiz #'}
                          </th>
                        ))}<th>|</th>
                        <th>Final Exam</th>
                        <th>|</th>
                      </>
                    );
                  })}
              </> 
            )} 

            <th>Attendance</th>
          </tr> 
        </thead>  
 
        {data != undefined && (
          <tbody> 
            {data 
              .filter(  
                (item1) =>
                  searchfilter === "" ||
                  item1.student.name.toLowerCase().includes(searchfilter)
              )
              .map((item, index) => (
                
                <tr key={index}>
                  <td data-label="Name">{item.student.name} </td>
                  {gradeType === "midterm" && (
                    <>
                     {Array.from({ length: item.activity_count ? item.activity_count : 1 }, (_, i) => (
                        <td key={`activity-${i+1}`}>
                          {item.midterm_activity && item.midterm_activity[`midterm_activity_${i+1}`] && item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_grade ? item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_grade : 0} / 100
                        </td>
                      ))}
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      {Array.from({ length: item.assignment_count ? item.assignment_count : 1 }, (_, i) => (
                          <td key={`assignment-${i+1}`}>
                            {item.midterm_assignment && item.midterm_assignment[`midterm_assignment_${i+1}`] && item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_grade ? item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_grade : 0} / 100
                          </td>
                        ))}
                        <td><p style={{color:'#FFFFFF'}}>---</p></td>
                        {Array.from({ length: item.quiz_count ? item.quiz_count : 1 }, (_, i) => (
                          <td key={`quiz-${i+1}`}>
                            {item.midterm_quiz && item.midterm_quiz[`midterm_quiz_${i+1}`] && item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_grade ? item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_grade : 0} / 100
                          </td>
                        ))}
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      <td>{item.midterm_exam && item.midterm_exam.midterm_exam_1 && item.midterm_exam.midterm_exam_1.midterm_exam_grade ? item.midterm_exam.midterm_exam_1.midterm_exam_grade : 0} / 100</td>
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      <td>{Math.round(item.attendance.grade)}</td>
                    </> 
                  )}
                  {gradeType === "final" && (
                    <>
                      {Array.from({ length: item.finals_activity_count ? item.finals_activity_count : 1 }, (_, i) => (
                        <td key={`activity-${i+1}`}>
                          {item.finals_activity && item.finals_activity[`finals_activity_${i+1}`] && item.finals_activity[`finals_activity_${i+1}`].finals_activity_grade ? item.finals_activity[`finals_activity_${i+1}`].finals_activity_grade : 0} / 100
                        </td>
                      ))}
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      {Array.from({ length: item.finals_assignment_count ? item.finals_assignment_count : 1 }, (_, i) => (
                          <td key={`assignment-${i+1}`}>
                            {item.finals_assignment && item.finals_assignment[`finals_assignment_${i+1}`] && item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_grade ? item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_grade : 0} / 100
                          </td>
                        ))}
                        <td><p style={{color:'#FFFFFF'}}>---</p></td>
                        {Array.from({ length: item.finals_quiz_count ? item.finals_quiz_count : 1 }, (_, i) => (
                          <td key={`quiz-${i+1}`}>
                            {item.finals_quiz && item.finals_quiz[`finals_quiz_${i+1}`] && item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_grade ? item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_grade : 0} / 100
                          </td>
                        ))}
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      <td>{item.finals_exam.finals_exam_1.finals_exam_grade ? item.finals_exam.finals_exam_1.finals_exam_grade : "0" } / 100</td>
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      <td>{Math.round(item.attendance.grade)}</td> 
                    </> 
                  )}   
                </tr> 
              ))}
          </tbody>
        )} 
      </table> 
      </div>
      <br />
      <style jsx>{`
        #export {
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;
          width: auto%; 
          padding: 5px;
        }
        #gradetype {
          font-size: 15px;
          cursor: pointer;
          width: 100%;
          padding: 5px;
          border-bottom: #FFFFFF;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          max-width: 100%;
        } 
        

        .active {
          border-radius: 10px;
        }
        .buttons > div {
          flex-basis: 50%;
        }
        .container {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          width: auto;
        }
      `}</style>
    </div>
  );
}

export default Classmarks;
