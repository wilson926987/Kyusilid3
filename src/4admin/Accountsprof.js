import React, { useState } from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";


function Accountsprof() {
  const [data, setData] = useState([
    { empid: '00827', lname: 'Capistrano', fname: 'Wilson Diego', mname:'Santos', dept:'IT', sub:'Capstone' },
    { empid: '00928', lname: 'Libot', fname: 'Ronald Carlo', mname:'Nargatan', dept:'IT', sub:'Practicum' },
    { empid: '00934', lname: 'Acotin', fname: 'Carlo', mname:'Roxas', dept:'IT', sub:'Object Oriented' },
    { empid: '00978', lname: 'Encarnado', fname: 'Aira Mae', mname:'Si', dept:'IT', sub:'Programming' },
    { empid: '00985', lname: 'Olegario', fname: 'Niño', mname:'Nebres', dept:'IT', sub:'Human Interactive'},

  ]);
  const [filteredData, setFilteredData] = useState(data);


  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setFilteredData(
      data.filter(d => d.name.toLowerCase().includes(searchTerm))
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
    
    <div className=''>
     
     <div className='marginlass'><h4>Professor Accounts Table</h4></div>
      <div class="search marginlas">
        
        <input
          type="text"
          placeholder="Search by name"
          name="search"
          onChange={handleSearch}
        />
        
        
        
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
   
 <div className='tertiary borderradius-lg padding12'>
     
 
      


      <table class="table col-lg-12">
        
        <thead>
          
          
          
          <tr>
            <th>Employee Number</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Department</th>
            <th>Subject</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
        {filteredData.map((item, index) => (
  <tr key={index}>
    <td data-label="Employee Number">{item.empid}</td>
    <td data-label="Last Name">{item.lname}</td>
    <td data-label="First Name">{item.fname}</td>
    <td data-label="Middle Name">{item.mname}</td>
    <td data-label="Department">{item.dept}</td>
    <td data-label="Subject">{item.sub}</td>
    <td>
      <button
       
      className='Dele buttonstud2'
      onClick={() => {
        const newData = [...data];
        newData.splice(index, 1); 
        setData(newData); 
      }}><FcEmptyTrash /> Delete</button>

      <button
      className='Edit margin10l buttonstud1'
       onClick={() => {
        setShowTextbox(true);
        setSelectedRow(index);
      }}><FiEdit /> Edit</button>
    </td>
  </tr>
))}

        </tbody>
      </table>

  </div>
    </div>
  );
}

export default Accountsprof;