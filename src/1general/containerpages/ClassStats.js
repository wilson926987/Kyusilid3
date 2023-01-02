import React, { useContext, useState } from 'react'
import Announcementpanel from '../components/Announcementpanel'
import { userInfoContext } from '../../Globalcontext'
import CreateAnnouncementprof from '../../2prof/CreateAnnouncementprof'

function ClassStats() {
  const {userinfo} = useContext(userInfoContext)
  const [openpost, setopenpost] = useState(false);
  return (
    <div>
      <h4>Announcements</h4>

      

      {userinfo.usertype==='prof' &&
      <>  
            <CreateAnnouncementprof />
      
      </>
        
      }



      <div className="col-lg-12 margintop12 ">
        <Announcementpanel />
        <Announcementpanel />   
        <Announcementpanel />
       
       
      </div>

    </div>
  )
}

export default ClassStats