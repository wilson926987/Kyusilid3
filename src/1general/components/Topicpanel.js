import React, { useContext, useState , useEffect} from 'react'
import ActivityItempanel from './ActivityItempanel'
import { activitytypefilterContext, topicfilterContext } from '../../Globalcontext';
import axios from 'axios';




function Topicpanel({topicitem}) {

  const {activitytypefilter} = useContext(activitytypefilterContext)
  const {topicfilter} = useContext(topicfilterContext);

  const [ClassActivitylist , setClassActivitylist] = useState([
  ]);

  useEffect(()=>{
    axios.get('https://api.kyusillid.online/api/get-activitylist/' + topicitem.topic_id)
    .then(response => {
      setClassActivitylist(response.data)
    
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  return (
    <div className={`topicpanel borderradius-md ${topicfilter!=='none' && topicfilter !== topicitem.topic_id && 'displaynone'}`}>
       <h4>{topicitem.topic_name}</h4> <hr />
    
       <ul className='topiclist'>
         
              {ClassActivitylist.filter((vartemp2)=>{
                if(activitytypefilter==='none'){
                  return vartemp2;
                }else{
                  return vartemp2.activity_type===activitytypefilter;
                }
              }).map((actItem)=>(
             
                    <ActivityItempanel actItem = {actItem} key={actItem.activity_id}/>
          
                
              ))}
       </ul>
       
    </div>
  )
}

export default Topicpanel