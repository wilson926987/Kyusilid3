import React, { useContext, useEffect, useState } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import axios from 'axios';

function Classinfoitem({personitem}) {
  const [profilePic, setProfilePic] = useState('');
  
  useEffect(() => {
    async function fetchProfilePic() {
      try {
        const response = await axios.get(`https://api.kyusillid.online/api/getprofilepic/${personitem.acc_id}`);
        setProfilePic(response.data.profile_pic);
        console.log(response.data.profile_pic);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProfilePic();
  }, [personitem.acc_id]);

  return (
    <div className='personpanel'>
            <div>
            <img src={profilePic} alt=""/>
            </div>
            <div className='personpanelcontent'>
                <p>{personitem.title} {personitem.firstname} {personitem.lastname} {personitem.middle} {personitem.suffix} </p>
                <p> {personitem.usertype === 'prof' ? personitem.dep_name : personitem.stud_no }</p>
            </div>

    </div>
  )
}

export default Classinfoitem