
import Topicpanel from '../1general/components/Topicpanel'
import { useContext, useState } from 'react';
import { activitytypefilterContext, topiclistContext} from '../Globalcontext';
import Dropdown from '../1general/formcomponents/Dropdown';
import {FaPlusCircle} from 'react-icons/fa'


function ClassModules() {
 
 const { setactivitytypefilter} = useContext(activitytypefilterContext)
 const {topiclist} = useContext(topiclistContext)
  const [tempactivityfilter, settempactivityfilter] = useState([
    'none' , 'activity' , 'assignment' , 'questionnaire' ,'material'
  ])



  return (
    <div>
     <div className="flex">
     <h4>Classwork</h4> 

     <div className='marginleftauto'>
      <button className='commonbutton lighttext borderradius-md secondary'> <FaPlusCircle/> Create Topic</button>
     </div>

     <div>
      <Dropdown 
        options={tempactivityfilter} 
        placeholderValue='select filter '
        onChangeHandler={setactivitytypefilter}
        mainClass= 'dropdownmain primary borderradius-md width200px'
        itemClass= 'dropdownitem'
        controlClass='dropdowncontrol'
        menuClass='dropdownmenu primary'
        controlActiveClass='dropdowncontrolactive'
        mainActiveClass='dropdownmain-active'
     /></div>
     </div>



        <div className='col-md-12 margintop12'>

          {topiclist.length ===0 &&
          
            <div className="emptylist">
              <h4>No Classworks yet</h4>
            </div>
          }
          {topiclist.map((topicitem)=>(
            <Topicpanel key={topicitem.topic_id} topicitem={topicitem}/>

          ))}
            
        </div>
        

      

    </div>
  )
}

export default ClassModules