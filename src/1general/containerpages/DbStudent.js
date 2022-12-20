import React from 'react'
import {GrNotes} from 'react-icons/gr'

function DbStudent() {
  return (
    <div className="col-md-12">
    <div className="row">
        <div className="col-md-4">
            <div className="tertiary attendancepanel borderradius-lg dbpanelmargin">
                attendance status:
                <ul>
                    <li>##total discussions#</li>
                    <li>##total attended#</li>
                </ul>
            </div>
        </div>

        <div className='col-md-8'>
            <div className="tertiary borderradius-lg activitystatuspanel dbpanelmargin">
                activity status:
                <ul>
                    <li>dropdown(assignments, quizzes, seatwork)</li>
                    <li>grap itmes(##number of pending#, ##number of done #, ##number of missing#)</li>
                </ul>
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