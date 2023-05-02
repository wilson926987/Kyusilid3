import React, { useContext, useEffect, useState } from 'react'
import { currentclassContext, classbannerContext } from '../../Globalcontext'
import {AiFillCheckCircle} from 'react-icons/ai'



import classbanner1 from '../../assets/images/classbanner1.png'
import classbanner2 from '../../assets/images/classbanner2.png'
import classbanner3 from '../../assets/images/classbanner3.png'
import classbanner4 from '../../assets/images/classbanner4.png'
import classbanner5 from '../../assets/images/classbanner5.png'
import classbanner6 from '../../assets/images/classbanner6.png'
import classbanner7 from '../../assets/images/classbanner7.png'
import classbanner8 from '../../assets/images/classbanner8.png'
import axios from 'axios'



function ClassSettings() {

    const {classbanner, setclassbanner} = useContext(classbannerContext)
    const currentclass = useContext(currentclassContext)
    const [issaved, setissaved] = useState(false)
    
    const [discussionlink, setdicussionlink] = useState("https://");


    function handleInputChange(event) {
        const inputValue = event.target.value;
        if (inputValue.startsWith("https://")) {
            setdicussionlink(inputValue);
        }
      }



    const isequal =(e)=>{
        return e === classbanner;
    }

   useEffect((

   
   )=>{ if(currentclass.currentclass.class_link){
        setdicussionlink(currentclass.currentclass.class_link)
   }},[currentclass])

    const saveinfo = async()=>{

        const temp = {
            "classbanner" :classbanner,
            "class_link" : discussionlink,
            "classes_id": currentclass.currentclass.classes_id
        }

        

        await axios.post("https://api.kyusillid.online/api/updateclassinfosettings" ,temp).then().catch();
    }



  



  return (
    <div>
        <h4>Class Banner</h4>
        <div className="row">
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${isequal(1) && "primaryborder"}`} onClick={()=>{setclassbanner(1) }}>
                <img src={classbanner1} alt=""  />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(2) && "primaryborder"}`} onClick={()=>{setclassbanner(2)}}>
                <img src={classbanner2} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(3) && "primaryborder"}`} onClick={()=>{setclassbanner(3)}}>
                <img src={classbanner3} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
                <div className={`themeimage ${isequal(4) && "primaryborder"}`} onClick={()=>{setclassbanner(4)}}>
                <img src={classbanner4} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(5) && "primaryborder"}`} onClick={()=>{setclassbanner(5)}}>
                <img src={classbanner5} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(6) && "primaryborder"}`} onClick={()=>{setclassbanner(6)}}>
                <img src={classbanner6} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(7) && "primaryborder"}`} onClick={()=>{setclassbanner(7)}}>
                <img src={classbanner7} alt="" />
                </div>         
            </div>
            <div className="col-lg-3 themeimageminwidth">
            <div className={`themeimage ${isequal(8) && "primaryborder"}`} onClick={()=>{setclassbanner(8)}}>
                <img src={classbanner8} alt="" />
                </div>         
            </div>
     
          
        </div>


        <h4 className='margintop12'> Discussion Link</h4>
 
        <div className="row">
            <div className="col-lg-10">

            <input type="text" className='commontextbox primaryborder' defaultValue={discussionlink} onChange={handleInputChange} />
           
            </div>

            {!issaved ? 
              <div className="col-lg-3">                   
              <button className='commonbutton secondary lighttext ' onClick={()=>{saveinfo(); setissaved(true)}}>Change</button>
      </div>
      :  <div className="col-lg-3">                   
            <button className='commonbutton secondary lighttext ' disabled> <AiFillCheckCircle/> Saved</button>
            </div>
      }
          
        </div>
       
      
    
    
    </div>
  )
}

export default ClassSettings