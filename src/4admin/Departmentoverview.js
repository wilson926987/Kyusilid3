import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
//import AreaChart from '../1general/components/areachart'
import { FaUserGraduate } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FiUsers } from 'react-icons/fi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';





import { deptInfoContext } from '../Globalcontext';


function Departmentoverview() {

 const {departmentinfo} = useContext(deptInfoContext);
 const [searchTerm, setSearchTerm] = useState('');
 const [adminlist ,setadminlist] = useState()


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



useEffect(()=>{
  if(departmentinfo.depadminlist !== undefined){
    setadminlist(departmentinfo.depadminlist.map(item=>(
      {'name': item.firstname + ' ' + item.lastname + ' ' + item.suffix}
    )))
  }
 
},[departmentinfo.depadminlist])


  return (
    departmentinfo != undefined ?



    <div className="row">
    <div className="col-lg-12 displaynone ">
      <div className="tertiary borderradius-md paneladd " >

        </div> 
    </div>

   <div className="col-lg-6">
    <div className="row">
      <div className="col-lg-6 margintop12 ">
        
      <div className="tertiary borderradius-md overviewpanel1 padding1" >
          <h4><SiGoogleclassroom/>    Classes</h4>
          {/* <AreaChart></AreaChart> */}
          <p>
          <div className='positionr'>
            <ul>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 4th year : {departmentinfo.fourthyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 3rd year  : {departmentinfo.thirdyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 2nd year  : {departmentinfo.secondyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 1st year  : {departmentinfo.firstyear}</li>
            </ul>
            </div>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12 ">
      <div className="tertiary borderradius-md overviewpanel1 padding1" >
          <h4><FiUsers/>  Accounts</h4>
          <p>
            <ul>
            <br></br>
            <div className='positionr'>
              <li><GiTeacher/>  Professors : {departmentinfo.profcount}</li>
              <br></br>
              <li><FaUserGraduate/>  Students : {departmentinfo.studcount}</li>    
              </div>       
            </ul>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12 displaynone">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Events</h4>
         
          </div> 
      </div>
      <div className="col-lg-6 margintop12 displaynone">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Subjects</h4>
         
          </div> 
      </div>
    </div>
  </div>



  <div className="col-lg-6">

    <div className="row">
    <div className="col-lg-12 margintop12">
        <div className="tertiary borderradius-md overviewlist" >
         <div className='flex'> <h4>Department Admin</h4>  
         <input
           type="text"
            placeholder="Search by name"
            className="search1"
            onChange={handleSearch}
/>
</div>

          <ul className='margintop12'>


           { adminlist != undefined && adminlist.filter(searchitem=>
              searchitem.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm=== ''
           ).map((item, key)=>(
                 <li key={key}>
                  <div className="personpanel">
                    <div>
                      <img src={avatar} alt="" /></div>
                    <div className="personpanelcontent">
                      <h5>{item.name}</h5>
                      
                    </div>
                  </div>
               </li>
            ))} 
          
       
           
         
          </ul>  
                       
        </div> 
  </div>

  
    </div>
       
  </div>




    </div>
    :
    <div>loading department overview</div>
   
   
    
  )

}
 
 


  


export default Departmentoverview