import React, { useContext, useEffect, useState } from 'react';
import { userInfoContext } from '../../Globalcontext';
import Avatar from '../../assets/images/avatar.jpg';
import { personlistContext , currentclassContext } from '../../Globalcontext';
import axios from 'axios';

function Attendance({ classId }) {
  const { userinfo } = useContext(userInfoContext);
  const { personlist } = useContext(personlistContext);
  const [attendanceList, setAttendanceList] = useState([]);
  const [search, setSearch] = useState('');
  const [attendances, setAttendances] = useState([]);
  const {currentclass} = useContext(currentclassContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTextbox, setShowTextbox] = useState(false);
  
  useEffect(() => {
    console.log(currentclass)

    if (currentclass !== undefined) {
      axios.get(`https://api.kyusillid.online/api/getAttendance/${currentclass.classes_id}`)
        .then(response => {
          setAttendances(response.data.attendances);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [currentclass]);



  return (
        <div>
      <h2>Attendance</h2>


      <div className='search3'>
        <input
          type="text"
          placeholder='Search by Name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      <br></br>
      <br></br>
      <div style={{maxHeight: '500px', overflowY: 'hidden', maxWidth:'100%'}}>
      <table className='table width100'>
        <thead className='primary'>
          <tr>
            <th>Name</th>
            <th>Attendance Status</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {attendances != undefined && attendances.map(attendance => (
            <tr key={attendance.id}>
              <td>{attendance.lastname + ", " + attendance.firstname}</td>
              <td>{attendance.att_status}</td>
              <td>{attendance.date_created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    

    </div>
  );
}

export default Attendance;

