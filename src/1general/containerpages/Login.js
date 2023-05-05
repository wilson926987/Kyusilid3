import axios from 'axios'
import React, { useContext , useState, useEffect} from 'react'
import { userInfoContext } from '../../Globalcontext'
import logoiconimage from '../../assets/images/Kyusilid.png'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import jwtDecode from 'jwt-decode'



function Login() {
  const {setuserinfo} = useContext(userInfoContext);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
const [showPassword, setShowPassword] = useState(false);
  //Message for validation
  const [usernamemessage, setusermessage] = useState()
  const [passmessage, setpassmessage] = useState()

  const google = window.google
  function handleCallbackResponse(response){
      console.log(response.credential)
      var temp = jwtDecode(response.credential)
      setgoogleuser(temp)
  }


  const [googleuser, setgoogleuser] = useState()
  useEffect(()=>{

    google.accounts.id.initialize(
      {  
        client_id : '205053370954-j0qe2j6srhkcvg803lbcr3irsusq7dgc.apps.googleusercontent.com'
        ,callback : handleCallbackResponse
      }
      )
  
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: "outline" , size :" large"}
      )
  
  },[])


  useEffect(()=>{
      if(googleuser!== undefined){
  
        const temp11 = {
          "email" : googleuser.email
        }

        console.log(JSON.stringify(temp11))
        axios.post('https://api.kyusillid.online/api/logingoogle' ,{email : temp11}).then(

        response =>{
          console.log(response.data)
          if (response.data.status === 'success') {
            console.log('Authentication Successful!');
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('history', '/home');
            setuserinfo(response.data);
            console.log(response.data);
            navigate('/home');
          } else {
      
          Swal.fire({
            icon : 'error',
            text: "Username and password didn't match",
          })
            console.log('Authentication Failed!');
          }
        }
        ).catch(error =>console.log(error.data))
      }

  },[googleuser])

  

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
        localStorage.setItem('history', '/home');
        setuserinfo(response.data);
        console.log(response.data);
        navigate('/home');
      } else {
  
      Swal.fire({
        icon : 'error',
        text: "Username and password didn't match",
      })
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


      <div className='TechLogo absolute'>
      <img src={logoiconimage} alt="" srcset="" className='avatar1'/>
     </div>

  
      <form action="" onSubmit={handleFormSubmit}>


      <label> Username:<div className='errortext'>{usernamemessage}</div></label>
            <input type="text" placeholder='Username...' required defaultValue ={username} onChange={handleUsernameChange}/>


        <label> Password:<div className='errortext'>{passmessage}
        
        </div> </label>

        <div className="passss" style={{ position: 'relative' }}>
        <input type={showPassword ? 'text' : 'password'} placeholder='Password...' required defaultValue={password} onChange={handlePasswordChange} />
        <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 5, top: 7 }}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
          

        <button type="submit" className='secondary' >Log In
        </button>
      </form>
        <button className='forgot secondary' onClick={()=>{navigate('/Forgotpass')}}> Forgot Password?
        </button>

        <div className=' flex signIngoogle'>
          <div id='signInDiv' ></div>
        </div>

      
    </div> 
    </div> 
  )
  
}



export default Login
