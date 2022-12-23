import React, { useContext , useState} from 'react'
import { userInfoContext } from '../../Globalcontext'

function Login() {

  const {setuserinfo} = useContext(userInfoContext);

  const [username, setusername] = useState()

  return (
    <div>

      <h1>Login page</h1>
      note: type usertype dun sa username (student, prof, admin)
        <ul>
            <li>*username* <input type="text"  defaultValue ={username} onChange={(e)=>{setusername(e.target.value)}}/></li>
            <li>*password*</li>
        </ul>
        <button onClick={()=>{setuserinfo({
          'username' : "wilson",
          'password' : 'password',
          'usertype' : username
        }); 

        }}>
          login
        </button>
    </div>
  )
}

export default Login