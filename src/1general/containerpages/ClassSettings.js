import React, { useState } from 'react'
import classbanner1 from '../../assets/images/classbanner1.png'
import classbanner2 from '../../assets/images/classbanner2.png'
import classbanner3 from '../../assets/images/classbanner3.png'
import classbanner4 from '../../assets/images/classbanner4.png'
import classbanner5 from '../../assets/images/classbanner5.png'
import Textbox from '../formcomponents/Textbox'

function ClassSettings() {
    const [discussionlink, setdicussionlink] = useState();
  return (
    <div>
        <h4>class banner</h4>
        <div className="row">
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={classbanner1} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={classbanner2} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={classbanner3} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={classbanner4} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage primaryborder">
                <img src={classbanner5} alt="" />
                </div>         
            </div>
        </div>


        <h4 className='margintop12'> Discussion link</h4>


        <div className="row">
            <div className="col-lg-10">
            <Textbox value={discussionlink} handleChange={setdicussionlink} placeholdervalue='discussion link'/>
            </div>
            <div className="col-lg-2">                   
                    <button className='commonbutton secondary lighttext'>change</button>
            </div>
        </div>
       
      
    
    
    </div>
  )
}

export default ClassSettings