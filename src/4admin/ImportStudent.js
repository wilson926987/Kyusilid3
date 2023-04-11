import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userInfoContext } from '../Globalcontext';

function ImportStudent({setupdatelist, setcreatestudmodal}) {
  const [file, setFile] = useState(null);

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
        if (response.data.success) {
          alert('Import successful!');
          setupdatelist(response.data.updatelist);
          setcreatestudmodal(false);
          axios.put('https://api.kyusillid.online/api/adminlog', temp2).catch(error => console.log(error.data))



          navigate('updateliststud')
        }
      })
      .catch(error => {
        console.error(error);
        alert('Import failed!');
      });
  }

  return (
    <div className='flex padding12'>
    <div className='Import-file tertiary borderradius-lg padding12'>
    <div className='Import-file-container'>
    <h1>IMPORT STUDENT FILE</h1>
      <input className='Choose-File commonbutton secondary lighttext width100' type="file" onChange={handleFileChange} />
      </div>
      </div>
     
      <div className='import-button'>
      <button className='commonbutton secondary lighttext width100' onClick={handleImportClick}>Import</button>
      </div>
      
      </div>
  );
}

export default ImportStudent;
