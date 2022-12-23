import React, { useEffect, useState } from 'react'
import { Outlet , useNavigate, useLocation} from 'react-router-dom'
import Activitylogpanel from '../components/Activitylogpanel';

function ClassContainer() {


  const navigate = useNavigate();


  const [currentpage, setcurrentpage] = useState();
  const location = useLocation()

  useEffect(()=>{   
      setcurrentpage(location.pathname);
  },[location])

  function isactive(e){
    return e===currentpage ? true : false;
 }



  return (
    <div className='classcontent'>
     

      <div className='classcontentmain'>
        <div className='row'> 
            <div className="col-md-12 " >
              <div className='primary classheader classheader-lg borderradius-lg dbpanelmargin'>
                <div><h3 id='top'>Class name</h3>
                    <h4>Subject code</h4>
                    <h4>Saturdays 5am- 12pm</h4>
                    <h4>Prof name</h4>
                </div>
              </div>

            <div className="classcontentsub">
              <div className="row">
                  <div className="col-lg-3 classnav-min">
                    <div className="classnav tertiary borderradius-md dbpanelmargin">
                    
                      <ul>
                        <li className={`classnavitem ${isactive('/classes/sampleclass') && 'classnav-active'}`} onClick={()=>{navigate('/classes/sampleclass')}}>  Announcements </li>
                        <li><hr /></li>
                        <li className={`classnavitem ${isactive('/classes/sampleclass/modules') && 'classnav-active'}`} onClick={()=>{navigate('modules')}}>  Class Modules</li>
                        <li><hr /></li>
                     
                        {isactive('/classes/sampleclass/modules') &&  
                          <div>
                            <li className='classnavsubitem'>All topics</li>
                            <li><hr /></li>
                            <li className='classnavsubitem'>topic 1</li>
                            <li><hr /></li>
                            <li className='classnavsubitem'>topic 2</li>
                            <li><hr /></li>
                          </div>
                        }

                        <li className={`classnavitem ${isactive('/classes/sampleclass/info') && 'classnav-active'}`} onClick={()=>{navigate('info')}}>  Class info </li>
                        <li><hr /></li>
                        <li className={`classnavitem ${isactive('/classes/sampleclass/marks') && 'classnav-active'}`} onClick={()=>{navigate('marks')}}> Marks </li>
                        
                      </ul>
                     
                      
                    </div>

                  </div>


                  <div className="col-lg-9 outletcontainer-min">
                    <div className="tertiary borderradius-md outletcontainer">
                          <Outlet /> 
                          <div>
                          <a href="#top">Back to top</a>
                          </div>

                    </div>
                
                  </div>

                </div>
            </div>


            </div>



        </div>

      </div>

      <div className='activitylog borderradius-md tertiary'>
            <h4>Class Activity log</h4>
            <Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel /><Activitylogpanel />



      </div>


      
    




   

    </div>

  )
}

export default ClassContainer