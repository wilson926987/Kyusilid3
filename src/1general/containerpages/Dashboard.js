import React, { useContext } from 'react'
import { themeContext } from '../../Globalcontext'
import Welcomebannerstud from '../components/Welcomebannerstud'
import DbStudent from './DbStudent'

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
            <div className='col-md-4'>
                <div className='eventscontainer tertiary borderradius-lg'>
                    <div className="calendarcontainer primary borderradius-lg"></div>
                    <h4>Announcements ##Announcement#</h4>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Dashboard