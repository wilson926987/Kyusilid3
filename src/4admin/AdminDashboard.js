import React, { useState, useEffect, useContext } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { currentdeptContext, userInfoContext } from '../Globalcontext';



function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();
  const [deptinfo, setdepartmentoverview] = useState();
  const {currentdept} = useContext(currentdeptContext)
  const {userinfo} = useContext(userInfoContext)






  useEffect(()=> {
 
    localStorage.setItem('history', '/kyusilidAdmin') 
    if(userinfo.admintype ===0){
      navigate('/kyusilidAdmin/adminhead')
    }
  
  },[])

  useEffect(()=>{
  
    if(currentdept!= undefined){
      

     
      navigate('/kyusilidAdmin/department')
    }
  },[currentdept])



  
  return (
    <div>
      {/* <div className="iconn-case"style={{cursor:"default"}}>
        <div className="boxes">

          <div class="linkk">
          <div className="box">
              <div className="cards col-lg-12">
              <div className='images'>
              <h2 className='h22'>{deptinfo !== undefined && deptinfo.studcount}</h2>
              <h3>Students </h3>
        </div>
            </div>

          </div>
          </div>
          
          <div className="linkk">
          <div className="box">
            <div className="cards">
            <div className='images1'>
            <h2 className='h22'>{deptinfo!== undefined && deptinfo.profcount}</h2>
              <h3>Professors</h3>
            </div></div>
            </div>

          </div>

          <div class="linkk" >
          <div className="box">
            <div className="cards">
            <div className='images2'>
              <h2 className='h22'>{deptinfo !== undefined && deptinfo.archived}</h2>
              <h3 className='tex'>Archived</h3>
            </div></div>

          </div></div>

          <div class="linkk">
          <div className="box">
            <div className="cards">
            <div className='images3'>
              <h2 className='h22'>{deptinfo!== undefined && deptinfo.classes}</h2>
              <h3>Classes</h3>
            </div></div>

          </div></div>

</div>
          <div className="boxes1">

          <div className="box2">
  <div className="cards">
    <h2>{currentTime.toLocaleTimeString()}</h2>
    <br></br>
    <h3>{currentTime.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
  </div>
</div>




 </div>
      </div> */}
      
    

   
   
   
    </div>
  );
}

export default AdminDashboard;