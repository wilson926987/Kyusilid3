import React, { useContext } from 'react'
import { themeContext } from '../../Globalcontext'
import Welcomebannerstud from '../components/Welcomebannerstud'
import DbStudent from './DbStudent'
import CalendarAnnouncements from '../components/CalendarAnnouncements'

function Dashboard() {
  return (
    <div>
        <div className='row'>
            <div className='col-md-8 '>
                <div className='row'>

                    <div className="col-md-12"> 
                        <Welcomebannerstud></Welcomebannerstud>
                    </div>
                    <DbStudent></DbStudent>             
                </div>
            

            </div>
           <CalendarAnnouncements />
        </div>
       
    </div>
  )
}

export default Dashboard