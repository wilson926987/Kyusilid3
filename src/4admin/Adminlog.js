import React, { useState } from 'react'
<<<<<<< HEAD

function Adminlog() {
  const [data, setData] = useState([
    { name: 'Wilson Capistrano', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' },
    { name: 'Ronald Carlo Libot', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' },
    { name: 'Carlo Acotin', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' },
    { name: 'Aira Mae Encarnado', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' },
    { name: 'Nino Olegario', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' },
    { name: 'Melrose Lastimosa', date: '01-24-2023', In: '10:00pm', Out:'11:59pm'},
    { name: 'Cheyt Feliciano', date: '01-24-2023', In: '10:00pm', Out:'11:59pm' }
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
    <div>
      
      <div class="search">
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
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>date</th>
            <th>In</th>
            <th>Out</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
        {filteredData.map((item, index) => (
  <tr key={index}>
    <td data-label="Name">{item.name}</td>
    <td data-label="date">{item.date}</td>
    <td data-label="In">{item.In}</td>
    <td data-label="Out">{item.Out}</td>
    <td>
      <button
      className='Dele'
      onClick={() => {
        const newData = [...data];
        newData.splice(index, 1); 
        setData(newData); 
      }}>Delete</button>


    </td>
  </tr>
))}

        </tbody>
      </table>

  
    </div>
  );
=======
import { useNavigate } from 'react-router-dom';
import LoginHistoryProf from './LoginHistoryProf';





function Adminlog() {

  const [accountsnav, setaccountsnav] = useState(false)

  const navigate = useNavigate()
  function isactive(e){

    return true

 }
 
 return (
<div>
  <LoginHistoryProf></LoginHistoryProf>
  </div>
 )
 

>>>>>>> d45d215c84dd23a43639ac11f0cb36aea0ff1df8
}
 
 


  


export default Adminlog