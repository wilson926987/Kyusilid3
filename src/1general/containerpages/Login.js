import React, { useContext } from 'react'
import { userInfoContext } from '../../Globalcontext'
import { useNavigate } from 'react-router-dom';

function Login() {

  const {userinfo, setuserinfo} = useContext(userInfoContext);
  return (
    <div>

      <h1>Login page</h1>
        <ul>
            <li>*username*</li>
            <li>*password*</li>
        </ul>
        <button onClick={()=>{setuserinfo({
          'username' : "wilson",
          'password' : 'password',
          'usertype' : 'prof'
        }); 

        }}>
          login
        </button>
    </div>
  )
}

export default Login