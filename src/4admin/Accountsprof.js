import React, { useContext, useState } from 'react'
import { FcEmptyTrash } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { accountlistContext } from '../Globalcontext';


function Accountsprof() {
  const {accountlist} = useContext(accountlistContext);



  const [showTextbox, setShowTextbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleView = (index) => {
    setShowTextbox(!showTextbox);
  };

 

 
  return (
    
    <div className=''>
     
     <div className='marginlass'><h4>Professor Accounts Table</h4></div>
      <div class="search marginlas">
        
        <input
          type="text"
          placeholder="Search by name"
          name="search"

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
        
            <th> Name</th>
         
  
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
        {accountlist.proflist.map((item, index) => (
  <tr key={index}>
    <td data-label="Namer">{item.name}</td>
  

    <td>
      <button
       
      className='Dele buttonstud2'
      ><FcEmptyTrash /> Delete</button>

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