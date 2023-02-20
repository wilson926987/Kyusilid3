import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { userInfoContext } from '../Globalcontext';
import Adminannouncementpanel from './Adminannouncementpanel';

function Adminannouncements() {
 const [announcement, setannouncement] = useState();
 const{userinfo} = useContext(userInfoContext);

 const [adminannouncements, setadminannouncements] = useState([]);

 useEffect(()=>{
  filldata();
 },[])

 async function filldata(){
  await axios.get('https://api.kyusillid.online/api/getadminannouncement/' + 1).then(response =>{
    setadminannouncements(response.data)
    console.log(response.data)
  }).catch();

 }




 const submitannouncement= async ()=>{
  const temp = { 'acc_id' : userinfo.user.acc_id , 'dep_id' : 1 , 'announcement_content' : announcement};
console.log(JSON.stringify(temp))
    await axios.put('https://api.kyusillid.online/api/createadminannouncement' ,temp).then().catch();
    filldata();
  
    setannouncement('');
 }


 const deleteannouncement_local = async (e)=>{
   setadminannouncements(adminannouncements.filter((temp)=> {return temp.admin_an_id !== e.admin_an_id}))
 }


  return (

    <div>
        <div className='col-lg-12'>
         <div className='borderradius-lg tertiary admincreateannouncement padding12'>
            <h4>Create new Announcement</h4>
        
         <textarea name="" id="" cols="30" rows="3" className='commontextarea primaryborder' value={announcement} onChange={(e)=>{setannouncement(e.target.value)}} placeholder='Enter content...'></textarea>
  
            <div className="flex width100"> <div className='marginleftauto'> <button className='commonbutton secondary lighttext' onClick={submitannouncement}>Post</button></div></div>
             
         </div>
        
        </div>

        {adminannouncements!== undefined && adminannouncements.map((item)=>(
            <div className="col-lg-12 margintop12" key={item.admin_an_id}>
            <Adminannouncementpanel item = {item} deleteannouncement_local = {deleteannouncement_local}/>
        </div>
       


        )).reverse()}



     

      
      
     



    </div>
  )
}

export default Adminannouncements