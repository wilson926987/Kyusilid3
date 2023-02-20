

import React, { useContext, useEffect, useState } from "react";
import { currentclassContext } from "../../Globalcontext";

function MessagesPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const {currentclass} = useContext(currentclassContext)

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        text: message,
        time: new Date().toLocaleTimeString(),
        name: "You",
        profilePic: "https://i.pravatar.cc/50",
        isOwn: true
      }
    ]);
    setMessage("");
  };

  useEffect(()=>{
    console.log(currentclass)
  })



 

  return (


    <div className="main-message-container">
    <div className="sidebar-message primary borderradius-md">
    <h2>Classes</h2>
    <div className="group-names-container secondary borderradius-md">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="avatar"></img>
      <h3>{currentclass !== undefined && currentclass.sub_name}</h3>
     </div>
    
    </div>




    <div className="container-message">
      <div className="header-message primary borderradius-md">
        <h1>{currentclass !== undefined && currentclass.sub_name}</h1>
      </div>
      <section className="messages-section">
        {messages.map((message, index) => (
          <div
            className={
              message.isOwn ? "message right" : "message left"
            }
            key={index}
          >
            {!message.isOwn && (
              <img src={message.profilePic} alt="Profile Pic" />
            )}
            <div className="message-info">
              <h4>{message.name}</h4>
              <p>{message.text}</p>
              <span>{message.time}</span>
            </div>
            {message.isOwn && (
              <img src={message.profilePic} alt="Profile Pic" />
            )}
          </div>
        ))}
      </section>
      <section className="input-section">
        <input
          type="text"  
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
          // onKeyDownCapture={enterbutton}
        />
        <button className="btn-message primary borderradius-md" onClick={sendMessage}>Send</button>
      </section>
    </div>
  </div>
  );
}

export default MessagesPage;
