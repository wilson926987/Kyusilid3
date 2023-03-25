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
    console.log(JSON.stringify(userinfo))

    if(userinfo.user.first_login === 0){
      navigate('/')
    }
  },[])




  const handlechangepass =(e)=>{
    e.preventDefault();

    if(newpass === confirmnewpass && newpass !== undefined && confirmnewpass !== undefined){
     
      const temp = {
        "acc_id" : userinfo.user.acc_id,
        "acc_password" : newpass
      }
      axios.post('https://api.kyusillid.online/api/reset-pass' , temp).then(
        ()=>{console.log("password successfully changed") ;  setuserinfo(); }
      ).catch()
    }
   
 
    if((newpass !== undefined && newpass.length <6) || (newpass !== undefined && newpass.length <6)){
      alert("password minimum length is 6")
      return 
    }

    if(newpass!== confirmnewpass){
      alert("passwords must match")
      return
    }
   
   

 
  }




  

  return (
    <div className='Backgroundlog absolute'>
     
       <div className='resetpass1 primary col-lg-12  borderradius-md'>
      <form className='form-group-form' action="" onSubmit={handlechangepass} >
      <center><h1>UPDATE PASSWORD</h1></center>
      <br></br>
        <input type='text'  className='editt' placeholder='New Password' onChange={(e)=>{setnewpass(e.target.value)}}/>
        <br></br>       
        <input type='text'className='editt1' placeholder='Confirm Password' onChange={(e)=>{setconfirmnewpass(e.target.value)}}/>
        <br></br>
        <button className="secondary commonbutton lighttext col-lg-4"> Save</button>
      </form>
      </div>

    </div>
   
  )
}

export default Firstchangepass