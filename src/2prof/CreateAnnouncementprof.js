import React, { useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';

function CreateAnnouncementprof() {
    const [activ, setactiv] = useState(false)
    const temp = ()=>{
        alert("aksdfjs");
    }
    const temp2 = ()=>{
        setactiv(!activ)
    }

    const [myclasses, setmyclasses] = useState([
        "this class", " Class1" , "Class2" , "Class3"
    ])

    const [selectedclass, setselectedclass]  =useState();



    

  return (
    <div className='col-lg-12  margintop12 '>
       <div className='tertiary primaryborder postannouncementcontainer borderradius-lg'>
       {!activ ?
            <div className='relative postannouncementbody'>
                <div className='postannouncementclosed' onClick={temp2}>
                    Post an announcement
                </div>
                <button onClick={temp}>click me</button>
            </div>  
            :
            <div className='postannouncement'>

                <div className="row">
                    <div className="col-lg-3">
                    <Dropdown
                        options={myclasses}
                        onChangeHandler = {setselectedclass}
                        mainClass= 'dropdownmain primary borderradius-md'
                        itemClass= 'dropdownitem'
                        controlClass='dropdowncontrol'
                        menuClass='dropdownmenu primary'
                        controlActiveClass='dropdowncontrolactive'
                        mainActiveClass='dropdownmain-active'
                    />

                         
                    </div>
                    <div className="col-lg-9">
                        <div>
                            adsfsf
                        </div>
                    </div>
                </div>

                <div className="postannouncementfooter flex">
                                <button onClick={temp2}> close</button>
                </div>  
                
            </div>  
    
    }
       </div>
          
    </div>
  )
}

export default CreateAnnouncementprof