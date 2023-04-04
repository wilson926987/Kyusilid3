import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react'
import { currentclassContext } from '../Globalcontext';

function Classmarks() {
  const [data, setData] = useState()
  const {currentclass} = useContext(currentclassContext)


  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/getgradelist/' + currentclass.classes_id).then(
      response =>setData(response.data)
    ).catch()

    console.log(currentclass.classes_id)

    console.log(data)
  },[])




 const [searchfilter , setsearchfilter] = useState("");
  const [showTextbox, setShowTextbox] = useState(false);
 

  const handleView = (index) => {
    setShowTextbox(!showTextbox);
  };

  return (
    <div>
 

      <div class="search">
        <input
          type="text"
          placeholder="Search by name"
          name="search"
          onChange={e=>{setsearchfilter(e.target.value)}}
        />
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Activities</th>
            <th>Assignment</th>
            <th>Quizzes</th>
            <th>Exam</th>
            <th>Attendance</th>

          </tr>
        </thead>

        {data != undefined &&
              <tbody>
              {data.filter(
                item1=>
                  searchfilter ==="" ||  item1.student.name.toLowerCase().includes(searchfilter)
                
              ).map((item, index) => (
                <tr key={index}>
                  <td data-label="Name">{item.student.name} </td>
         
                  <td>{item.activity.grade} / {item.activity.points}</td>
                  <td>{item.assignment.grade} / {item.assignment.points}</td>
               
                  
                </tr>
              ))}
            </tbody>
        }
    
    
      </table>
    </div>
  );
}

export default Classmarks;