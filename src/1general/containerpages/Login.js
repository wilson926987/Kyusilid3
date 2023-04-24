import axios from 'axios'
import React, { useContext , useState, useEffect} from 'react'
import { userInfoContext } from '../../Globalcontext'
import logoiconimage from '../../assets/images/Kyusilid.png'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'


function Login() {

  const {setuserinfo} = useContext(userInfoContext);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  //Message for validation
  const [usernamemessage, setusermessage] = useState()
  const [passmessage, setpassmessage] = useState()

  

  const handleUsernameChange=(e)=>{
    setusername(e.target.value);
    setusermessage('');
  }
  
  const handlePasswordChange=(e)=>{
    setpassword(e.target.value);
    setpassmessage('');
  }



 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //validation
    if(username=== undefined){
      alert('Username Required');
     }else{
       setusermessage('')
     }
 
     if(password === undefined){
       alert('Password Required');
     }else{
       setpassmessage('')
     }
 

   if(username!==undefined && password!==undefined){
    try {

      console.log(JSON.stringify({
        'acc_username': username,
        'acc_password': password
    }))
      const response = await axios.post('https://api.kyusillid.online/api/login', {
          'acc_username': username,
          'acc_password': password
      });



      if (response.data.status === 'success') {
          console.log('Authentication Successful!');
          setuserinfo(response.data);
          console.log(response.data);
          // Store user data in local storage or use it as needed
      } else {
        alert("Username and password didn't match");
          console.log('Authentication Failed!');
      }
  } catch (error) {
      console.error(error.response.data);
  }

   }
};



 
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
    <div className='Logincontainer'>
      
      <img src={logoiconimage1} alt="" srcset="" className='avatar'/>

      <h1>QCU ONLINE CLASSROOM</h1>


      <div className='TechLogo'>
      <img src={logoiconimage} alt="" srcset="" className='avatar1'/>
     </div>

  
        <label> Username:<div className='errortext'>{usernamemessage}</div></label>
            <input type="text" placeholder='Username...' defaultValue ={username} onChange={handleUsernameChange}/>
            

        <label> Password:<div className='errortext'>{passmessage}</div> </label>

            <input type="password" placeholder='Password...' defaultValue ={password} onChange={handlePasswordChange}/>

            
          

        <button type="submit" className='secondary'>LOG IN
        </button>
        <button type="submit" className='forgot secondary'>Forgot Password?
        </button>

      
    </div> 
    </div> 
  )
  
}



export default Login
