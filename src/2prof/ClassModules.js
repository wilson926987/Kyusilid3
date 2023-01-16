
import Topicpanel from '../1general/components/Topicpanel'
import { useContext, useState } from 'react';
import { topicfilterContext ,activitytypefilterContext, topiclistContext} from '../Globalcontext';
import Dropdown from '../1general/formcomponents/Dropdown';


function ClassModules() {
 const {topicfilter} = useContext(topicfilterContext)
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
          {topiclist.filter((temp=>{
            if(topicfilter==='none'){
              return temp
            }else{
              return temp.topicId===topicfilter;
            }
          })).map((topicitem)=>(
            <Topicpanel key={topicitem.topicId} topicitem={topicitem}/>

          ))}
            
        </div>
        

      

    </div>
  )
}

export default ClassModules