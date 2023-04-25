
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
  const [file, setFile] = useState(null);
  const [profilePic, setProfilePic] = useState('');


  useEffect(()=>{
      axios.get('https://api.kyusillid.online/api/getprofilestatus/' + userinfo.user.acc_id).then(
        response => setactivitystatus(response.data)
      ).catch();
  },[])


  useEffect(() => {
    async function fetchProfilePic() {
      try {
        const response = await axios.get(`https://api.kyusillid.online/api/getprofilepic/${userinfo.user.acc_id}`);
        setProfilePic(response.data.profile_pic);
        console.log(response.data.profile_pic);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfilePic();
  }, [userinfo.user.acc_id]);




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

 const handleFileChange = (event)=>{
  setFile(event.target.files[0]);
};

const handleProfile = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('profile_pic', file);
  fetch(`https://api.kyusillid.online/api/profile-pic/${userinfo.user.acc_id}`, {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to upload profile picture');
      }
      return response.json();
    })
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to upload profile picture');
    });
};


  return (
    <div>
    <div className='col-lg-12'>
      <div className='row'>
    <div className="col-lg-6 ">


      <div className='tertiary profilepanelmain  borderradius-lg '>

          <div className='flex'>
          <div className='profile-pic-div'>
          <form onSubmit={handleProfile} encType ='multipart/form-data'>
            <img src={profilePic}/>
            
            </form>
          </div>
          
          
            
          
         


          <div className='information-prof'>
            <h3>{userinfo.user.firstname} {userinfo.user.middle} {userinfo.user.lastname}</h3>
            <p>Information Technology</p>
            </div>
          </div>



          <div className='UP-Button'>
        
              <input type="file" id="file"  onChange={handleFileChange}></input>
                <label className='commonbutton secondary lighttext' for="file" id="uploadBtn">Choose Photo</label>
                <br></br>
                <button className='commonbutton secondary lighttext' type="submit" onClick={handleProfile} >Upload</button>
             
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
     <div className="col-lg-6">


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
    



    {userinfo.user.usertype && 
    <div className="col-md-12">
    <div className="row">
      

        <div className='col-lg-12'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin margintop12">
            <h2 className="text-left">Activity Status</h2>
            <div className='BarChart'> {activitystatus !== undefined && <BarChart item= {activitystatus}/>}</div>
            </div>
        </div>

        

    </div>
</div>}


 


  </div>
  )
}

export default Profiilepage