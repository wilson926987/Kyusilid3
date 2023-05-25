import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { updatelistContext } from '../Globalcontext'
import { useContext } from 'react';
import { userInfoContext } from '../Globalcontext';

function Adminlog() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {userinfo} = useContext(userInfoContext)
  const [studlistlog, setstudlistlog] = useState([])
  const {setupdatelist} = useContext(updatelistContext)
 const [classlistlog, setClasslistlog] = useState()


  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://api.kyusillid.online/api/getadminlog').then(
      response => {

        setData(response.data.adminlog)
        setstudlistlog(response.data.studlog)
        setClasslistlog(response.data.classlistlog)
      
      }
    ).catch();
  }, []);


 const loadstud = (content) =>{
      const temp = JSON.parse(content)
      console.log(JSON.stringify(temp))

      const temp2 = {
        "acc_id" : userinfo.user.acc_id,
        "action" : "studentlist import"
      }
    

      axios.post('https://api.kyusillid.online/api/loadimport' ,temp).then(
        response=> {

          setstudlistlog(response.data)

          axios.put('https://api.kyusillid.online/api/adminlog', temp2).catch(error => console.log(error.data))

          navigate('/kyusilidAdmin/updateliststud')
       
        }
      ).catch()

  }
 

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const [showTextbox, setShowTextbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const filteredData = data.filter(item => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return (
      searchRegex.test(item.firstname) ||
      searchRegex.test(item.middle) ||
      searchRegex.test(item.lastname) ||
      searchRegex.test(item.created_at)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className='search3'>
        <input
          type="text"
          placeholder='Search by Name or Date/Time'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <h3>Activity Log</h3>
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

      <table class=" tertiary borderradius-lg table col-lg-7">
        <thead>
          <tr className='primary'>
            <th>Name</th>
            <th>Date and Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems !== undefined &&  currentItems.map((item, index) => (
            <tr key={index}>
              <td data-label="Name">{item.firstname} {item.middle} {item.lastname}</td>
              <td data-label="date">{item.created_at}</td>
              <td data-label="In">{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
  {currentPage > 1 && (
    <button className="commonbutton secondary lighttext" onClick={() => paginate(currentPage - 1)}>Previous</button>
  )}
  {pageNumbers
    .slice(
      Math.max(currentPage - 2, 0),
      Math.min(currentPage + 1, totalPages)
    )
    .map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => paginate(pageNumber)}
        className={currentPage === pageNumber ? "active commonbutton primary lighttext " : "commonbutton secondary lighttext"}
      >
        {pageNumber}
      </button>
    ))}
  {currentPage < totalPages && (
    <button className="commonbutton secondary lighttext" onClick={() => paginate(currentPage + 1)}>Next</button>
  )}
</div>


<hr />
<hr />

<div className='margintop12'>

      <div>
        <h3>Studentlist Update Log</h3>
      </div>

      <table className='tertiary borderradius-md padding12 col-lg-7 margintop12'>

        <thead className='primary'> 
          <tr>
            <td>Account</td>
            <td>Updated at</td>
            <td colSpan={2}>Action</td>
            </tr>


        </thead>
          {studlistlog !== undefined && studlistlog.map((item, key)=>(
            <tr key={key}>
              <td className='padding12'>{item.acc_email}</td>
              <td className='padding12'>{item.created_at}</td>
              <td > <button className='commonbutton secondary lighttext smallfont' onClick={()=>{setupdatelist(JSON.parse(item.result_content)); navigate('/kyusilidAdmin/updateliststud')}}>view</button></td>
              <td > <button className='commonbutton secondary lighttext smallfont'  onClick={()=>{loadstud(item.import_content)}}>load</button></td>
           
           
            </tr>

          ))}
      </table>

</div > 


<hr />
<hr />

<div className='margintop12'>

  <h3>Classlist Import log</h3>

  <table className='margintop12 tertiary col-lg-7 borderradius-md'>
    <thead className='primary'>
      <tr>
        <td>Account</td>
        <td>Updated at</td>
        <td colSpan={2}>Action</td>
      </tr>
    </thead>
    <tbody>
      {classlistlog!== undefined && classlistlog.map((item, key)=>(

        <tr key={key}>

          <td className='padding12'> {item.acc_email}</td>
          <td className='padding12'>{item.created_at}</td>
          <td  > <button className='commonbutton secondary lighttext smallfont'  >view</button></td>
          <td  > <button className='commonbutton secondary lighttext smallfont'  >load</button></td>
           
           
        </tr>
      ))}
    </tbody>

  </table>



</div>
 




    </div>
  );
}

export default Adminlog;



