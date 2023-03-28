import React, { useState } from 'react';
import axios from 'axios';

function ImportStudent() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://api.kyusillid.online/api/import-excel', formData)
      .then(response => {
        if (response.data.success) {
          alert('Import successful!');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Import failed!');
      });
  }

  return (
    <div>
      <h1>Import Student</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImportClick}>Import</button>
    </div>
  );
}

export default ImportStudent;
