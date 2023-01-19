

import React, { useContext , useState} from 'react'
import { userInfoContext } from '../../Globalcontext'
import logoiconimage from '../../assets/images/Kyusilid.jpg'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'

function Login() {

  const {setuserinfo} = useContext(userInfoContext);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [usernamemessage, setusermessage] = useState()
  const [passmessage, setpassmessage] = useState()

  

  const handleUsernameChange=(e)=>{
    setusername(e.target.value)
    setusermessage('');
  }
  
  const handlePasswordChange=(e)=>{
    setpassword(e.target.value)
    setpassmessage('');
  }



  const handleFormSubmit=(e)=>{
    e.preventDefault();
  }

  const trylogin = ()=>{

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


    if(!(username===undefined || password === undefined)){
      setuserinfo({
        'username' : "wilson",
        'password' : 'password',
        'usertype' : username
      })
    }
 

  }
  
  
  
 
  return (
    <div className='Backgroundlog'>
      <div className='logotext col-lg-5'>
      <img src={logoiconimage} alt="" srcset="" className='avatar'/>
      <h1>QCU ONLINE CLASSROOM</h1>
      </div>
    <div className='Logincontainer primary'>
      
      <img src={logoiconimage1} alt="" srcset="" className='avatar'/>
      <h1>Login Here</h1>

      <form className='form-group-form' autoComplete="off"
      onSubmit={handleFormSubmit}>

     <h2>Note: Type usertype dun sa username (student, prof, admin)</h2>
    
        <label> Username:<div className='errortext'>{usernamemessage}</div></label>
            <input type="text" placeholder='Username...' defaultValue ={username} onChange={handleUsernameChange}/>
            

        <label> Password:<div className='errortext'>{passmessage}</div> </label>
            <input type="password" placeholder='password...' defaultValue ={password} onChange={handlePasswordChange}/>
            
           
       
        <button onClick={trylogin} className='buttonsubmit secondary'>login
        </button>
        <center> <a href="EMS.forget.html">Forgot Password...</a></center> 
        </form>
         
    </div> 
    </div> 
  )
  
}


export default Login