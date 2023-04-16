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
        const midtermGrade = Math.round(
          (item.activity.grade / (item.activity_count || 1)) * 0.2 +
            (item.assignment.grade / (item.assignment_count || 1)) * 0.2 +
            (item.questionnaire.grade / (item.questionnaire_count || 1)) *
              0.15 +
            0 * 0.05 +
            (item.midterm_exam.grade || 0) * 0.4
        );
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
  <div className={gradeType === 'midterm' ? 'active' : ''}>
    <button id='gradetype' onClick={() => setGradeType('midterm')} style={{ width: '100%', backgroundColor: gradeType === 'midterm' ? '#064273' : '#fff', color: gradeType === 'midterm' ? '#fff' : '#000', border: 'none' }}>
      Midterm Grade
    </button>
  </div>
  <div className={gradeType === 'final' ? 'active' : ''}>
    <button id='gradetype' onClick={() => setGradeType('final')} style={{ width: '100%', backgroundColor: gradeType === 'final' ? '#064273' : '#fff', color: gradeType === 'final' ? '#fff' : '#000', border: 'none'}}>
      Final Grade
    </button>
  </div>
</div>


      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Activities</th>
            <th>Assignment</th>
            <th>Quizzes</th>
            <th>Attendance</th>
            {gradeType === "midterm" && (
              <>
                <th>Midterm Exam</th>
                <th>Midterm Grade</th>
              </>
            )}
            {gradeType === "final" && (
              <>
                <th>Final Exam</th>
                <th>Final Temp Grade</th>
                <th>Final Grade</th>

              </>
            )}
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
                      <td>
                        {Math.round(
                          item.activity.grade / (item.activity_count || 1)
                        )}{" "}
                        / 100
                      </td>
                      <td>
                        {Math.round(
                          item.assignment.grade / (item.assignment_count || 1)
                        )}{" "}
                        / 100
                      </td>
                      <td>
                        {Math.round(
                          item.questionnaire.grade /
                            (item.questionnaire_count || 1)
                        )}{" "}
                        / 100
                      </td>
                      <td>{Math.round(item.attendance.grade)}</td>
                      <td>{Math.round(item.midterm_exam.grade)} / 100</td>
                      <td>
                        {Math.round(
                          (item.activity.grade / (item.activity_count || 1)) *
                            0.2 +
                            (item.assignment.grade /
                              (item.assignment_count || 1)) *
                              0.2 +
                            (item.questionnaire.grade /
                              (item.questionnaire_count || 1)) *
                              0.15 +
                            0 * 0.05 +
                            (item.midterm_exam.grade || 0) * 0.4
                        )}
                      </td>
                    </>
                  )}
                  {gradeType === "final" && (
                    <>
                      <td>100 / 100</td>
                      <td>69 / 100</td>
                      <td>75 / 100</td>
                      <td>100</td>
                      <td>100 / 100</td>
                      <td>75</td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        )}
      </table>
      <br />
      <style jsx>{`
        #export {
          background-color: #064273;
          border: 1px solid;
          font-size: 24px;
          cursor: pointer;
          border-radius: 8px;
          color: white;
          width: auto%;
          padding: 5px;
        }
        #gradetype {
          font-size: 15px;
          cursor: pointer;
          color: white;
          width: 100%;
          padding: 5px;
          border: 5px solid #064273;
          border-bottom: none;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          background-color: #064273;
          max-width: 100%;
        }
        .active {
          border-top: 2px solid black;
          border-left: 2px solid black;
          border-right: 2px solid black;
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
