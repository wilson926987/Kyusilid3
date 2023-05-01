import React, { useContext, useState } from 'react'
import Announcementpanel from '../components/Announcementpanel'
import { userInfoContext , announcementlistContext} from '../../Globalcontext'
import CreateAnnouncementprof from '../../2prof/CreateAnnouncementprof'


function ClassStats() {
  const {userinfo} = useContext(userInfoContext)
  const [openpost, setopenpost] = useState(false);
  const {announcementlist} = useContext(announcementlistContext)
  return (
    <div className=''>
      <h4>Announcements</h4>
      {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&<CreateAnnouncementprof /> }
      <div className="col-lg-12 margintop12 ">

        {announcementlist.length ===0 &&
          <div className='emptylist'>
            <h4>No announcements yet</h4>
          </div>
        }

        {announcementlist.map((announcementitem, key)=>(
              <Announcementpanel key={key} announcementitem= {announcementitem}/>
        ))}
      
      </div>
    </div>
  )
}

export default ClassStats