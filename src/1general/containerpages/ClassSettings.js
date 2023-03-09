import React, { useContext, useState } from 'react'
import classbanner1 from '../../assets/images/classbanner1.png'
import classbanner2 from '../../assets/images/classbanner2.png'
import classbanner3 from '../../assets/images/classbanner3.png'
import classbanner4 from '../../assets/images/classbanner4.png'
import classbanner5 from '../../assets/images/classbanner5.png'
import Textbox from '../formcomponents/Textbox'
import { currentclassContext } from '../../Globalcontext'

function ClassSettings() {
    const [discussionlink, setdicussionlink] = useState();
    const {currentclass} = useContext(currentclassContext)
    const [currentclassbanner , setclassbanner] = useState(currentclass.classbanner)


  return (
    <div>
        <h4>class banner </h4>
        <div className="row">
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${currentclassbanner=== 0  && 'primaryborder'}`} onClick={()=>setclassbanner(0)}>
                <img src={classbanner1} alt="" />

            <h4></h4>
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${currentclassbanner=== 1  && 'primaryborder'}`} onClick={()=>setclassbanner(1)}>
             
                <img src={classbanner2} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${currentclassbanner=== 2  && 'primaryborder'}`} onClick={()=>setclassbanner(2)}>
              
                <img src={classbanner3} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${currentclassbanner=== 3  && 'primaryborder'}`} onClick={()=>setclassbanner(3)}>
          
                <img src={classbanner4} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${currentclassbanner=== 4  && 'primaryborder'}`} onClick={()=>setclassbanner(4)}>
              
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