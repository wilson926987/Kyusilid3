import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
//import AreaChart from '../1general/components/areachart'
import { FaUserGraduate } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FiUsers } from 'react-icons/fi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';





import { deptInfoContext } from '../Globalcontext';
import { useNavigate } from 'react-router-dom';


function Departmentoverview() {

 const {departmentinfo} = useContext(deptInfoContext);
 const [searchTerm, setSearchTerm] = useState('');
 const navigate = useNavigate();

 


  return (
    departmentinfo != undefined ?

    <div className="row">
    <div className="col-lg-12 displaynone ">
      <div className="tertiary borderradius-md paneladd " >

        </div> 
    </div>

   <div className="col-lg-6">
    <div className="row">
      <div className="col-lg-6 margintop12 minwidth">
        
      <div className=" tertiary borderradius-md padding1  padding12" >
          <h4 className='h44 primary commonbutton'>Classes</h4>
          {/* <AreaChart></AreaChart> */}
          <p>
          <div className='positionr'>
            <ul >
              <br></br>
              <li className='iconnn-case' onClick={()=>navigate('/kyusilidAdmin/department/sections')}>
              <div className='images3'><h3>4th year: </h3>
              
              <h2 className='h22'> {departmentinfo.fourthyear}</h2>

            </div> </li>
              <br></br>


              <li className='iconnn-case'  onClick={()=>navigate('/kyusilidAdmin/department/sections')} >
              <div className='images3'><h3>3rd year:</h3>
              
              <h2 className='h22'>{departmentinfo.thirdyear}</h2>
              </div> </li>


              <br></br>

              <li className='iconnn-case'  onClick={()=>navigate('/kyusilidAdmin/department/sections')}>
              <div className='images3'><h3>2nd year:</h3>
              
              <h2 className='h22'>{departmentinfo.secondyear}</h2>
              </div></li>
              <br></br>

              <li className='iconnn-case'  onClick={()=>navigate('/kyusilidAdmin/department/sections')}> 
              <div className='images3'><h3>1st year :</h3> 
              <h2 className='h22'>{departmentinfo.firstyear}</h2>
              </div></li>
            </ul>
    </div>
            </p>
          </div> 
      </div>


      <div className="col-lg-6 margintop12 minwidth">
      <div className="tertiary borderradius-md padding1 padding12" >
          <h4 className='h44 primary commonbutton'>Accounts</h4>
          <p>
            <ul>
            <br></br>
            <div className='positionr'>

              <li className='iconnn-case'  onClick={()=>navigate('/kyusilidAdmin/department/accounts_prof')}> 
              <div className='images2'><h3>Professors:</h3>
              <h2 className='h22'>{departmentinfo.profcount}</h2>
              </div></li>
              <br></br>
              <li className='iconnn-case' onClick={()=>navigate('/kyusilidAdmin/department/accounts_stud')}> 
              <div className='images1'><h3>Students : </h3>
              <h2 className='h22'>{departmentinfo.studcount} </h2>
              </div></li>    

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
         <div className='searchDept'> 
         <h4>Department Head</h4>  
         
         <div className='search2'>
         <input
           type="text"
            placeholder='Search by Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/></div>
</div>

          <ul className='margintop12'>


           { departmentinfo.depadminlist != undefined && departmentinfo.depadminlist
            .filter((item) => item.firstname.toLowerCase().includes(searchTerm.toLowerCase())).map((item, key)=>(
                 <li key={key}>
                  <div className="personpanel">
                    <div>
                      <img src={avatar} alt="" /></div>
                    <div className="personpanelcontent">
                      <h5>{item.title} {item.firstname} {item.lastname} {item.suffix}</h5>
                      
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