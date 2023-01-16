import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useContext, useState } from 'react'
import { userInfoContext } from '../../Globalcontext'
import Avatar from '../../assets/images/avatar.jpg'

function Attendance() {

  const [discussionlist , setdiscussionlist] = useState([
    'Jan 1' ,'Jan 2' ,'Jan 3' ,'Jan 4' ,'Jan 5' ,'Jan 6' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    'Jan 7' ,'Jan 8' ,'Jan 9' ,'Jan 10' ,'Jan 11' ,'Jan 12' ,
    
  ])








  const {userinfo} = useContext(userInfoContext)
  return (
    <div>
      <div className='flex'> <h4>Attendance</h4> {userinfo.usertype==='stud' && <p className='marginleftauto smallfont'>## out of ## discussions attended</p>}</div>

    
    <div className='relative margintop12'>
        <div className='temp2 primary'>
            adfkjsldkafj
        </div>
 
        <div className="attendancecontainer">
        <table className="attendancetable">  

<tr className='primary'><td > 
  <div>
     
  </div>
</td>
{discussionlist.map((item , key)=>(
<td key={key} className='tddate '> 
  <div className=''> {item}</div>
  
  </td>
))}

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
    
    
    </div>
  )
}

export default Attendance