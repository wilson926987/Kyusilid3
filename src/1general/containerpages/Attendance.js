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
        {attendances.map(attendance => (
          <li key={attendance.id}>
            {attendance.lastname + ", " + attendance.firstname} - {attendance.att_status} - {attendance.date_created}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
//     <div>
//       <div className="flex">
//         <h4>Attendance</h4>
//       </div>

//       <div className="Searrchh">
//         <div className="search1">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={search}
//             onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           />
//         </div>
//       </div>

//       <div className="persontable">
//         <table className="attendancetable col-lg-12">
//           <thead>
//             <tr className="stickheader primary vertical">
//               <th>Name</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {personlist !== null &&
//               personlist
//                 .filter((person) => person.usertype === 'stud')
//                 .filter((person) => person.lastname.toLowerCase().includes(search))
//                 .map((person) => (
//                   <tr key={person.id}>
//                     <td className="tdname flex">
//                       <img src={Avatar} alt="" />
//                       {person.lastname}, {person.firstname} {person.middle} {person.suffix}
//                     </td>
//                     <td>{getAttendanceStatus(person.id)}</td>
//                   </tr>
//                 ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Attendance;
