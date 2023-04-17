import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useContext, useEffect, useState } from 'react'
import { userInfoContext } from '../../Globalcontext'
import Avatar from '../../assets/images/avatar.jpg'
import { personlistContext } from '../../Globalcontext'


function Attendance() {


  const {userinfo} = useContext(userInfoContext)
  const {personlist} = useContext(personlistContext)

  useEffect(()=>{
    console.log(personlist)
  },[])

  return (
    <div>
      <div className='flex'> <h4>Attendance</h4> </div>

  <div class="Searrchh">     
      <div class="search1">
        <input
          type="text"
          placeholder="Search by name"
          name="search"
        />
        </div>

</div>

 
        <div className="persontable">


<table className="attendancetable">  

  <tr className="stickheader primary vertical">
            <th>Name</th>
            
  </tr>

  {personlist !== null &&
  personlist.filter(e=>e.usertype  ==="stud").map((item , key) =>(
    <tr key={key}>
  <td className='tdname flex' > <img src={Avatar} alt="" /> {item.firstname} {item.middle} {item.lastname} {item.suffix}</td>
</tr>
  ))
  
  }



</table>
        </div>
    
      </div>
    
    

  )
}

export default Attendance