import React, { useState } from 'react';
import axios from 'axios';

function ImportClass() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://api.kyusillid.online/api/import-class', formData)
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
    <div>
      <h1>Import Class</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImportClick}>Import</button>
    </div>
  );
}

export default ImportClass;
