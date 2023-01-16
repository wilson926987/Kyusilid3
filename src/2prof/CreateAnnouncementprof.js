import React, { useState } from 'react'

import Multiselector from '../1general/formcomponents/Multiselector';
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
        "this class", "Class1" , "Class2" , "Class3"
    ])

    const posttypes = ['fixed' , 'timed']
    const [posttype, setposttype] = useState('fixed')

    const [selectedclass, setselectedclass]  =useState();

    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const [postdate, setpostdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));
    const [currentdate  , setcurrentdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));
  



    

  return (
    <div className='col-lg-12  margintop12 '>
       <div className='tertiary postannouncementcontainer borderradius-lg'>
       {!activ ?
            <div className='relative postannouncementbody'>
                <div className='postannouncementclosed' onClick={temp2}>
                    Post an announcement
                </div>
              
            </div>  
            :
            <div className='postannouncement'>

                <div className="row">
                    <div className="col-lg-3">
                        <p className='smallfont'> Select Classes</p>
                    <Multiselector
                        options={myclasses}
                        onChangeHandler = {setselectedclass}
                        mainClass= 'dropdownmain primary borderradius-md'
                        itemClass= 'dropdownitem'
                        controlClass='dropdowncontrol'
                        menuClass='dropdownmenu primary'
                        controlActiveClass='dropdowncontrolactive'
                        mainActiveClass='dropdownmain-active'
                        placeholderValue='Select classes'
                    />

                         
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <p className='smallfont'>Schedule post</p>
                  
                            <Dropdown
                                options={posttypes}
                                onChangeHandler= {setposttype}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                            />

                           
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div>
                            <p className='smallfont'>Schedule post</p>
                            <input type="datetime-local" className='dropdowncontrol primary borderradius-md' defaultValue={postdate}  min={currentdate}/>
                        </div>
                    </div>
                </div>
                <div className='margintop12'>
                        <textarea name="" id="" cols="30" rows="3" className='commontextarea primaryborder' placeholder='Enter content...'></textarea>
                </div>

                <div className="postannouncementfooter flex">
                                <button onClick={temp2} className='secondary lighttext commonbutton'> Cancel</button>
                                <button onClick={temp2}  className='secondary  lighttext commonbutton'> Post</button>
                </div>  
                
            </div>  
    
    }
       </div>
          
    </div>
  )
}

export default CreateAnnouncementprof