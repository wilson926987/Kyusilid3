import React, { useContext } from 'react'
import Welcomebannerstud from '../../3student/Welcomebannerstud'

import CalendarAnnouncements from './CalendarAnnouncements'
import MyclassesDefault from './MyclassesDefault'


function Dashboard() {


  return (
    <div>
        <div className='row'>
            <div className='col-md-9 '>
                <div className='row'>

                    <div className="col-md-12"> 
                        <Welcomebannerstud></Welcomebannerstud>
                    </div>

                    <div className='col-lg-12 '>

                            <MyclassesDefault/>

                    </div>





                </div>
            

            </div>
           <CalendarAnnouncements />
        </div>
       
    </div>
  )
}

export default Dashboard