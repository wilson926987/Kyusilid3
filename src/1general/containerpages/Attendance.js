import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { userInfoContext } from '../../Globalcontext'
import Avatar from '../../assets/images/avatar.jpg'


function Attendance() {


  const {userinfo} = useContext(userInfoContext)
  return (
    <div>
      <div className='flex'> <h4>Attendance</h4> {userinfo.usertype==='stud' && <p className='marginleftauto smallfont'>## out of ## discussions attended</p>}</div>

  <div class="Searrchh">     
      <div class="search1">
        <input
          type="text"
          placeholder="Search by name"
          name="search"
        />
        </div>

</div>

 
        <div className="attendancecontainer">


<table className="attendancetable">  

  <tr className="stickheader">
            <th>Name</th>
            <th> 1 </th>
            <th> 2 </th>
            <th> 3 </th>
            <th> 4 </th>
            <th> 5 </th>
            <th> 6 </th>
            <th> 7 </th>
            <th> 8 </th>
            <th> 9 </th>
            <th> 10 </th>
            <th> 11 </th>
            <th> 12 </th>
            <th> 13 </th>
            <th> 14 </th>
            <th> 15 </th>
  </tr>


<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
<tr>
  <td className='tdname flex' > <img src={Avatar} alt="" /> Students name</td>
</tr>
</table>
        </div>
    
      </div>
    
    

  )
}

export default Attendance