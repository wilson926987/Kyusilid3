import React, { useContext, useState , useEffect} from 'react'
import AdminActivityItempanel from './AdminActivityItempanel';
import { activitytypefilterContext, topicfilterContext } from '../../Globalcontext';
import axios from 'axios';




function AdminTopicpanel({topicitem}) {

       const [activitylist, setactivitylist] = useState([])



 
       useEffect(()=>{

            if(topicitem !== undefined){
              axios.get('https://api.kyusillid.online/api/get-activitylist/' + topicitem.topic_id)
              .then(response => {
                     setactivitylist(response.data)
              })
              .catch(error => {
                console.log(error);  
              });
          
            }
          
            },[])
  

       return (
              <div className='topicpanel borderradius-md'>
                 <h4> {topicitem.topic_name}</h4>
                 <hr />
          
               <ul className="topiclist">
          
          
               {activitylist.map((temp2)=>(
                    <li className='relative flex activitypanel borderradius-md' key={temp2.activity_id}>
                          <AdminActivityItempanel  actItem = {temp2}/>
                    </li>
          
                ))}
               </ul>
             
              </div>
          
            )


}

export default AdminTopicpanel