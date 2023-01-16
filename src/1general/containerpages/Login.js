import React, { useContext , useState} from 'react'
import { userInfoContext } from '../../Globalcontext'
import Wallpaper from '../../assets/images/wallpaper.jpg'

function Login() {

  const {setuserinfo} = useContext(userInfoContext);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();


  const [usernamemessage, setusermessage] = useState()
  const [passmessage, setpassmessage] = useState()

  const trylogin = ()=>{

    if(username=== undefined){
      setusermessage(' need username')
    }else{
      setusermessage('')
    }

    if(password === undefined){
      setpassmessage( 'need password')
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
    <div>
      
    
      
   <div>
   <h1>Login page</h1>
      note: type usertype dun sa username (student, prof, admin)
        <ul>
            <li>*username* <input type="text"  defaultValue ={username} onChange={(e)=>{setusername(e.target.value)}}/></li>
            <li>*password* <input type="text"  defaultValue ={password} onChange={(e)=>{setpassword(e.target.value)}}/></li>
        </ul>
        <button onClick={trylogin}>
          login
        </button>

        <h3>{usernamemessage}</h3>
        <h3>{passmessage}</h3>



   </div>


    </div>
  )
}

export default Login