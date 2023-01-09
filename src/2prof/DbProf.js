import React from 'react'
import {GrNotes} from 'react-icons/gr'

function DbProf() {
  return (
    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
                My classes:
                <ul>
                    <li>##total classes# wilson</li>
                    <li>##average students per class#</li>
                </ul>
            </div>
        </div>

        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
                Class Activities:
                <ul>
                    <li>##Activities, assignments and quizzes etc posted#</li>
                    <li>##total students submitted#</li>
                </ul>
            </div>
        </div>

        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
                attendance status:
                <ul>
                    <li>##total discussions#</li>
                    <li>##average attendance per class#</li>
                </ul>
            </div>
        </div>

        <div className='col-md-12'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin">
                  extra statistic:
                <ul>
                    <li>(malapad na graph o kung ano man)</li>
                    <li></li>
                </ul>
            </div>
        </div>

     
    </div>
</div>
  )
}

export default DbProf