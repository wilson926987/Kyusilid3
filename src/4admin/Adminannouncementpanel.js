import React, { useEffect, useState } from 'react'
import {AiFillEdit} from 'react-icons/ai'
import axios from 'axios'

function Adminannouncementpanel({item , deleteannouncement_local , filldata}) {

  const [confirmdelete, setconfirmdelete] = useState(false);
  const [optiontab, setoptiontab] = useState(false)
  const [announcement, setannouncement] = useState()

  useEffect(()=>{
    setannouncement(item.announcement_content) 
  },[])

    const deletefunction = async(e)=>{
       
            await axios.delete('https://api.kyusillid.online/api/deletadminannouncement/'+ e).then(
             
            ).catch();
            deleteannouncement_local(e)
            
       
       }

       const editannouncement = async()=>{
          const temp  = {
            announcement_content : announcement,
            "admin_an_id" : item.admin_an_id
          }

          console.log(JSON.stringify(temp ))
          await axios.post('https://api.kyusillid.online/api/editadminannouncement' , temp ).then(
            alert("Successfully edited")
          ).catch(error=> console.log(error.data))

          setedit(false)
          filldata();
       }

       const localise = (iso)=>{
 
        const date = new Date(`${iso}Z`);
        const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = date.toLocaleString(undefined, options);
        return formattedDate;
       }

       const [edittab, setedit] = useState(false)

  return (
    <div className='tertiary borderradius-lg padding12'>

        <div className="flex"><h4>{localise(item.created_at)}</h4> <p>&nbsp;, posted by&nbsp;</p><h4>{item.firstname} {item.middle} {item.lastname}</h4>  
            {item.isedited === 1 && 
            <p> &nbsp; {` (updated at ${localise(item.updated_at)})`} </p>} 
        <div className='marginleftauto relative'>
          <AiFillEdit  onClick={()=>setoptiontab(!optiontab)}/>

          {optiontab &&
               <div className='padding12 borderradius-md tertiary optiontab flex'>
             

                <ul className='flex'>
                  <li>
                    <button className='commonbutton secondary lighttext divcenter' onClick={()=>{setedit(true); setoptiontab(false)}}>Edit</button>
                  </li>
                  <li>{!confirmdelete ? 
                  <button className='commonbutton secondary lighttext' onClick={()=>setconfirmdelete(true)}>Delete</button> 
                :
                <button className='commonbutton warning lighttext' onClick={(e)=>{deletefunction(item.admin_an_id)}}>Confirm Delete?</button>}</li>
                </ul>
             </div>
          }
       
        </div>
    </div>
    <hr />
       {!edittab?
        <div className='padding12 margintop12'>
        {item.announcement_content}
</div>
:
<div className='padding12 margintop12'>
<textarea name="" id="" required cols="30" rows="3" className='commontextarea primaryborder' value={announcement} onChange={(e)=>{setannouncement(e.target.value)}} placeholder='Enter content...'></textarea>
  <div className='flex'><button className="commonbutton secondary lighttext" onClick={editannouncement}>Save</button>
  <button className="commonbutton secondary lighttext" onClick={()=>{setedit(false)}}>Cancel</button></div>
</div>}


    </div>
  )
}

export default Adminannouncementpanel