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
          <div class="linkk" >
          <div className="box">
              <div className="cards">
              <h2>{deptinfo !== undefined && deptinfo.studcount}</h2>
              <h3>Students </h3>
            </div>
            <div className="images">
              <img src={prof} alt="" srcSet="" />
            </div>
          </div>
          </div>
          <div class="linkk" >
          <div className="box">
            <div className="cards">
              <h2>{deptinfo!== undefined && deptinfo.profcount}</h2>
              <h3>Professors</h3>
            </div>
            <div className="images">
              <img src={stud} alt="" srcSet="" />
            </div>
          </div></div>
          <div class="linkk" >
          <div className="box">
            <div className="cards">
              <h2>{deptinfo !== undefined && deptinfo.archived}</h2>
              <h3>Archived</h3>
            </div>
            <div className="images">
              <img src={arch} alt="" srcSet="" />
            </div>
          </div></div>
          <div class="linkk">
          <div className="box">
            <div className="cards">
              <h2>{deptinfo!== undefined && deptinfo.classes}</h2>
              <h3>Classes</h3>
            </div>
            <div className="images">
              <img src={klase} alt="" srcSet="" />
            </div>
          </div></div>
          </div>
      </div>
      
    
          <div className="box2 primary">
            <div className="cards primary">
              <h2>{currentTime.toLocaleTimeString()}</h2>
              <h2>{currentTime.toLocaleDateString()}</h2>
            </div>
          </div>

   
   
    
    </div>
  );
}

export default AdminDashboard;