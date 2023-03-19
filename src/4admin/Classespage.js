import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminclasslistContext } from '../Globalcontext'


function Classespage() {
  const navigate = useNavigate()
  const { adminclasslist } = useContext(adminclasslistContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log(adminclasslist)
  }, [])

  const filteredList = adminclasslist.filter(item => {
    return item.sub_name.toLowerCase().includes(searchValue.toLowerCase())
  })

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='tertiary borderradius-lg padding12'>

      <div className="flex">
        <div>
          <h4>Active Classes</h4>
          <p className='smallfont'> Last Updated : September 2  by Juan dela Cruz</p>
        </div>

        <div className='search'>
        <input
          type="text"
          placeholder="Search by name"
          name="search"

        />
        
        
       </div> 
      </div>
      

      <div className="persontable margintop12 width100">
        <table className='width100' cellSpacing={0}>
          <thead className='primary'>

            <th>Class Id</th>
            <th>Year and Section</th>
            <th>Subject</th>
            <th>Professor</th>
            <th>Schedule</th>
            <th>Number of Students</th>
            <th></th>

          </thead>
          <tbody>

            {adminclasslist !== undefined &&
              <>
                {filteredList.map((item, key) => (
                  <tr key={key}>
                    <td>{item.classes_id}</td>
                    <td>{item.yearsection}</td>
                    <td>{item.sub_name}</td>
                    <td>{item.profname}</td>
                    <td>{item.schedule}</td>
                    <td>{item.studentcount}</td>
                    <td> <button className="secondary lighttext commonbutton" onClick={() => { navigate('/kyusilidAdmin/department/sections/samplesection') }}>View Class</button></td>
                  </tr>

                ))}

              </>


            }


          </tbody>


        </table>
      </div>



    </div>
  )
}

export default Classespage
