import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Adminlog() {
  const [data, setData] = useState([

  ]);
  const [filteredData, setFilteredData] = useState(data);


  useEffect(()=>{
      axios.get('https://api.kyusillid.online/api/getadminlog').then(
        response=> setFilteredData(response.data)
      ).catch();

      console.log(JSON.stringify(data))
  },[])


  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setFilteredData(
      data.filter(d => d.firstname.toLowerCase().includes(searchTerm))
    );
  };

  const [showTextbox, setShowTextbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleView = (index) => {
    setShowTextbox(!showTextbox);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    setSelectedRow(index);
    setShowTextbox(true);
  };
  return (
    <div>


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
<div className='persontable tertiary borderradius-lg padding12'>   
<div class="search">
<input
  type="text"
  placeholder="Search by name"
  name="search"
  onChange={handleSearch}
/>
</div>

      <table class="table width100">
        <thead className='primary'>
          <tr>
            <th>Name</th>
            <th>date</th>
            <th>In</th>
  

          </tr>
        </thead>
        <tbody>
        {filteredData !== undefined &&  filteredData.map((item, index) => (
  <tr key={index}>
    <td data-label="Name">{item.firstname} {item.lastname}</td>
    <td data-label="date">{item.created_at}</td>
    <td data-label="In">{item.created_at_time}</td>
  
  </tr>
))}

        </tbody>
      </table>
</div>
  
    </div>
  );
}
 
 


  


export default Adminlog