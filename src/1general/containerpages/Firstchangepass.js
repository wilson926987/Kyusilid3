import React  from 'react'
import axios from 'axios';
import { userInfoContext } from '../../Globalcontext';
import { useContext , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoiconimage from '../../assets/images/Kyusilid.png'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'

function Firstchangepass() {
  const [ newpass , setnewpass] = useState();
  const [confirmnewpass, setconfirmnewpass]= useState();
  const {userinfo , setuserinfo } = useContext(userInfoContext);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(0);




  useEffect(()=>{
  
 
    if( (userinfo !== undefined && userinfo.user.first_login ===0)  || userinfo.undefined){
      navigate('/')
    }
  },[])




  const handlechangepass = (e) => {
    e.preventDefault();
  
    if (newpass === confirmnewpass && newpass !== undefined && confirmnewpass !== undefined) {
  
      const temp = {
        "acc_id": userinfo.user.acc_id,
        "acc_password": newpass
      }
  
      axios.post('https://api.kyusillid.online/api/reset-pass', temp)
        .then(() => {
          console.log("password successfully changed");
          setnewpass("");
          setconfirmnewpass("");
          const confirmLogout = window.confirm("Your password has been change successfully, You will now be redirected to the login page. Click OK to continue.");
          if (confirmLogout) {
            window.location.href = '/';
          }
        })
        .catch()
    }
  
    if ((newpass !== undefined && newpass.length < 6) || (newpass !== undefined && newpass.length < 6)) {
      alert("password minimum length is 6")
      return
    }
  
    if (newpass !== confirmnewpass) {
      alert("passwords must match")
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
         <input type='password' placeholder='New Password' onChange={(e)=>{setnewpass(e.target.value)}}/>
         <br></br>    
         <h3>Confirm New Password:</h3>
         <input type='password' placeholder='Confirm Password' onChange={(e)=>{setconfirmnewpass(e.target.value)}}/>
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