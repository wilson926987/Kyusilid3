import React  from 'react'
import axios from 'axios';
import logoiconimage1 from '../../assets/images/avatarlogo.webp'
import { userInfoContext } from '../../Globalcontext';
import { useContext , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Firstchangepass() {
  const [ newpass , setnewpass] = useState();
  const [confirmnewpass, setconfirmnewpass]= useState();
  const {userinfo , setuserinfo } = useContext(userInfoContext);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(0);




  useEffect(()=>{
    console.log(JSON.stringify(userinfo))

    if(userinfo.user.first_login === 0){
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
    <div>
      {userinfo !== null ?
        <div className='Backgroundlog'>
      
        <div className='resetpass1 primary'>
        <img src={logoiconimage1} alt="" srcset="" className='avatar'/>
       <form action="" onSubmit={handlechangepass} >
       <center><h1>Update Password</h1></center>
       <br></br>
         <input type='password'  className='editt' placeholder='New Password' onChange={(e)=>{setnewpass(e.target.value)}}/>
         <br></br>       
         <input type='password' className='editt1' placeholder='Confirm Password' onChange={(e)=>{setconfirmnewpass(e.target.value)}}/>
         <br></br>
         <button className="secondary commonbutton lighttext"> Save</button>
       </form>
       </div>
 
     </div>
     :
     <div></div>
      }
    </div>
  
   
  )
}

export default Firstchangepass