import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { currentclassContext } from "../Globalcontext";
import * as XLSX from "xlsx";

function Classmarks() {
  const [data, setData] = useState();;
  const {  currentclass  } = useContext(currentclassContext);
  const [gradeType, setGradeType] = useState("midterm"); // add this line to define gradeType state;
  const [searchFilter, setSearchFilter] = useState("");

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
      const activityNames = Array.from({ length: item.activity_count ? item.activity_count : 1 }, (_, i) => (
        item.midterm_activity && item.midterm_activity[`midterm_activity_${i+1}`] && item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_name ? item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_name : 'Activity #'
      ));
  
      const activityGrades = Array.from({ length: item.activity_count ? item.activity_count : 1 }, (_, i) => (
        item.midterm_activity && item.midterm_activity[`midterm_activity_${i+1}`] && item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_grade ? item.midterm_activity[`midterm_activity_${i+1}`].midterm_activity_grade : 0
      ));

      const assignmentNames = Array.from({ length: item.assignment_count ? item.assignment_count : 1 }, (_, i) => (
        item.midterm_assignment && item.midterm_assignment[`midterm_assignment_${i+1}`] && item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_name ? item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_name : 'assignment #'
      ));
  
      const assignmentGrades = Array.from({ length: item.assignment_count ? item.assignment_count : 1 }, (_, i) => (
        item.midterm_assignment && item.midterm_assignment[`midterm_assignment_${i+1}`] && item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_grade ? item.midterm_assignment[`midterm_assignment_${i+1}`].midterm_assignment_grade : 0
      ));
      const quizNames = Array.from({ length: item.quiz_count ? item.quiz_count : 1 }, (_, i) => (
        item.midterm_quiz && item.midterm_quiz[`midterm_quiz_${i+1}`] && item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_name ? item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_name : 'quiz #'
      ));
  
      const quizGrades = Array.from({ length: item.quiz_count ? item.quiz_count : 1 }, (_, i) => (
        item.midterm_quiz && item.midterm_quiz[`midterm_quiz_${i+1}`] && item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_grade ? item.midterm_quiz[`midterm_quiz_${i+1}`].midterm_quiz_grade : 0
      ));
      const factivityNames = Array.from({ length: item.finals_activity_count ? item.finals_activity_count : 1 }, (_, i) => (
        item.finals_activity && item.finals_activity[`finals_activity_${i+1}`] && item.finals_activity[`finals_activity_${i+1}`].finals_activity_name ? item.finals_activity[`finals_activity_${i+1}`].finals_activity_name : 'activity #'
      ));
  
      const factivityGrades = Array.from({ length: item.finals_activity_count ? item.finals_activity_count : 1 }, (_, i) => (
        item.finals_activity && item.finals_activity[`finals_activity_${i+1}`] && item.finals_activity[`finals_activity_${i+1}`].finals_activity_grade ? item.finals_activity[`finals_activity_${i+1}`].finals_activity_grade : 0
      ));
      const fassignmentNames = Array.from({ length: item.finals_assignment_count ? item.finals_assignment_count : 1 }, (_, i) => (
        item.finals_assignment && item.finals_assignment[`finals_assignment_${i+1}`] && item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_name ? item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_name : 'assignment #'
      ));
  
      const fassignmentGrades = Array.from({ length: item.finals_assignment_count ? item.finals_assignment_count : 1 }, (_, i) => (
        item.finals_assignment && item.finals_assignment[`finals_assignment_${i+1}`] && item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_grade ? item.finals_assignment[`finals_assignment_${i+1}`].finals_assignment_grade : 0
      ));
      const fquizNames = Array.from({ length: item.finals_quiz_count ? item.finals_quiz_count : 1 }, (_, i) => (
        item.finals_quiz && item.finals_quiz[`finals_quiz_${i+1}`] && item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_name ? item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_name : 'quiz #'
      ));
  
      const fquizGrades = Array.from({ length: item.finals_quiz_count ? item.finals_quiz_count : 1 }, (_, i) => (
        item.finals_quiz && item.finals_quiz[`finals_quiz_${i+1}`] && item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_grade ? item.finals_quiz[`finals_quiz_${i+1}`].finals_quiz_grade : 0
      ));

      const totalActivityGrade = activityGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);
      const totalAssignmentGrade = assignmentGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);
      const totalQuizGrade = quizGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);

      const totalfActivityGrade = factivityGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);
      const totalfAssignmentGrade = fassignmentGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);
      const totalfQuizGrade = fquizGrades.reduce((accumulator, currentValue) => isNaN(currentValue) ? accumulator : accumulator + currentValue, 0);
      const midtermgrade = Math.round(((totalActivityGrade/item.activity_count?item.activity_count:1)*0.2)+((totalAssignmentGrade/item.assignment_count?item.assignment_count:1)*0.15)+((totalQuizGrade/item.quiz_count?item.quiz_count:1)*0.2)+(100*0.05)+((item.midterm_exam && item.midterm_exam.midterm_exam_1 && item.midterm_exam.midterm_exam_1.midterm_exam_grade) ? item.midterm_exam.midterm_exam_1.midterm_exam_grade*0.4 : 0));
      const finalterm = Math.round(((totalfActivityGrade/item.finals_activity_count?item.finals_activity_count:1)*0.2)+((totalfAssignmentGrade/item.finals_assignment_count?item.finals_assignment_count:1)*0.15)+((totalfQuizGrade/item.finals_quiz_count?item.finals_quiz_count:1)*0.2)+(100*0.05)+((item.finals_exam && item.finals_exam.finals_exam_1 && item.finals_exam.finals_exam_1.finals_exam_grade) ? item.finals_exam.finals_exam_1.finals_exam_grade*0.4 : 0));
      const finalgrade = Math.round((midtermgrade*.5)+(finalterm*.5));
        let grade;
      
        if (finalgrade >= 96 && finalgrade <= 100) {
          grade = 1.00;
        } else if (finalgrade >= 94 && finalgrade <= 95.99) {
          grade = 1.25;
        } else if (finalgrade >= 91 && finalgrade <= 93.99) {
          grade = 1.50;
        } else if (finalgrade >= 89 && finalgrade <= 90.99) {
          grade = 1.75;
        } else if (finalgrade >= 86 && finalgrade <= 88.99) {
          grade = 2.00;
        } else if (finalgrade >= 83 && finalgrade <= 85.99) {
          grade = 2.25;
        } else if (finalgrade >= 80 && finalgrade <= 82.99) {
          grade = 2.50;
        } else if (finalgrade >= 77 && finalgrade <= 79.99) {
          grade = 2.75;
        } else if (finalgrade >= 75 && finalgrade <= 76.99) {
          grade = 3.00;
        } else {
          grade = 5.00;
        }


      
      return {
        Name: item.student.name,
        ...Object.fromEntries(activityNames.map((name, i) => [name, `${activityGrades[i]} `])),
        ...Object.fromEntries(assignmentNames.map((name, i) => [name, `${assignmentGrades[i]}`])),
        ...Object.fromEntries(quizNames.map((name, i) => [name, `${quizGrades[i]}`])),
        Attendance: '100',
        //"Midterm Exam": item.midterm_exam && item.midterm_exam.midterm_exam_1 && item.midterm_exam.midterm_exam_1.midterm_exam_grade ? item.midterm_exam.midterm_exam_1.midterm_exam_grade + '' : '0',
        //"Midterm Grade": midtermgrade,
        ...Object.fromEntries(fassignmentNames.map((name, i) => [name, `${fassignmentGrades[i]}`])),
        ...Object.fromEntries(factivityNames.map((name, i) => [name, `${factivityGrades[i]}`])),
        ...Object.fromEntries(fquizNames.map((name, i) => [name, `${fquizGrades[i]}`])),
        Attendance: '100',
        //"Final Exam": item.finals_exam && item.finals_exam.finals_exam_1 && item.finals_exam.finals_exam_1.finals_exam_grade ? item.finals_exam.finals_exam_1.finals_exam_grade + '' : '0',
        //"Final Term Grade": finalterm,
        //"Final Grade" : grade.toFixed(2),
      };
    });

    const date = new Date().toISOString().slice(0, 10);
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Grades");
    XLSX.writeFile(workbook, `${currentclass.sub_name} Grades (${date}).xlsx`);

  }
}
 
  return (
    <div>
      <div class="container">
        <button className='commonbutton primary' id="export" onClick={() => exportGrades()}>
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
      <div className="table-container primary">
      <div className=" fonttt persontable width100">
      <table cellSpacing={0}>
        <thead>
          <tr>
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
                            {item.finals_activity && item.finals_activity[`finals_activity_${i+1}`] && item.finals_activity[`finals_activity_${i+1}`].finals_activity_name ? item.finals_activity[`finals_activity_${i+1}`].finals_activity_name : 'Activity #'}
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
                     {Array.from({ length: item.activity_count ? item.activity_count: 1 }, (_, i) => (
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
                      <td>{item.finals_exam && item.finals_exam.finals_exam_1 && item.finals_exam.finals_exam_1.finals_exam_grade ? item.finals_exam.finals_exam_1.finals_exam_grade : 0 } / 100</td>
                      <td><p style={{color:'#FFFFFF'}}>---</p></td>
                      <td>{Math.round(item.attendance.grade)}</td> 
                    </> 
                  )}    
                </tr> 
              ))}
          </tbody>
        )} 
  
      </table> 
      </div>   </div> 
      <br /> 
      <style jsx>{`
      .table-container{ 
        width: 100%;
        overflow: auto;
      }
        #export {
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;
          width: auto; 
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
   
        } 
        
        .active {
          border-radius: 10px;
        }
        .buttons > div {
          flex-basis: 100%;
        }
        .container {
          display: flex;
          padding: 15px;
          width: auto;
        }
        .fonttt{ 
          font-size: 11px;
    
        }
        .fonttt th{ 
          background-color: #b5caf5;
        }
      `}</style>
    </div>
  );
}

export default Classmarks;
