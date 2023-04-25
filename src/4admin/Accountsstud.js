import React, { useContext, useState } from 'react'

import { accountlistContext , currentdeptContext} from '../Globalcontext';
import axios from 'axios';

function Accountsstud() {

  const {accountlist , setaccountlist} = useContext(accountlistContext);
  const {currentdept} = useContext(currentdeptContext)

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




  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };





  return (
    
    <div className=''>
     
     <div className='marginlass'><h4>Student Accounts Table</h4></div>
      <div class="search marginlas">
        

        <input
          type="text"
          placeholder="Search by name"
          name="search"
          onChange={handleSearch}
          
        />
        
        
        
      </div>
      
      


   
 <div className='tertiary borderradius-lg padding12'>
     
 
      


      <table class="table col-lg-12">
        
        <thead className='primary'>
          
          
          
          <tr>
            <th>Student Number</th>
           <th>Name</th>
      
           
            {/* <th>Action</th> */}

          </tr>
        </thead>
        <tbody>
  {accountlist !== undefined && (
    <>
      {accountlist.studentlist
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => (
          <tr key={index}>
            <td data-label="Student Number">{item.studnum}</td>
            <td data-label="Last Name">{item.name}</td>

            <td>
            {/* {item.active ? 
                  <button className='commonbutton secondary lighttext' onClick={()=>{handleativate( item.acc_id , 0) }}> Active </button>
                  :
                  <button className='commonbutton background darktext' onClick={()=>{handleativate( item.acc_id , 1)}}> Deactivated </button>
                } */}

             
            

             
            </td>
          </tr>
        ))}
    </>
  )}
</tbody>

      </table>

  </div>
    </div>
  );
}

export default Accountsstud;