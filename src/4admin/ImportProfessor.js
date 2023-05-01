import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userInfoContext } from '../Globalcontext';
import { BeatLoader } from 'react-spinners';
import{AiFillWarning} from 'react-icons/ai'

function ImportProfessor({setupdatelist, setcreateproffmodal}) {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const {userinfo} = useContext(userInfoContext)
  const [loader, setloader] = useState(false);
  const[message , setmessage] = useState(true)

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);
    const temp ={
      "acc_id": userinfo.user.acc_id,
      "action" : "professor list import"
    }


    axios.post('https://api.kyusillid.online/api/import-prof', formData)
    .then(response => {
      console.log(response.data)
      if (response.data.success) {
        
        setupdatelist(response.data.updatelist);
        setcreateproffmodal(false);

        axios.put('https://api.kyusillid.online/api/adminlog', temp).catch(error => console.log(error.data))


        navigate('updatelistproff')
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
      <h1>IMPORT PROFESSOR FILE</h1>
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
          <h1>{message ? "Updating Professor list" : "Upload failed"}</h1>
       
      
     </div>
  
  
  }



    
    </div>


  );
}

export default ImportProfessor;
