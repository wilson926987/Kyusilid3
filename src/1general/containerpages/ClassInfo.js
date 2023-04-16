import React, { useContext, useEffect, useState } from 'react';
import Classinfoitem from '../components/Classinfoitem';
import axios from 'axios';
import { currentclassContext, personlistContext } from '../../Globalcontext';

function ClassInfo() {
  const { personlist } = useContext(personlistContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = personlist?.filter(
    (personitem) =>
      personitem.usertype === 'stud' &&
      personitem.firstname
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="persontable">
        <div className='classinfotitle'>
          <h4>Professors</h4>
        </div>
        {personlist !== undefined &&
          personlist
            .filter((temp) => temp.usertype === 'prof')
            .map((personitem, key) => (
              <Classinfoitem key={key} personitem={personitem} />
            ))}
      </div>

      <div className="persontable">
        <div className='classinfotitle'>
          <div>
            <h4>Students</h4>
            <h6>
              {' '}
              {personlist !== undefined &&
                personlist.filter((temp) => temp.usertype === 'stud').length}{' '}
              total students
            </h6>
          </div>
        </div>

        <div className='search3'>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

        {filteredStudents &&
          filteredStudents.map((personitem, key) => (
            <Classinfoitem key={key} personitem={personitem} />
          ))}
      </div>
    </div>
  );
}

export default ClassInfo;
