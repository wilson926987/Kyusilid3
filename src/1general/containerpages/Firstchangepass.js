import React  from 'react'
import axios from 'axios';
import { userInfoContext } from '../../Globalcontext';
import { useContext , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Firstchangepass() {
  const [ newpass , setnewpass] = useState();
  const [confirmnewpass, setconfirmnewpass]= useState();
  const {userinfo , setuserinfo } = useContext(userInfoContext);
  const navigate = useNavigate();


  useEffect(()=>{
    if(userinfo === null){
      navigate('/')
    }

    if(userinfo!== undefined && userinfo.user !== undefined &&  userinfo.user.first_login ===0){
      navigate('/')

    }
  },[userinfo])




  const handlechangepass = async(e)=>{
    e.preventDefault();

    if((newpass !== undefined && newpass.length <6) || (newpass !== undefined && newpass.length <6)){
      alert("password minimum length is 6")
      return 
    }

    if(newpass!== confirmnewpass){
      alert("passwords must match")
      return
    }
    

    if(userinfo!== undefined &&  newpass === confirmnewpass && newpass !== undefined && confirmnewpass !== undefined){
     
      const temp = {
        "acc_id" : userinfo.user.acc_id,
        "acc_password" : newpass
      }

   
      await axios.post('https://api.kyusillid.online/api/reset-pass' , temp).then(
        alert('password successfully changed')
      ).then(
        setuserinfo()
      ).then(
        navigate('/')
      ).catch()
     
    }
   
 
   
   
   

 
  }




  

  return (
    <div>
      {userinfo !== null ?
        <div className='Backgroundlog absolute'>
     
        <div className='resetpass1 primary borderradius-md'>
       <form action="" onSubmit={handlechangepass} >
       <center><h1>UPDATE PASSWORD</h1></center>
       <br></br>
         <input type='password'  className='editt' placeholder='New Password' onChange={(e)=>{setnewpass(e.target.value)}}/>
         <br></br>       
         <input type='password'className='editt1' placeholder='Confirm Password' onChange={(e)=>{setconfirmnewpass(e.target.value)}}/>
         <br></br>
         <button className="secondary commonbutton lighttext col-lg-4"> Save</button>
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