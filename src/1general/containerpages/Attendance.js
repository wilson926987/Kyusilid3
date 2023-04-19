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
  const {currentclass} = useContext(currentclassContext)
  
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
      <ul>
        {attendances != undefined && attendances.map(attendance => (
          <li key={attendance.id}>
            {attendance.lastname + ", " + attendance.firstname} - {attendance.att_status} - {attendance.date_created}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;

