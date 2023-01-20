import React, { useState } from 'react'
import Avater from '../../assets/images/avatar.jpg'
import {BsFillGearFill} from 'react-icons/bs'
import StudProfile from '../components/statprofstud'

function Profiilepage() {

  const [settings, setsettings] = useState(false);
  const togglesetting = ()=>{
    setsettings(!settings)
    
  
  }
  return (
    <div>
<div className='row'>

<div className="col-lg-5 ">

<div className='tertiary profilepanelmain borderradius-lg relative'>
    <div className='flex'>
      <img src={Avater} alt="" />
      <div>
      <h3>Juan Dela Cruz</h3>
      <p>19-0852</p>
      </div>
    </div>
    <div className='accountinfo'>
      <h4>Account info</h4>
      <p>email: Account@gmail.com</p>
      <p>username : username</p>
    </div>
    <div className='profilesettings' onClick={togglesetting}>
    <BsFillGearFill />
    </div>
   {settings &&  
   <div className='profilesettingsdropdown borderradius-md'>
      <p className='profiledropdownitem'>change profile picture</p>
      <p className='profiledropdownitem'>change password</p>
    </div>
  }
</div>
</div>

{
  //this is for the progress of student
}
<div className='col-lg-7 margintop13'>
<div className='borderradius-lg'>
  <div className='center1'><h3>Student Progress</h3></div>
</div>

<div className='row'>
<div className='col-lg-4 margintop12'>
  <div className='currentsempanel margintop12'>

{
  //progress stud "DONE"
}
<div className='skill'>
<div className='outer1'>
<div className='inner1'>
  <div id='number'>
    89%
  </div>
</div>
</div>
<div className='svg1'>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="60" stroke-linecap="round" />
 </svg>




 </div>
</div>

</div>
<div className='profilestud1'><center>Done</center></div>
</div>

<div className='col-lg-4 margintop12'>
  <div className='currentsempanel margintop12'>
  {
  //progress stud "Pending"
}
<div className='skill'>
<div className='outer1'>
<div className='inner1'>
  <div id='number'>
    65%
  </div>
</div>
</div>
<div className='svg1'>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="60" stroke-linecap="round" />
 </svg>




 </div>
</div>

</div>
<div className='profilestud1'><center>Pending</center></div>
</div>



<div className='col-lg-4 margintop11'>
  <div className='currentsempanel margintop12'>
  {
  //progress stud "MISSING"
}
<div className='skill'>
<div className='outer1'>
<div className='inner1'>
  <div id='number'>
    56%
  </div>
</div>
</div>
<div className='svg1'>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="60" stroke-linecap="round" />
 </svg>




 </div>
</div>

</div>
<div className='profilestud1'><center>Missing</center></div>
</div>


</div>

</div>

</div>

 
  <div className='row'>
  <div className='col-lg-5'>
<div className='tertiary borderradius-lg currentsempanel margintop10'>
  <h3>Current Semester information</h3>
  <div className="accountinfo margintop12">
    <p>Current year : 4th year</p>
    <p>Current Sem : 2nd</p>
    <p>Section : J</p>
    <p>Units : 12</p>
  </div>
</div>
</div>

  </div>


  <div className='row'>
  <div className='col-lg-12'>
<div className='currentsempanel borderradius-lg margintop11'>

  <h2 className="center1">Student Profile Performance</h2>
  <div className=' currentsempanel borderradius-lg margintop11 height1'>
  <div className='LineChart'><StudProfile></StudProfile></div>
    


</div>
  </div>
  </div>
  </div>

  {
  //line graph
}

    </div>
  )
}

export default Profiilepage