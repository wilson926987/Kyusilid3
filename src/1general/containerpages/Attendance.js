import React, { useContext, useEffect, useState } from 'react';
import { userInfoContext } from '../../Globalcontext';
import Avatar from '../../assets/images/avatar.jpg';
import { personlistContext , currentclassContext } from '../../Globalcontext';
import axios from 'axios';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale'; // import locale to display the month name in English

function Attendance({ classId }) {
  const { userinfo } = useContext(userInfoContext);
  const { personlist } = useContext(personlistContext);
  const { currentclass } = useContext(currentclassContext);
  const [attendanceList, setAttendanceList] = useState([]);
  const [search, setSearch] = useState('');
  const [attendances, setAttendances] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTextbox, setShowTextbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    if (currentclass !== undefined) {
      axios.get(`https://api.kyusillid.online/api/getAttendanceByClass/${currentclass.classes_id}/${format(selectedDate, 'yyyy-MM-dd')}`)
        .then(response => {
          setAttendances(response.data.attendance_list);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [currentclass, selectedDate]);

  const handlePreviousClick = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setSelectedDate(previousDate);
  };
  
  const handleNextClick = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const filteredAttendances = attendances && attendances.length > 0 ? attendances.filter((attendance) => {
    const fullName = `${attendance.lastname}, ${attendance.firstname}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

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

      <br />
      <br />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className='commonbutton primary' onClick={handlePreviousClick}>Previous</button>
        <div>Date: {format(selectedDate, 'MMMM d, yyyy', { locale: enUS })}</div>
        <button className='commonbutton primary' onClick={handleNextClick}>Next</button>
      </div>

      <div style={{ maxHeight: '500px', overflowY: 'hidden', maxWidth: '100%' }}>
      {filteredAttendances.length === 0 ? (
  <p style={{fontSize:'30px'}}><br></br><center>No attendance records found.</center></p>
          ) : (
        <table className='table width100'>
          <thead className='primary'>
            <tr>
              <th>Name</th>
              <th>Attendance Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendances.map(attendance => (
              <tr key={attendance.id}>
                <td>{attendance.lastname + ", " + attendance.firstname}</td>
                <td>{attendance.att_status}</td>
                <td>{format(new Date(attendance.date_created), 'yyyy-MM-dd HH:mm:ss')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}

export default Attendance;

