import React  from 'react'
import axios from 'axios';
import { useContext , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Forgotpass() {
  const [forgotEmail, setforgotEmail]= useState();
  const navigate = useNavigate();




  const handleforgotpass = (e) => {
    e.preventDefault();
    axios.post('https://api.kyusillid.online/api/forgot-pass', {
        acc_email: forgotEmail
      })
      .then((response) => {
        console.log("email sent");
        if (response.data.success) {
          const confirmLogout = window.confirm("Email sent. Please check and follow instructions. Redirecting to login page. Click OK to continue.");
          if (confirmLogout) {
            window.location.href = '/';
          }
        } else if (response.data.error) {
          alert(response.data.error);
        }
      })
      .catch()
  }
  
  
  
  

  return (
    <div>
        <div className='Backgroundlog absolute'>
     
        <div className='resetpass1 primary borderradius-md'>
       <form action="" onSubmit={handleforgotpass} ><center>
       <h1>FORGOT PASSWORD</h1><small style={{color:'red'}}>bobo ka kase</small>
       <br></br>
         <input type='text'  className='editt' placeholder='Email'/>
         <br></br>
         <button className="secondary commonbutton lighttext col-lg-6" > Send OTP</button></center>
       </form>
       </div>
 
     </div>
    
    </div>
  
   
  )
}

export default Forgotpass