import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { currentdeptContext, userInfoContext } from '../Globalcontext';
import Adminannouncementpanel from './Adminannouncementpanel';

function Adminannouncements() {
 const [announcement, setannouncement] = useState();
 const{userinfo} = useContext(userInfoContext);

 const [adminannouncements, setadminannouncements] = useState([]);
 const {currentdept} = useContext(currentdeptContext)

 useEffect(()=>{
  filldata();
  
if(currentdept !== undefined){
  console.log(currentdept)
}
 },[currentdept])

 async function filldata(){

  await axios.get('https://api.kyusillid.online/api/getadminannouncement/' + currentdept.dep_id).then(response =>{
    setadminannouncements(response.data)
    console.log(response.data)
  }).catch();

 }




 const submitannouncement= async (e)=>{
  e.preventDefault();
  const temp = { 'acc_id' : userinfo.user.acc_id , 'dep_id' : currentdept.dep_id , 'announcement_content' : announcement};

    await axios.put('https://api.kyusillid.online/api/createadminannouncement' ,temp).then().catch();
    filldata();
  
    setannouncement('');
 }


 const deleteannouncement_local = async (e)=>{
   setadminannouncements(adminannouncements.filter((temp)=> {return temp.admin_an_id !== e}))
 }

 

  return (

    <div>
        <div className='col-lg-12'>
         <div className='borderradius-lg tertiary admincreateannouncement padding12'>
            <h4>Create new Announcement</h4>

            <form action="" onSubmit={submitannouncement}>
            <textarea name="" id="" required cols="30" rows="3" className='commontextarea primaryborder' value={announcement} onChange={(e)=>{setannouncement(e.target.value)}} placeholder='Enter content...'></textarea>
  
  <div className="flex width100"> <div className='marginleftauto'> <button className='commonbutton secondary lighttext' type ='submit'>Post</button></div></div>
  
            </form>
        
       
         </div>
        
        </div>

        {adminannouncements!== undefined && adminannouncements.map((item)=>(
            <div className="col-lg-12 margintop12" key={item.admin_an_id}>
            <Adminannouncementpanel item = {item} deleteannouncement_local = {deleteannouncement_local} filldata={filldata}/>
        </div>
       


        )).reverse()}



     

      
      
     



    </div>
  )
}

export default Adminannouncements