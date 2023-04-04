import React, { useState } from 'react'

function Viewresponse() {

    const [score, setscore] = useState("/")

    const tt = ()=>{
        alert(score)
    }
  return (
    <div>
        <div className="flex"> <h4>Student's Work</h4>  
            <div className="flex marginleftauto">
                <h4>Score</h4>
                <input type="text" className="commontextbox primaryborder col-lg-4" defaultValue={score} onChange={(e)=>{setscore(e.target.value + " /100")}}/>
                <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Save</button>
            </div>
        </div>

        



    </div>
  )
}

export default Viewresponse