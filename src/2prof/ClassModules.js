
import Topicpanel from '../1general/components/Topicpanel'
import { useContext } from 'react';
import { topicfilterContext ,activitytypefilterContext  } from '../Globalcontext';

function ClassModules({activityfilter}) {
 const {topicfilter, settopicfilter} = useContext(topicfilterContext)
 const {activitytypefilter, setactivitytypefilter} = useContext(activitytypefilterContext)

  return (
    <div>
       <h4>Classwork</h4> 
       {topicfilter} {activitytypefilter}

     
        <div className='col-md-12 margintop12'>

            <Topicpanel />
            <Topicpanel />
            <Topicpanel />
        </div>
        

      

    </div>
  )
}

export default ClassModules