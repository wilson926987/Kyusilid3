import React, { useState } from 'react'
import stud from '../assets/images/student.png';
import prof from '../assets/images/prof.png';

function AdminDashboard() {

  return (
    <div>
      < div class="iconn-case">

        <div class="boxes">

          <div class="box">
            <div class="cards">
              <h2>1,907</h2>
              <h3>Students</h3>
            </div>
          <div class="images">
                <img src={prof} alt="" srcset=""/>
          </div>

        </div>

          <div class="box">
            <div class="cards">
              <h2>507</h2>
              <h3>Professor</h3>
            </div>
          <div class="images">
                <img src={stud} alt="" srcset=""/>
          </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard