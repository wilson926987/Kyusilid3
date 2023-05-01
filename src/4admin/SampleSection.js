import { UndoRounded } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import { adminSampleClassContext } from '../Globalcontext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function SampleSection() {

  const {sampleclassid} = useContext(adminSampleClassContext)
  const navigate= useNavigate()
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

   






   

 
    </div>
  )
}

export default SampleSection