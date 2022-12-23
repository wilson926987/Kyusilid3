import React, { useContext } from 'react'
import Welcomebannerstud from '../components/Welcomebannerstud'
import DbStudent from '../../3student/DbStudent'
import DbProf from '../../2prof/DbProf'
import CalendarAnnouncements from '../components/CalendarAnnouncements'
import { userInfoContext } from '../../Globalcontext'


function Dashboard() {
    const {userinfo, setuserinfo} = useContext(userInfoContext)

  return (
    <div>
        <div className='row'>
            <div className='col-md-8 '>
                <div className='row'>

                    <div className="col-md-12"> 
                        <Welcomebannerstud></Welcomebannerstud>
                    </div>

                    {userinfo.usertype==='stud' || userinfo.usertype==='student' ?  <DbStudent/>: <DbProf/>}
                   

                </div>
            

            </div>
           <CalendarAnnouncements />
        </div>
       
    </div>
  )
}

export default Dashboard