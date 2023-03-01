import React, { useState } from 'react'

function LoginHistoryProf() {
  const [data, setData] = useState([
    { name: 'Wilson Capistrano', date: '01-24-2023', course: 'BSIT', In: '10:00pm', Out:'11:59pm' },
    { name: 'Ronald Carlo Libot', date: '01-24-2023', course: 'BSENTREP',  In: '10:00pm', Out:'11:59pm' },
    { name: 'Carlo Acotin', date: '01-24-2023',course: 'BSA',  In: '10:00pm', Out:'11:59pm' },
    { name: 'Aira Mae Encarnado', date: '01-24-2023',course: 'BSIT', In: '10:00pm', Out:'11:59pm' },
    { name: 'Nino Olegario', date: '01-24-2023', course: 'BSECE', In: '10:00pm', Out:'11:59pm' },
    { name: 'Melrose Lastimosa', date: '01-24-2023',course: 'BSIE',  In: '10:00pm', Out:'11:59pm'},
    { name: 'Cheyt Feliciano', date: '01-24-2023',course: 'BSIT', In: '10:00pm', Out:'11:59pm' }
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCourse, setSelectedCourse] = useState("All Courses");


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


<br />
<br/>

      <select
      className='Dropdoowwnn'
      name="course"
  value={selectedCourse}
  onChange={(event) => setSelectedCourse(event.target.value)}>
  <option className='Dropp' value="All Courses">All Courses</option>
  <option className='Dropp' value="BSIT">BSIT</option>
  <option className='Dropp' value="BSENTREP">BSENTREP</option>
  <option className='Dropp' value="BSA">BSA</option>
  <option className='Dropp' value="BSECE">BSECE</option>
  <option className='Dropp' value="BSIE">BSIE</option>
</select>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>date</th>
            <th>Course</th>
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
    <td data-label="date">{item.course}</td>
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
}

export default LoginHistoryProf;