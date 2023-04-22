import axios from 'axios'
import React, { useContext , useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate();

  useEffect(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const history = localStorage.getItem('history');
  const user = JSON.parse(localStorage.getItem('user'));

  if (isAuthenticated === 'true' && history) {
    navigate(history);
    setuserinfo(user);
  }
}, [navigate, setuserinfo]);

 

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
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(response.data));
        setuserinfo(response.data);
        console.log(response.data);
        navigate('/home');
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
      <img src={logoiconimage} alt="" srcset="" className='avatar'/>
      <h1>QCU ONLINE CLASSROOM</h1>
      </div>
    <div className='Logincontainer primary'>
      
      <img src={logoiconimage1} alt="" srcset="" className='avatar'/>
      <h1>Login</h1>

      <form className='form-group-form' autoComplete="off"
      onSubmit={handleFormSubmit}>

  
        <label> Username:<div className='errortext'>{usernamemessage}</div></label>
            <input type="text" placeholder='Username...' defaultValue ={username} onChange={handleUsernameChange}/>
            

        <label> Password:<div className='errortext'>{passmessage}</div> </label>

            <input type="password" placeholder='password...' defaultValue ={password} onChange={handlePasswordChange}/>

        <button type="submit" className='buttonsubmit secondary'>login
        </button>

        </form>
         
    </div> 
    </div> 
  )
  
}



export default Login
