import React, { useContext, useState } from 'react';
import { FcEmptyTrash } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { accountlistContext , currentdeptContext} from '../Globalcontext';
import axios from 'axios';

function Accountsprof() {
  const { accountlist , setaccountlist} = useContext(accountlistContext);

  const [showTextbox, setShowTextbox] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleView = (index) => {
    setShowTextbox(!showTextbox);
  };
  const {currentdept} = useContext(currentdeptContext)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfs = accountlist.proflist.filter((prof) =>
    prof.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleativate= async (id , active)=>{
    const temp ={
      "acc_id" : id,
      "active" : active,
      "dep_id" : currentdept.dep_id
    }


    await axios.post('https://api.kyusillid.online/api/setuseractivate' , temp).then(
      response =>{
        setaccountlist(response.data);
        console.log(response.data)

      }
    ).catch();

  }

  return (
    <div className="">
      <div className="marginlass">
        <h4>Professor Accounts Table</h4>
      </div>
      <div class="search marginlas">
        <input
          type="text"
          placeholder="Search by name"
          name="search"
          onChange={handleSearch}
        />
      </div>

   

      <div className="tertiary borderradius-lg padding12">
        <table class="table col-lg-12">
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfs
            .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((item, index) => (
              
              <tr key={index}>
                <td data-label="Faculty">{item.faculty_id}</td>
                <td data-label="Name">{item.name}</td>
                <td>



                

                  {item.active ? 
                  <button className='commonbutton secondary lighttext' onClick={()=>{handleativate( item.acc_id , 0) }}> Active </button>
                  :
                  <button className='commonbutton background darktext' onClick={()=>{handleativate( item.acc_id , 1)}}> Deactivated </button>
                }

                  
                 

                 
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
