import React from 'react'
import { Outlet , Link , useNavigate} from 'react-router-dom'

function ClassContainer() {

  const navigate = useNavigate();
  return (
    <div className='classcontent'>
     

      <div className='classcontentmain'>
        <div className='row'> 
            <div className="col-md-12 " >
              <div className='primary classheader classheader-lg borderradius-lg dbpanelmargin'>
                <h4>Class name</h4>
              </div>

            <div className="classcontentsub">
              <div className="row">
                  <div className="col-lg-3 classnav-min">
                    <div className="classnav tertiary borderradius-md dbpanelmargin">
                    
                      <ul>
                        <li className='classnavitem' onClick={()=>{navigate('/classes/sampleclass')}}>  Announcements </li>
                        <li><hr /></li>
                        <li className='classnavitem' onClick={()=>{navigate('modules')}}>  Class Modules</li>
                        <li><hr /></li>
                        <li className='classnavitem' onClick={()=>{navigate('activities')}}>  Activities</li>
                        <li><hr /></li>
                        <li className='classnavitem' onClick={()=>{navigate('info')}}>  Class info </li>
                        <li><hr /></li>
                        <li className='classnavitem' onClick={()=>{navigate('marks')}}> Marks </li>
                        
                      </ul>
                     
                      
                    </div>

                  </div>


                  <div className="col-lg-9 outletcontainer-min">
                    <div className="tertiary borderradius-md outletcontainer">
                          <Outlet />
                    </div>
                
                  </div>

                </div>
            </div>


            </div>

            <div className="col-md-8">

            </div>



        </div>

      </div>

      <div className='activitylog borderradius-md tertiary'>
       

      </div>


      
    




   

    </div>

  )
}

export default ClassContainer