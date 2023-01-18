import React, { useContext, useState } from 'react'
import Announcementpanel from '../components/Announcementpanel'
import { userInfoContext , announcementlistContext} from '../../Globalcontext'
import CreateAnnouncementprof from '../../2prof/CreateAnnouncementprof'


function ClassStats() {
  const {userinfo} = useContext(userInfoContext)
  const [openpost, setopenpost] = useState(false);
  const {announcementlist} = useContext(announcementlistContext)


  
  return (
    <div>
      <h4>Announcements</h4>

      

      {userinfo.usertype==='prof' &&
 
            <CreateAnnouncementprof />
      
   
        
      }



      <div className="col-lg-12 margintop12 ">

        {announcementlist.map((announcementitem , key)=>(
              <Announcementpanel key={key} announcementitem= {announcementitem}/>
        ))}
    
  
       
       
      </div>

    </div>
  )
}

export default ClassStats