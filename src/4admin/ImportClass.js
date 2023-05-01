import React, { useContext, useState } from 'react';
import axios from 'axios';
import { userInfoContext } from '../Globalcontext';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import{AiFillWarning} from 'react-icons/ai'

function ImportClass({setupdatelist , setcreateclassmodal}) {
  const [file, setFile] = useState(null);
  const {userinfo} = useContext(userInfoContext)
  const [loader, setloader] = useState(false);
  const[message , setmessage] = useState(true)


  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }
  const navigate = useNavigate();

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    let temp = {
      "acc_id" : userinfo.user.acc_id,
      "action" : "class import"
    }

  
    axios.post('https://api.kyusillid.online/api/import-class', formData)
      .then(response => {
      
        if (response.data.success) {
         
          console.log(response.data)
          setupdatelist(response.data.updatelist);
          setcreateclassmodal(false);
          navigate('updatelist');


          axios.put('https://api.kyusillid.online/api/adminlog', temp).catch(error => console.log(error.data))


        }
      })
      .catch(error => {
        console.error(error.response.data);
        setmessage(false)
       
      });
  }

  return (
    <div className=' padding12 relative'>


      {!loader ? 
       <div className="flex">
       <div className='Import-file tertiary borderradius-lg padding12'>
        <div className='Import-file-container'>
        <h1>IMPORT CLASS FILE</h1>
          <input className='Choose-File commonbutton secondary lighttext width100' type="file" onChange={handleFileChange} />
          </div>
          </div>
         
          <div className='import-button'>
          <button className='commonbutton secondary lighttext width100' onClick={()=>{handleImportClick(); setloader(true)}}>Import</button>
          </div>
       </div>
       :
       <div className="flex loadercontainer width100">
      
            {message ? <BeatLoader color="#6893ee" /> : <AiFillWarning/>}
            <h1>{message ? "Updating Classlist" : "Upload failed"}</h1>
         
        
       </div>
    
    
    }


  
      
      </div>
  );
}

export default ImportClass;
