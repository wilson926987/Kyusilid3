import React, { useState } from 'react'
import ENT from '../../assets/images/ENT.png'
import ED from '../../assets/images/ED.png'
import BSEE from '../../assets/images/BSEE.png'
import BSIE from '../../assets/images/BSIE.png'
import BSBA from '../../assets/images/BSBA.png'
import BSIT from '../../assets/images/BSIT.png'
import ENT1 from '../../assets/images/ENT1.png'
import ED1 from '../../assets/images/ED1.png'
import BSEE1 from '../../assets/images/BSEE1.png'
import BSIE1 from '../../assets/images/BSIE1.png'
import BSBA1 from '../../assets/images/BSBA1.png'
import BSIT1 from '../../assets/images/BSIT1.png'
import Textbox from '../formcomponents/Textbox'

function ClassSettings() {
    const [discussionlink, setdicussionlink] = useState();
  return (
    <div>
        <h4>class banner</h4>
        <div className="row">
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={BSIT} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={BSEE} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={ENT} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={ED} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage primaryborder">
                <img src={BSIE} alt="" />
                </div>         
            </div>

            <div className="col-lg-3 themeimageminwidth">
            <div className="themeimage primaryborder">
            <img src={BSBA} alt="" />
            </div>         
        </div>
        <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={BSIT1} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={BSEE1} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={ENT1} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage">
                <img src={ED1} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className="themeimage primaryborder">
                <img src={BSIE1} alt="" />
                </div>         
            </div>

            <div className="col-lg-3 themeimageminwidth">
            <div className="themeimage primaryborder">
            <img src={BSBA1} alt="" />
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