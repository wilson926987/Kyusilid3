import React from 'react'
import DonutChart from '../1general/components/DonutChart'
import BarChart from '../1general/components/BarChart'

function DbProf() {
  return (
    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
            <h2 className="text-left">My Classes</h2>
            <div className='DonutChart'><DonutChart></DonutChart></div>
            {
                /*
                <ul>
                    <li>##total classes# wilson</li>
                    <li>##average students per class#</li>
                </ul>*/
                }
                
            </div>
        </div>

        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
            <h2 className="text-left">Class Activities</h2>
            <div className='DonutChart'><DonutChart></DonutChart></div>
               {  
               /*
               <ul>
                    <li>##Activities, assignments and quizzes etc posted#</li>
                    <li>##total students submitted#</li>
                </ul>*/
                }
              
            </div>
        </div>

        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
            <h2 className="text-left">Attendance Status</h2>
            <div className='DonutChart'><DonutChart></DonutChart></div>
            { 
            /*
            <ul>
                    <li>##total discussions#</li>
                    <li>##average attendance per class#</li>
                </ul>
                */
                }
               
            </div>
        </div>

        <div className='col-md-12'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin">
            <h2 className="text-left">Extra Statistics</h2>
            {  /*<ul>
                    <li>(malapad na graph o kung ano man)</li>
                    <li></li>
                </ul>
            */}
            <div className='BarChart'> <BarChart></BarChart></div>
              
            </div>
        </div>

     
    </div>
</div>
  )
}

export default DbProf