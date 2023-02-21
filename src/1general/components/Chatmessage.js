import React, { useContext, useState } from 'react'
import { userInfoContext } from '../../Globalcontext'
import {BsFillTrashFill} from 'react-icons/bs'
import axios from 'axios';


function Chatmessage({item}) {
    const {userinfo} = useContext(userInfoContext);
    const [isdeleted, setisdeleted] = useState(item.isdeleted);

    const handledelete = async()=>{
      
      if(window.confirm('delete this message? ')=== true){
    
        await axios.delete('https://api.kyusillid.online/api/deletemessage/' + item.message_id).then(
          setisdeleted(true)
        ).catch()

      }
   
    }


  return (
  
  <div className={`${userinfo.user.acc_id== item.acc_id && 'mychat'} col-lg-12`}>
    <div className='chatmessage padding12 relative'>
   
        <div>
        <img src="https://i.pravatar.cc/50" alt="" />
    
        </div>
           
  

        <div className='chatmessagecontent'>
            <div className="flex"><h5 className='marginleft12'>{userinfo.user.acc_id!== item.acc_id && item.firstname + " " + item.lastname }</h5> <p className='chatdate smallfont'> {item.created_at}</p></div>
            <p className={`padding12  borderradius-md ${userinfo.user.acc_id === item.acc_id && !isdeleted && !item.isdeleted ? 'primary' : 'background'}`}> {item.isdeleted || isdeleted ? item.firstname + " " + item.lastname +" has deleted a message" : item.message_content} </p>
             
        </div>

        {userinfo.user.acc_id=== item.acc_id && ( !item.isdeleted|| !isdeleted) &&
         <div className='deletechat'>
         <BsFillTrashFill className='activityname' onClick={handledelete}/>
        </div>
         }

       


   
       
    </div>
</div>
    
  
 
 
   
  )
}

export default Chatmessage