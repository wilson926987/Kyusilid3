import React, { useState } from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";


function Accountsstud() {
  const [data, setData] = useState([
    { studnum: '20-2901', lname: 'Capistrano', fname: 'Wilson Diego', mname:'Santos', course:'BSIT', sec:'SBIT4F' },
    { studnum: '20-2902', lname: 'Libot', fname: 'Ronald Carlo', mname:'Nargatan', course:'BSIT', sec:'SBIT4J' },
    { studnum: '20-2903', lname: 'Acotin', fname: 'Carlo', mname:'Roxas', course:'BSIT', sec:'SBIT4C' },
    { studnum: '20-2904', lname: 'Encarnado', fname: 'Aira Mae', mname:'Si', course:'BSIT', sec:'SBIT4H' },
    { studnum: '20-2905', lname: 'Olegario', fname: 'Niño', mname:'Nebres', course:'BSIT', sec:'SBIT4P'},

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
     
     <div className='marginlass'><h4>Student Accounts Table</h4></div>
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
            <th>Student Number</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Course</th>
            <th>Section</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
        {filteredData.map((item, index) => (
  <tr key={index}>
    <td data-label="Student Number">{item.studnum}</td>
    <td data-label="Last Name">{item.lname}</td>
    <td data-label="First Name">{item.fname}</td>
    <td data-label="Middle Name">{item.mname}</td>
    <td data-label="Course">{item.course}</td>
    <td data-label="Section">{item.sec}</td>
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

export default Accountsstud;