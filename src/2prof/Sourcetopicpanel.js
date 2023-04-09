import React, { useState , useEffect, useContext} from 'react'
import Sourcematerialpanel from './Sourcematerialpanel'
import { currentclassContext } from '../Globalcontext';
import axios from 'axios';

function Sourcetopicpanel({sourcetopicitem}) {
  const [ClassActivitylist , setClassActivitylist] = useState([
  ]);
  const {currentclass} = useContext(currentclassContext)

  useEffect(()=>{

    axios.get('https://api.kyusillid.online/api/get-activitylist/' + sourcetopicitem.topic_id)
    .then(response => {
      setClassActivitylist(response.data)
    })
    .catch(error => {
      console.log(error);
    });


  },[])

 
  

  return (
    <div className='topicpanel borderradius-md'>
       <h4>{sourcetopicitem.sourcetopicname}</h4>
       <hr />

     <ul className="topiclist">


     {ClassActivitylist.map((temp2)=>(
          <li className='relative flex activitypanel borderradius-md' key={temp2.activity_id}>
                <Sourcematerialpanel  actItem = {temp2}/>
          </li>

      ))}
     </ul>
   
    </div>

  )
}

export default Sourcetopicpanel