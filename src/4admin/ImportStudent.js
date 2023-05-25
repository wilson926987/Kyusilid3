import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userInfoContext } from '../Globalcontext';
import { BeatLoader } from 'react-spinners';
import{AiFillWarning} from 'react-icons/ai'
import { updatelistContext } from '../Globalcontext';

function ImportStudent({ setcreatestudmodal}) {
  const [file, setFile] = useState(null);
  const [loader, setloader] = useState(false);
  const[message , setmessage] = useState(true)
  const {setupdatelist} = useContext(updatelistContext)

  const {userinfo} = useContext(userInfoContext)
  const navigate =useNavigate();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    const temp2 = {
      "acc_id" : userinfo.user.acc_id,
      "action" : "studentlist import"
    }
    

    axios.post('https://api.kyusillid.online/api/import-excel', formData)
      .then(response => {
        
          
          
          setupdatelist(response.data.updatelist);
          setcreatestudmodal(false);
          axios.put('https://api.kyusillid.online/api/adminlog', temp2).catch(error => console.log(error.data))

          navigate('/kyusilidAdmin/updateliststud')
        
      })
      .catch(error => {
        console.error(error.data);
        setmessage(false)
      });
  }


  function handleImportClicktest() {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userinfo.user.acc_id)

    const temp2 = {
      "acc_id" : userinfo.user.acc_id,
      "action" : "studentlist import"
    }
    

    axios.post('https://api.kyusillid.online/api/import-exceltemp', formData)
      .then(response => {
        
          
          console.log(response.data)
          setupdatelist(response.data.updatelist);
          setcreatestudmodal(false);
          axios.put('https://api.kyusillid.online/api/adminlog', temp2).catch(error => console.log(error.data))

          navigate('/kyusilidAdmin/updateliststud')
        
      })
      .catch(error => {
        console.error(error.data);
        setmessage(false)
      });
  }







  return (

    <div className=' padding12 relative'>


    {!loader ? 
     <div className="flex">
     <div className='Import-file tertiary borderradius-lg padding12'>
      <div className='Import-file-container'>
      <h1>IMPORT STUDENTS FILE</h1>
        <input className='Choose-File commonbutton secondary lighttext width100' type="file" onChange={handleFileChange} />
        </div>
        </div>
       
        <div className='import-button'>
        <button className='commonbutton secondary lighttext width100' onClick={()=>{handleImportClicktest(); setloader(true)}}>Import</button>
        </div>
     </div>
     :
     <div className="flex loadercontainer width100">
    
          {message ? <BeatLoader color="#6893ee" /> : <AiFillWarning/>}
          <h1>{message ? "Updating Student list" : "Upload failed"}</h1>
       
      
     </div>
  
  
  }



    
    </div>

  );
}

export default ImportStudent;
