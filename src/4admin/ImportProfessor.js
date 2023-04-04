import React, { useState } from 'react';
import axios from 'axios';

function ImportProfessor() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://api.kyusillid.online/api/import-prof', formData)
    .then(response => {
      console.log(response.data)
      if (response.data.success) {
        alert('Import successful!');
      }
    })
    .catch(error => {
      console.error(error.response.data);
      alert('Import failed!');
    });
  }

  return (
    <div className='flex padding12'>
    <div className='Import-file tertiary borderradius-lg padding12'>
    <div className='Import-file-container'>
    <h1>IMPORT PROFESSOR FILE</h1>
      <input className='Choose-File commonbutton secondary lighttext width100' type="file" onChange={handleFileChange} />
      </div>
      </div>
     
      <div className='import-button'>
      <button className='commonbutton secondary lighttext width100' onClick={handleImportClick}>Import</button>
      </div>
      
      </div>
  );
}

export default ImportProfessor;
