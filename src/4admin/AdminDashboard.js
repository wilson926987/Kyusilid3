import React, { useState, useEffect } from 'react';
import stud from '../assets/images/student.png';
import prof from '../assets/images/prof.png';
import arch from '../assets/images/archived.png';
import klase from '../assets/images/class.png';
import books from '../assets/images/book.png';



function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  return (
    <div>
      <div className="iconn-case">
        <div className="boxes">
          <div class="linkk" >
          <div className="box">
              <div className="cards">
              <h2>1000</h2>
              <h3>Students</h3>
            </div>
            <div className="images">
              <img src={prof} alt="" srcSet="" />
            </div>
          </div></div>
          <div class="linkk" >
          <div className="box">
            <div className="cards">
              <h2>507</h2>
              <h3>Professors</h3>
            </div>
            <div className="images">
              <img src={stud} alt="" srcSet="" />
            </div>
          </div></div>
          <div class="linkk" >
          <div className="box">
            <div className="cards">
              <h2>25</h2>
              <h3>Archived</h3>
            </div>
            <div className="images">
              <img src={arch} alt="" srcSet="" />
            </div>
          </div></div>
          <div class="linkk">
          <div className="box">
            <div className="cards">
              <h2>40</h2>
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

    <div className='boxess'>
    <div className="box3">
            <div className="images1">
              <img src={books} alt="" srcSet="" />
            </div>
      <h2>Bachelor of Science</h2>
      <p>Information and Technology</p>
    </div>

    <div className="box4">
            <div className="images2">
              <img src={books} alt="" srcSet="" />
            </div>
      <h2>Bachelor of Science</h2>
      <p>Accountancy</p>

    </div>

    
    <div className="box5">
            <div className="images2">
              <img src={books} alt="" srcSet="" />
            </div>
      <h2>Bachelor of Science</h2>
      <p>Entrepreneurship</p>

    </div>

    
    <div className="box6">
            <div className="images2">
              <img src={books} alt="" srcSet="" />
            </div>
      <h2>Bachelor of Science</h2>
      <p>Industrial Engineering</p>

    </div>

    
    <div className="box7">
            <div className="images2">
              <img src={books} alt="" srcSet="" />
            </div>
      <h2>Bachelor of Science</h2>
      <p>Electrical Engineering</p>

    </div>

    </div>
   
    
    </div>
  );
}

export default AdminDashboard;