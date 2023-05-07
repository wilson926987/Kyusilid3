import React  from 'react'
import axios from 'axios';
import { userInfoContext } from '../../Globalcontext';
import { useContext , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoiconimage from '../../assets/images/Kyusilid.png'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Firstchangepass() {
  const [ newpass , setnewpass] = useState();
  const [confirmnewpass, setconfirmnewpass]= useState();
  const {userinfo , setuserinfo } = useContext(userInfoContext);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  function checkPasswordStrength(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  }


  useEffect(()=>{
  
 
    if( (userinfo !== undefined && userinfo.user.first_login ===0)  || userinfo.undefined){
      navigate('/')
    }
  },[])




  const handlechangepass = (e) => {
    e.preventDefault();
  
    if (!checkPasswordStrength(newpass)) {

      Swal.fire({
        icon: 'error',
        text: "Password should contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long."
      })
      return;
    }

    if(newpass != confirmnewpass) {


      Swal.fire({
        icon: 'error',
        text: 'Passwords must match'
      })
      return
    }
    
    if (newpass === confirmnewpass && newpass !== undefined && confirmnewpass !== undefined) {
  
      const temp = {
        "acc_id": userinfo.user.acc_id,
        "acc_password": newpass
      }

      console.log(JSON.stringify(temp))
  
      axios.post('https://api.kyusillid.online/api/reset-pass', temp)
        .then(response => {

        
          setnewpass("");
          setconfirmnewpass("");


          Swal.fire({
       
            text: "Password has been set. Redirecting to login",
            icon: 'success',
       
            confirmButtonColor: '#3085d6',
      
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            }
          })
        })
        .catch()
    }
  
    if ((newpass !== undefined && newpass.length < 6) || (newpass !== undefined && newpass.length < 6)) {
      Swal.fire("password minimum length is 6")
      return
    }


  
  }
  
  

  return (
    <div className='Backgroundlog'>
    <div className='logotext col-lg-5 '>
        <h2 className='h16'>#KYUSILID</h2>
        <br></br>
        <br></br>
        <h3>An integrated Learning System for Quezon City University 
        which is a software application or web-based technology used 
        to implement and assess a specific learning process.</h3>
    </div>
      {userinfo !== null ?

        <div className='Logincontainer'>

        <img src={logoiconimage1} alt="" srcset="" className='avatar'/>

        <h1>QCU ONLINE CLASSROOM</h1>
  
  
        <div className='TechLogo absolute'>
        <img src={logoiconimage} alt="" srcset="" className='avatar1'/>
       </div>
       <br></br>
      <h1>UPDATE YOUR NEW PASSWORD</h1>
       <form action="" onSubmit={handlechangepass} >

        <h3>Enter New Password:</h3>
        <div className="passss" style={{ position: 'relative' }}>

          {showPassword ?    <input type='text' placeholder='New Password' defaultValue={newpass} onChange={(e)=>{setnewpass(e.target.value)}}/>
            :    <input type='password' placeholder='New Password'  defaultValue={newpass} onChange={(e)=>{setnewpass(e.target.value)}}/>

}
      
         
         <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 5, top: 7 }}>
         {showPassword ? <FaEyeSlash /> : <FaEye />}
       </span>
         </div>


         <h3>Confirm New Password:</h3>
         <div className="passss" style={{ position: 'relative' }}>
         <input type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' defaultValue={confirmnewpass} onChange={(e)=>{setconfirmnewpass(e.target.value)}}/>
         <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 5, top: 7 }}>
         {showPassword ? <FaEyeSlash /> : <FaEye />}
       </span>
       </div>
         <br></br>
         <button className="secondary width100 lighttext"> Save</button>
</form> 
       </div>

     :
     <div></div>
      }
    </div>
  
   
  )
}

export default Firstchangepass