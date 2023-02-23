import React, { useState } from 'react'

function Classmarks() {
  const [data, setData] = useState([
    { name: 'Wilson Capistrano', date: '01-24-2023', status: 'Missed' },
    { name: 'Ronald Carlo Libot', date: '01-24-2023', status: 'Late' },
    { name: 'Carlo Acotin', date: '01-24-2023', status: 'On-Time' },
    { name: 'Aira Mae Encarnado', date: '01-24-2023', status: 'On-Time' },
    { name: 'Nino Olegario', date: '01-24-2023', status: 'Late' },
    { name: 'Melrose Lastimosa', date: '01-24-2023', status: 'Missed' },
    { name: 'Cheyt Feliciano', date: '01-24-2023', status: 'On-Time' }
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = status => {
    if (status === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(d => d.status === status));
    }
  };

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

  return (
    <div>
      <div class="Klase">
        <div class="all">
          <a href="#all" class="btn" onClick={() => handleFilter('All')}>
            <h4>50</h4>
            <h6>All</h6>
          </a>
        </div>

        <div class="on-Time">
          <a href="#" class="btn" onClick={() => handleFilter('On-Time')}>
            <h4>10</h4>
            <h6>On-Time</h6>
          </a>
        </div>

        <div class="Late">
          <a href="#Late" class="btn" onClick={() => handleFilter('Late')}>
            <h4>4</h4>
            <h6>Late</h6>
          </a>
        </div>
        <div class="Miss">
          <a href="#" class="btn" onClick={() => handleFilter('Missed')}>
            <h4>3</h4>
            <h6>Missed</h6>
          </a>
        </div>

      </div>

      <div class="search">
        <input
          type="text"
          placeholder="Search by name"
          name="search"
          onChange={handleSearch}
        />
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Passed</th>
            <th>Status</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td data-label="Name">{item.name}</td>
              <td data-label="Date Passed">{item.date}</td>
              <td data-label="Status">{item.status}</td>
              <td data-label="#">
                <button class="view">
                  View
                </button>

                <button class="view" onClick={() => handleView(index)}>
                  Grade
                </button>

                {showTextbox && (
          <div class="extra-textbox" >
            <input type="text" class="GradeText" placeholder="__/100"></input>
          </div>
        )}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classmarks;