import React, { useState } from 'react';
import axios from 'axios';

function ExcelImporter() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleImportClick() {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:8000/api/import-excel', formData)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data));
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImportClick}>Import</button>
    </div>
  );
}

export default ExcelImporter;
