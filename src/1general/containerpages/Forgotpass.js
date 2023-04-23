import axios from 'axios'
import React, { useContext , useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoContext } from '../../Globalcontext'
import logoiconimage from '../../assets/images/Kyusilid.png'
import logoiconimage1 from '../../assets/images/avatarlogo.webp'


function Forgotpass() {


    const [email, setemail] = useState();
    const [otp, setotp] = useState();

    const [ step, setstep] = useState('send email')

  

    const handleEmailSubmit =(e)=>{
        e.preventDefault()
        setstep('input otp')

    }
  
 

  


 
  return (
    <div className='Backgroundlog'>
      <div className='logotext col-lg-5 '>
      <img src={logoiconimage} alt="" srcset="" className='avatar'/>
      <h1>QCU ONLINE CLASSROOM</h1>
      </div>
    <div className='Logincontainer primary'>
      
      <img src={logoiconimage1} alt="" srcset="" className='avatar'/>
      <h1>Login</h1>

      {step ==="send email" &&
      <form className='form-group-form' autoComplete="off"
      onSubmit={handleEmailSubmit}>

  
        <label> Enter Email:</label>
            <input type="text" placeholder='Enter Email' required defaultValue ={email} onChange={e=>setemail(e.target.value)}/>
            

       
            <button type="submit" className='buttonsubmit secondary' >Confirm</button>
            

        </form>   
    }

    {step ==='input otp' &&
      <form className='form-group-form' autoComplete="off"
      onSubmit={handleEmailSubmit}>

  
        <label> Enter OTP:</label>
            <input type="text" placeholder='Enter OTP' defaultValue ={otp} onChange={e=>setotp(e.target.value)}/>
            

       
            <button type="submit" className='buttonsubmit secondary'>Confirm</button>
            <button  className='buttonsubmit secondary margintop12' onClick={()=>setstep('send email')}>Change Email</button>
            

        </form>}
         
    </div> 
    </div> 
  )
  
}



export default Forgotpass
