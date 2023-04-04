
import React, { useContext, useEffect, useState } from 'react'
import Avater from '../../assets/images/avatar.jpg'
import {BsFillGearFill} from 'react-icons/bs'
import DonutChart from '../components/DonutChart'
import BarChart from '../components/BarChart'
import StudProfile from '../components/statprofstud'
import { userInfoContext } from '../../Globalcontext'
import axios from 'axios'

function Profiilepage() {

  const {userinfo} = useContext(userInfoContext);
  const [activitystatus, setactivitystatus]= useState();
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState();


  useEffect(()=>{
      axios.get('https://api.kyusillid.online/api/getprofilestatus/' + userinfo.user.acc_id).then(
        response => setactivitystatus(response.data)
      ).catch();
  },[])




  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(password.length >= 4 && password === cpassword){

      const temp = {
        "acc_id" : userinfo.user.acc_id,
        "acc_password" :password
      }

      console.log(JSON.stringify(temp))


      await axios.post('https://api.kyusillid.online/api/changepass' , temp).then(
        setsettings(false)
      ).catch();
    
    }
  }

 

  const [settings, setsettings] = useState(false);
  const togglesetting = ()=>{
    setsettings(!settings)
  }


  const [togglewarning,settogglewarning] = useState(false)

 useEffect(()=>{

    if((cpassword !== undefined || cpassword !== "") && cpassword !== password){
        settogglewarning(true);
    }else{
      settogglewarning(false);
    }
    
 },[cpassword])


  return (
    <div>
    <div className='col-lg-12'>
      <div className='row'>
    <div className="col-lg-6 ">


      <div className='tertiary profilepanelmain  borderradius-lg '>

          <div className='flex'>
          <div className='profile-pic-div'>
            <img src={Avater} alt=""/>
            <input type="file" id="file"></input>
            <label className='uploadBtnn' for="file" id="uploadBtnn" style={{display: "block"}}>Choose Photo</label>
</div>
          
          <div>
            <h3>{userinfo.user.firstname} {userinfo.user.middle} {userinfo.user.lastname}</h3>
            <p>Information Technology</p>
            </div>
          </div>
          <div className='accountinfo'>
            <h4>Account info</h4>
            <p>email: {userinfo.user.acc_email=== null ? " no email yet" : userinfo.user.acc_email}</p>
            <p>username : {userinfo.user.acc_username}</p>
            <button className='commonbutton secondary lighttext' onClick={togglesetting}>change password</button>
          </div>
    
     
      </div>

    
    
    </div>
 {settings &&
     <div className="col-lg-6 ">


     <div className='tertiary profilepanelmain  borderradius-lg '>

       <form action="" onSubmit={handleSubmit}>
         <h4>Change password</h4>
         <div className='col-lg-12 flex'>
         <input type="password" className='commontextbox background col-lg-7' placeholder='Enter password' onChange={e=>{setpassword(e.target.value)}}/>
         </div>
         
         <div className='col-lg-12 flex'>   <input type="password" className='commontextbox background col-lg-7' placeholder='Confirm new password' onChange={e=>{setcpassword(e.target.value)}}/>
         {togglewarning && 
         <p className=''> *passwords must match</p>}</div>
       

       <div className='col-lg-12'>
      
       <input type="submit" className='commonbutton secondary lighttext col-lg-7 marginleft12'  value= "Save"/>

       </div>

       


       </form>



       
     


     </div>



</div>
 }




</div>
    </div>
    



    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin margintop12">
            <h2 className="text-left">Attendance Status</h2>

<div className='DonutChart'><DonutChart></DonutChart></div>

            </div>
        </div>

        <div className='col-md-8'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin margintop12">
            <h2 className="text-left">Activity Status</h2>
            <div className='BarChart'> {activitystatus !== undefined && <BarChart item= {activitystatus}/>}</div>
            </div>
        </div>

        

    </div>
</div>


 


  </div>
  )
}

export default Profiilepage