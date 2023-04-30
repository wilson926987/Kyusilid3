import React, { useState, useEffect, useContext } from 'react';
import stud from '../assets/images/student.png';
import prof from '../assets/images/prof.png';
import arch from '../assets/images/archived.png';
import klase from '../assets/images/class.png';
import books from '../assets/images/book.png';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();
  const [deptinfo, setdepartmentoverview] = useState();




  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);


  }, []);

  useEffect(() => {
  
    localStorage.setItem('history', '/kyusilidAdmin')

  }, []);

  useEffect(()=> {
 
 
   
      axios.get('https://api.kyusillid.online/api/admindashboard/' + 1)
      .then(response=>
        {
          setdepartmentoverview(response.data)
 
        }

      ).catch()

    


    

  },[])



  
  return (
    <div>
      <div className="iconn-case">
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
      </div>
      
    

   
   
   
    </div>
  );
}

export default AdminDashboard;