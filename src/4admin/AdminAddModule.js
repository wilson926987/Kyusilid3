
import { useContext, useEffect, useState } from 'react';
import { subjectmoduleContext } from '../Globalcontext';

import AdminTopicpanel from '../1general/components/AdminTopicpanel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AdminAddModule() {
 
 
const {topicid} = useContext(subjectmoduleContext);
const [activeWeek, setActiveWeek] = useState(null);




  const [tempactivityfilter, settempactivityfilter] = useState([
    {'value' : 'none',
    'label' : 'All activities'
   },
    {'value' : 'Material',
    'label' : 'Material'
   },
   {'value' : 'Assignment',
    'label' : 'Assignment'
   },
   {'value' : 'Activity',
   'label' : 'Activity'
   },
   {'value' : 'Questionnaire',
   'label' : 'Questionnaire'
   },
   {'value' : 'Attendance',
   'label' : 'Attendance'
  }


  ])


  const [topiclist, settopiclist] = useState();

  useEffect(()=>{
    if(topicid  !== undefined){
      axios.get('https://api.kyusillid.online/api/gettopicsbysubject/' + topicid).then(
        response=> {settopiclist(response.data);
        console.log(response.data)}
        
      ).catch()
    }
  },[])

  const navigate  =useNavigate()











  return (
    <div className="tertiary borderradius-md padding12 " >
     <div className="flex width100 spacebetween">
     <h4 >Classwork for {topiclist !== undefined ? topiclist.classinfo : "#"}</h4> 

     <div classname="marginleftauto primary"> <button className='commonbutton lighttext secondary' onClick={()=>{navigate('/kyusilidAdmin/department/createactivity')}}>Create new Activity</button></div>


     </div>

        <div className='col-md-12 margintop12'>



          {topiclist !== undefined  && 
        
            topiclist.topiclist.map((item, key)=>
           (  

            <AdminTopicpanel key={key} topicitem ={item}/>
           )
             
            )}


         


        
       
   
 
            
        </div>

         

    </div>
  )
}

export default AdminAddModule

 