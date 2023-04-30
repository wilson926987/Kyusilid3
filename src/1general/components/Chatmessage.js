import React, { useContext, useState, useEffect } from 'react'
import { userInfoContext } from '../../Globalcontext'
import { BsFillTrashFill } from 'react-icons/bs'
import axios from 'axios'

function Chatmessage({ item }) {
  const { userinfo } = useContext(userInfoContext)
  const [isdeleted, setisdeleted] = useState(item.isdeleted)
  const [profilePic, setProfilePic] = useState('')
  const [ws, setWs] = useState(null)

  useEffect(() => {
    async function fetchProfilePic() {
      try {
        const response = await axios.get(
          `https://api.kyusillid.online/api/getprofilepic/${item.acc_id}`
        )
        setProfilePic(response.data.profile_pic)
        console.log(response.data.profile_pic)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfilePic()
  }, [userinfo.user.acc_id])

  useEffect(() => {
    // Create a new WebSocket connection
    const newWs = new WebSocket('wss://kyusillid.online')
    // Set the WebSocket connection to state
    setWs(newWs)
    // When the component unmounts, close the WebSocket connection
    return () => {
      newWs.close()
    }
  }, [])

  useEffect(() => {
    if (ws) {
      // Listen for messages from the WebSocket server
      ws.addEventListener('message', (event) => {
        const message = JSON.parse(event.data)
        // Check if the message is a delete message for this item
        if (
          message.message_id === item.message_id &&
          message.type === 'delete'
        ) {
          setisdeleted(true)
        }
      })
    }
  }, [ws, item.message_id])

  const handledelete = async () => {
    if (window.confirm('delete this message? ') === true) {
      // Send a delete message to the WebSocket server
      ws.send(
        JSON.stringify({
          type: 'delete',
          message_id: item.message_id,
        })
      )
      // Optimistically update the UI to show that the message is deleted
      setisdeleted(true)
      try {
        // Make a request to the server to delete the message
        await axios.delete(
          'https://api.kyusillid.online/api/deletemessage/' + item.message_id
        )
      } catch (error) {
        console.error(error)
      }
    }
  }
  return (
  
  <div className={`${userinfo.user.acc_id== item.acc_id && 'mychat'} col-lg-12`}>
    <div className='chatmessage padding12 relative'>
   
        <div>
        <img src={profilePic} alt='' />
    
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