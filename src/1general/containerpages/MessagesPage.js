import React, { useContext, useEffect, useRef, useState } from "react";
import { currentclassContext, userInfoContext } from "../../Globalcontext";
import {MdSend} from 'react-icons/md'
import axios from "axios";
import Chatmessage from "../components/Chatmessage";


function MessagesPage() {
  const {currentclass} = useContext(currentclassContext)
  const {userinfo} = useContext(userInfoContext);
  const bottomRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchNewMessages = async () => {
    try {
      const response = await fetch(`https://api.kyusillid.online/api/getmessages/${currentclass.classes_id}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
      fetchNewMessages();
  },[])

  const handlesubmit = async ()=>{

    if(message !== undefined && message !== '' ){
      const temp={
      "acc_id" : userinfo.user.acc_id,
      "classes_id" : currentclass.classes_id,
      "message_content" : message 
      }

      await axios.put('https://api.kyusillid.online/api/createmessage' , temp)
      .then( response=>
        setMessages([...messages , response.data])

      ).catch();
      setMessage('')
    }
    
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlesubmit();
    }
  };

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchNewMessages();
    }, 5000); // fetch new messages every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="messagespage">
      <div className="width100 row">
        {messages.map((item, key)=>(
          <Chatmessage key={key} item={item}/>
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div className="relative">
        <textarea name="Text1" cols='1' rows="2" placeholder='Enter comment' value={message} className='commontextarea primaryborder margintop12' onChange={(e)=> {setMessage(e.target.value)}} onKeyDown={handleKeyDown}></textarea>
        <div className='sendbutton' onClick={handlesubmit}> <MdSend/></div>
      </div>
    </div>
  );
}

export default MessagesPage;