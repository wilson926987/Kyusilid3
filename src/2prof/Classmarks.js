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
       const midtermGrade = (Math.round((item.activity.grade / (item.activity_count || 1)) * 0.2 +
       (item.assignment.grade / (item.assignment_count || 1)) * 0.2 +
         (item.questionnaire.grade / (item.questionnaire_count || 1)) * 0.15 +
         0 * 0.05 + (item.midterm_exam.grade || 0) * 0.4));
      let equivalent = 5.0;

      if (midtermGrade >= 98) {
        equivalent = 1.0;
      } else if (midtermGrade >= 95) {
        equivalent = 1.25;
      } else if (midtermGrade >= 92) {
        equivalent = 1.5;
      } else if (midtermGrade >= 89) {
        equivalent = 1.75;
      } else if (midtermGrade >= 86) { 
        equivalent = 2.0;
      } else if (midtermGrade >= 83) {
        equivalent = 2.25;
      } else if (midtermGrade >= 80) {
        equivalent = 2.5;
      } else if (midtermGrade >= 77) {
        equivalent = 2.75;
      } else if (midtermGrade >= 75) {
        equivalent = 3.0;
      }

      return {
        Name: item.student.name,
        Activity: Math.round(
          item.activity.grade / (item.activity_count || 1)
        ),
        Assignment: Math.round(
          item.assignment.grade / (item.assignment_count || 1)
        ),
        Quiz: Math.round(
          item.questionnaire.grade / (item.questionnaire_count || 1)
        ),
        Attendance: Math.round(item.attendance.grade),
        "Midterm Exam": item.midterm_exam.grade || 0,
        "Midterm Grade": midtermGrade.toFixed(2),
        Equivalent: equivalent.toFixed(2),
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
        <button className='commonbutton primary ' id="export" onClick={() => exportGrades()}> 
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
  <button id='gradetype' onClick={() => setGradeType('midterm')} style={{ width: '100%', color: gradeType === 'midterm' ? '#064273' : '#000', border: 'none', borderBottom: gradeType === 'midterm' ? '4px solid #064273' : '',}}>
    Midterm Grade
  </button>
</div>
<div className={gradeType === 'final' ? 'active' :'btnsss1'}>
  <button id='gradetype' onClick={() => setGradeType('final')} style={{ width: '100%', color: gradeType === 'final' ? '#064273' : '#000', border: 'none', borderBottom: gradeType === 'final' ? '4px solid #064273' : '',}}>
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
                            Activity {i+1}
                          </th>
                        ))}
                        {Array.from({ length: item.assignment_count ? item.assignment_count : 1 }, (_, i) => (
                          <th key={`assignment-${i+1}`}>
                            Assignment {i+1}
                          </th>
                        ))}
                        {Array.from({ length: item.quiz_count ? item.quiz_count : 1 }, (_, i) => (
                          <th key={`quiz-${i+1}`}>
                            Quiz {i+1}
                          </th>
                        ))}
                      </>
                    );
                  })}

                <th>Midterm Exam</th>
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
                            Activity {i+1}
                          </th>
                        ))}
                        {Array.from({ length: item.finals_assignment_count ? item.finals_assignment_count : 1 }, (_, i) => (
                          <th key={`assignment-${i+1}`}>
                            Assignment {i+1}
                          </th>
                        ))}
                        {Array.from({ length: item.finals_quiz_count ? item.finals_quiz_count : 1 }, (_, i) => (
                          <th key={`quiz-${i+1}`}>
                            Quiz {i+1}
                          </th>
                        ))}
                        <th>Final Exam</th>
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
                      <td></td>
                      <td></td>
                      <td> </td>
                      <td></td>
                      <td></td>
                    </>
                  )}
                  {gradeType === "final" && (
                    <>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </> 
                  )}   
                  <td>{Math.round(item.attendance.grade)}</td> 
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
          border-bottom: none;
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