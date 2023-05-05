import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminYearfilterContext,  adminclasslistContext , adminSampleClassContext, currentclassContext, forceviewContext, userInfoContext } from '../Globalcontext'
import axios from 'axios'

function Classespage() {
  const navigate = useNavigate()
  const { adminclasslist } = useContext(adminclasslistContext);
  const {yearlistfilter} = useContext(adminYearfilterContext);
  const {setsampleclassid} = useContext(adminSampleClassContext)
  const [searchValue, setSearchValue] = useState("");
  const {setcurrentclass} = useContext(currentclassContext)
  const {setforceview} = useContext(forceviewContext)
  const {userinfo} = useContext(userInfoContext)
  

  useEffect(()=>{
    if(adminclasslist === undefined){
      navigate('/')
    }
  },[adminclasslist])



  const filteredList = adminclasslist.filter(item => {
    return (
      item.sub_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.profname.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const setclassview = (e)=>{
    axios.get('https://api.kyusillid.online/api/getcurrentclass/' + e).then(
      response=>{
          setcurrentclass(response.data)
          setforceview(true)
          navigate('/classes/sampleclass')
      }
    )
  }

  return (
    <div className='tertiary borderradius-lg padding12'>

      <div className="flex">
        <div>
          <h4>Active Classes</h4>
       
        </div>

        <div className='search'>
        <input
        type="text"
        placeholder="Search by name or subject"
        name="search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      
      
        
        
       </div> 
      </div>
      

      <div className=" margintop12 width100">
        <table className='width100' cellSpacing={0}>
          <thead className='primary'>

            {/* <th>Class Id</th> */}
            <th>Year and Section</th>
            <th>Subject</th>
            <th>Professor</th>
            <th>Schedule</th>
            <th>Number of Students</th>
            <th> &nbsp;</th>


          </thead>
          <tbody>

          {filteredList.filter(
            item1 => item1.yearlvl === yearlistfilter
          ).map((item, key) => (
            <tr key={key}>
              {/* <td>{item.classes_id}</td> */}
              <td>{item.yearsection}</td>
              <td>{item.sub_name}</td>
              <td>{item.profname}</td>
              <td>{item.schedule}</td>
              <td>{item.studentcount}</td>
             
              
       {userinfo.admintype !== 3 &&
              <td> <button className="secondary lighttext commonbutton" onClick={() => {setclassview(item.classes_id) }}>Class Info</button></td>
       }
            </tr>
          ))}
          

          </tbody>


        </table>
      </div>



    </div>
  )
}

export default Classespage
