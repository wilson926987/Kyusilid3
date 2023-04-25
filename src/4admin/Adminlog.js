import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Adminlog() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredData, setFilteredData] = useState(data);
  
  useEffect(() => {
    axios.get('https://api.kyusillid.online/api/getadminlog').then(
      response => setData(response.data)
    ).catch();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.middle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.created_at.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const [showTextbox, setShowTextbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div>
      <div className='search3'>
        <input
          type="text"
          placeholder='Search by Name or Date/Time'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <h3>Admin Log</h3>
      </div>

      {showTextbox && (
        <div className='Editext'>
          <input className='Inputext' type="text" value={data[selectedRow].name} onChange={(event) => {
            const newData = [...data]; 
            newData[selectedRow].name = event.target.value;
            setData(newData); 
          }} />
          <button 
            className='Savee'
            onClick={() => {
              setShowTextbox(false);
              setSelectedRow(null);
            }}>Save</button>
          <button 
            className='Cancel'
            onClick={() => {
              setShowTextbox(false);
              setSelectedRow(null);
            }}>Cancel</button>
        </div>
      )}

      <table class=" tertiary borderradius-lg table col-lg-7">
        <thead>
          <tr className='primary'>
            <th>Name</th>
            <th>Date and Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData !== undefined &&  filteredData.map((item, index) => (
            <tr key={index}>
              <td data-label="Name">{item.firstname} {item.middle} {item.lastname}</td>
              <td data-label="date">{item.created_at}</td>
              <td data-label="In">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Adminlog;
