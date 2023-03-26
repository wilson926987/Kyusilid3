
import Topicpanel from '../1general/components/Topicpanel'
import { useContext, useEffect, useState } from 'react';
import { activitytypefilterContext, topiclistContext ,currentclassContext} from '../Globalcontext';
import Dropdown from '../1general/formcomponents/Dropdown';


function ClassModules() {
 
 const { setactivitytypefilter} = useContext(activitytypefilterContext)

 const {topiclist} = useContext(topiclistContext)
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
  
  useEffect(()=>{
    console.log(topiclist)
  },[topiclist])








  return (
    <div >
     <div className="flex">
     <h4>Classwork for {topiclist.classinfo}</h4> 

     <div className='marginleftauto relative'>
    

     </div>


     <div className='col-lg-4'>
   

                        <Dropdown
                                options={tempactivityfilter}
                                onChangeHandler= {setactivitytypefilter}
                                placeholderValue='select filter'
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'                         
                            />  
     
     
     </div>
     </div>



        <div className='col-md-12 margintop12'>

          {topiclist.topiclist.length ===0 &&
          
            <div className="emptylist">
              <h4>No Classworks yet</h4>
            </div>
          }
          {topiclist.topiclist.map((topicitem)=>(
            <Topicpanel key={topicitem.topic_id} topicitem={topicitem}/>

          ))}
            
        </div>

     


       
        

      

    </div>
 
  )
}

export default ClassModules