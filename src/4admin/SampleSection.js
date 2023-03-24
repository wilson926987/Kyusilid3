import { UndoRounded } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import { adminSampleClassContext } from '../Globalcontext'
import axios from 'axios';
import Classinfoitem from '../1general/components/Classinfoitem';

function SampleSection() {

  const {sampleclassid} = useContext(adminSampleClassContext)

  const [searchTerm, setSearchTerm] = useState('');

  const [personlist, setpersonlist] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }; 


  useEffect(()=>{
    if(personlist!== undefined && sampleclassid){
      axios.get('https://api.kyusillid.online/api/getpersonlist/' + sampleclassid.classes_id)
      .then(response => {
        setpersonlist(response.data)
      
      })
    }
 
      
  },[])

  return (
    <div>

      <div className='primary borderradius-md padding12'>
        <h3 className='margintop12'>{sampleclassid.sub_name}</h3>
        <h5>{sampleclassid.profname}</h5>
        <h5>{sampleclassid.yearsection}</h5>
        <h5>{sampleclassid.schedule}</h5>
      </div>


      <div className="persontable">
        <div className='classinfotitle'>
          <h4>Professors</h4>
        </div>
        {personlist !== undefined && personlist.filter(temp => {
          return temp.usertype === 'prof'
        }).map((personitem, key) => (
          <Classinfoitem key={key} personitem={personitem} />
        ))}
      </div>

      <div className="persontable">
        <div className='classinfotitle'>
          <div>
            <h4>Students</h4>
            <h6> {personlist !== undefined && personlist.filter(temp => {
              return temp.usertype === 'stud'
            }).length} total students</h6>
          </div>
        </div>
        <div className='search'>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {personlist !== undefined && personlist.filter(temp => {
          return temp.usertype === 'stud' 
        }).map((personitem, key) => (
          <Classinfoitem key={key} personitem={personitem} />
        ))}
      </div>
    </div>
  )
}

export default SampleSection