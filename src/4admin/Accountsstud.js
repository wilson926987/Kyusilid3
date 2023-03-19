import React, { useContext, useEffect, useState } from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { accountlistContext } from '../Globalcontext';


function Accountsstud() {

  const {accountlist} = useContext(accountlistContext);


  
 useEffect(()=>{
    console.log(accountlist)
 },[])

 

  const [showTextbox, setShowTextbox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleView = (index) => {
    setShowTextbox(!showTextbox);
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
    <input className='Inputext' type="text" />
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
           <th>Name</th>
      
           
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
  {accountlist !== undefined && (
    <>
      {accountlist.studentlist
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => (
          <tr key={index}>
            <td data-label="Student Number">{item.studnum}</td>
            <td data-label="Last Name">{item.name}</td>

            <td>
              <button className="Dele buttonstud2">
                <FcEmptyTrash /> Delete
              </button>

              <button
                className="Edit margin10l buttonstud1"
                onClick={() => {
                  setSelectedRow(index);
                  setShowTextbox(true);
                }}
              >
                <FiEdit /> Edit
              </button>
            </td>
          </tr>
        ))}
    </>
  )}
</tbody>

      </table>

  </div>
    </div>
  );
}

export default Accountsstud;