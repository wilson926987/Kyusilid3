import React, { useContext, useState } from 'react'
import Announcementpanel from '../components/Announcementpanel'
import { userInfoContext } from '../../Globalcontext'
import CreateAnnouncementprof from '../../2prof/CreateAnnouncementprof'

function ClassStats() {
  const {userinfo} = useContext(userInfoContext)
  const [openpost, setopenpost] = useState(false);



  const [announcementlist, setannouncementlist] = useState([
    {
      'postId' : 1,
      'dateposted' : 'September 2' ,
      'postedBy' : 'Juan delaCruz',
      'content' : 'sample annoouncement message here'
    },
    {
      'postId' : 2,
      'dateposted' : 'September 2' ,
      'postedBy' : 'Juan delaCruz',
      'content' : 'sample annoouncement message here2'
    },
    {
      'postId' : 3,
      'dateposted' : 'September 2' ,
      'postedBy' : 'Juan delaCruz',
      'content' : 'sample annoouncement message here3'
    },
    {
      'postId' : 4,
      'dateposted' : 'September 2' ,
      'postedBy' : 'Juan delaCruz',
      'content' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit rem eius iste. Neque assumenda voluptatum omnis facere. Similique corrupti voluptates repudiandae accusantium ipsa quis, aliquam delectus ex voluptate pariatur suscipit!'
    }
  ])

  return (
    <div>
      <h4>Announcements</h4>

      

      {userinfo.usertype==='prof' &&
 
            <CreateAnnouncementprof />
      
   
        
      }



      <div className="col-lg-12 margintop12 ">

        {announcementlist.map(announcementitem=>(
              <Announcementpanel key={announcementitem.postId} announcementitem= {announcementitem}/>
        ))}
    
  
       
       
      </div>

    </div>
  )
}

export default ClassStats