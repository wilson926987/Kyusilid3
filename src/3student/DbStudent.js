import React from 'react'
import {GrNotes} from 'react-icons/gr'
import DonutChart from '../1general/components/DonutChart'
import BarChart from '../1general/components/BarChart'


function DbStudent() {
  return (
    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
            <h2 className="text-left">Attendance Status</h2>
<br></br>
<div className="primary">
<DonutChart></DonutChart>
</div>
            </div>
        </div>

        <div className='col-md-8'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin">
            <h2 className="text-left">Activity Status</h2>
            <div className='BarChart'>   <BarChart></BarChart></div>
            </div>
        </div>

        <div className='col-md-12'>
          <div className='tertiary borderradius-lg dbactivitylist dbpanelmargin'>
             <div><h4>Upcoming Activities</h4>
                      <button>dropdown ##classlist#</button>
              </div>

               <div className='activityitem primary'> 
                    <div className='activityitempic secondary'>
                      <div className='tertiary'>
                      <GrNotes/>
                      </div>
                   
                    </div>
                    <div className='activityitemcontent'>
                      <h5>##Activity name#</h5>
                      <h6>##Activity due date#</h6>

                    </div>

               
               </div>
                          <div className='activityitem primary'> 
                    <div className='activityitempic secondary'>
                      <div className='tertiary'>
                      <GrNotes/>
                      </div>
                   
                    </div>
                    <div className='activityitemcontent'>
                      <h5>##Activity name#</h5>
                      <h6>##Activity due date#</h6>
                    </div>               
               </div>
           
           
          </div>
        </div>
    </div>
</div>

  )
}

export default DbStudent