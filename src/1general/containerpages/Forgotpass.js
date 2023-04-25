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

    const [password, setpassword] = useState();
    const [password2, setpassword2] = useState();

    const [acc_id, setacc_id] = useState();

    const navigate= useNavigate();

  

    const handleEmailSubmit =(e)=>{
        e.preventDefault()

        axios.post('https://api.kyusillid.online/api/ForgotPassword', {acc_email : email}).then(
          response=>{
            if(response.data.status === 'success'){
              setacc_id(response.data.acc_id)
              setstep('input otp')
            }else{
              alert("Account email not found.")
              
            }
          }
        ).catch(error=> console.log(error.data))

        

    }


    const handleOTPSubmit = (e)=>{
      e.preventDefault()
      axios.post('https://api.kyusillid.online/api/validateOTP' ,{ "acc_id" : acc_id , "otpstorage" : otp}).then(
        response => {
          if(response.data.status==="success"){
            setstep('new password')
          }else{
            alert(response.data.message)
          }
        }
      )




     
    }

    const handlePassSubmit= (e)=>{
      e.preventDefault()
      if(password !== password2){
        alert("passwords must match")
      }else{
        axios.post('https://api.kyusillid.online/api/NewPass' , { "acc_id" : acc_id , "password" : password}).then(
          response=>{
            if(response.data.status ==="success"){
              alert("Password successsfully changed")
              navigate("/")

              
            }else{
              alert("Password not changed")
            }
          }
        )
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
  <div className='Logincontainer'>
    
    <img src={logoiconimage1} alt="" srcset="" className='avatar'/>

    <h1>QCU ONLINE CLASSROOM</h1>


    <div className='TechLogo absolute'>
    <img src={logoiconimage} alt="" srcset="" className='avatar1'/>
   </div>


    {step ==="send email" &&
      <form  autoComplete="off" onSubmit={handleEmailSubmit}>

  
        <label> Enter Email:</label>
            <input type="text" placeholder='Enter Email' required defaultValue ={email} onChange={e=>setemail(e.target.value)}/>
            

       
            <button type="submit" className=' secondary' >Confirm</button>
            </form>  
            
            

    }
    <br/>
    <button type="button" className=' secondary' onClick={()=>{navigate('/')}} >Cancel</button>


{step ==='input otp' &&
      <form  autoComplete="off" onSubmit={handleOTPSubmit}>

  
        <label> Enter OTP:</label>
            <input type="text" placeholder='Enter OTP'  required defaultValue ={otp} onChange={e=>setotp(e.target.value)}/>
            

       
            <button type="submit" className='buttonsubmit secondary' >Confirm</button>
            <button  className='buttonsubmit secondary margintop12' onClick={()=>setstep('send email')}>Change Email</button>
            

        </form>}


        {step ==='new password' &&
      <form className='form-group-form' autoComplete="off"
      onSubmit={handlePassSubmit}>

  
        <label> Create new Password:</label>
            <input type="password" placeholder='Enter new Password' required defaultValue ={password} onChange={e=>setpassword(e.target.value)}/>

            <input type="password" placeholder='Confirm new Password'  required defaultValue ={password2} onChange={e=>setpassword2(e.target.value)}/>

            

       
            <button type="submit" className='buttonsubmit secondary'>Confirm New Password</button>
       

        </form>}

    
  </div> 
  </div> 
  )
  
}



export default Forgotpass
