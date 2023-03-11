
import { useContext, useState } from 'react';

import AdminTopicpanel from '../1general/components/AdminTopicpanel';


function AdminAddModule() {
 
 

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









  return (
    <div className="tertiary borderradius-md outletcontainer" >
     <div className="flex">
     <h4>Classwork</h4> 

     <div className='marginleftauto relative'>
    

     </div>


     <div className='col-lg-4'>
  
     
     </div>
     </div>



        <div className='col-md-12 margintop12'>
        
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
            
        </div>

     


       
        

      

    </div>
  )
}

export default AdminAddModule








 