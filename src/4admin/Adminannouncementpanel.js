import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import axios from 'axios'

function Adminannouncementpanel({item , deleteannouncement_local}) {

    const deletefunction = async(e)=>{
        if(window.confirm('Do you want to delete this announcemenet?')=== true){
            await axios.delete('https://api.kyusillid.online/api/deletadminannouncement/'+ e).then().catch();
            deleteannouncement_local(item);
        }
       }

  return (
    <div className='tertiary borderradius-lg padding12'>

        <div className="flex"><h4>Announcement</h4> <p className='smallfont marginleftauto'> Date Posted</p> <div className='marginleft12'><AiFillEdit onClick={(e)=>{deletefunction(item.admin_an_id)}}/></div></div>

        <div className='padding12'>
                    {item.announcement_content}
        </div>


    </div>
  )
}

export default Adminannouncementpanel