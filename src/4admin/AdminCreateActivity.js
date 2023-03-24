import React, { useEffect, useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import {AiFillFile } from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'


function AdminCreateActivity() {

  const activitytpelist = [
    {'value' : 'Material','label' : 'Material'},
    {'value' : 'Assignment','label' : 'Assignment'},
    {'value' : 'Activity','label' : 'Activity'},
    {'value' : 'Questionnaire','label' : 'Questionnaire'},
  ]

  const categorylist = [
    {'value' :"Lecture" , "label" : "Lecture"},
    {'value' : "Laboratory" , "label" :"Laboratory"}
   
  ]

  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [activitytype, setactivitytype] = useState(activitytpelist[0].value);
  const [topic, settopic] = useState();
  const [createdby, setcreatedby] = useState()
  const [category, setcategory] = useState(categorylist[0].value);
  const [topiclist, settopiclist] = useState();


  useEffect(()=>{
    
  },[])


 






  const handleSubmit = (e)=>{
    e.preventDefault()

  }
  return (
    <div className='tertiary borderradius-lg padding12' >
       <h4>Creating a new activity for  #</h4>

       <div className='margintop12 admincreateactivity padding12'>

        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col-lg-6">
              <div className='createactivitytitle'>
                  <p className="smallfont">TITLE</p><input type="text"   className='primaryborder' placeholder='title'/> 
              </div>

              <div className='margintop12 createactivitytitle'>
               <p className="smallfont">DESCRIPTION</p><textarea name="" id="" cols="30" rows="6" className='primaryborder'></textarea><br />
                           
                 
              </div>
            </div>

            <div className="col-lg-6">

              <div className="margintop12 createactivitytitle">
                <p className="smallfont">Select Category</p>
              <Dropdown
                                options={categorylist}
                                onChangeHandler= {setcategory}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue= 'Lecture'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                            
                            />  
            
        
              </div>


              
              <div className="margintop12 createactivitytitle">
              <p className="smallfont">Select Activity Type</p>
              <Dropdown
                                options={activitytpelist}
                                onChangeHandler= {setactivitytype}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue= 'select activity type'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                            
                            />  
         
        
              </div>

              {activitytype ==="Material" ?
                 <div className='margintop12'>
                 <p className="smallfont">File link</p>
   
                 <div className="row">
                  <div className="col-lg-8">
                   <div className='uploadedfile flex primary borderradius-md'>
                           <AiFillFile/>
                           <h5> sample uploaded file</h5>
                     </div>
                  </div>
   
                  <div className="col-lg-8">
                    <button className='commonbutton secondary lighttext'> <BsFillPlusCircleFill/> upload link</button>
                  </div>
   
                 </div>
   
   
                 </div>
                 :
                 <div>

                 </div>
                 
                }


           
          

            </div>
          </div>


                  
          <button className='secondary lighttext createactivityconfirm centerdiv' >Create</button>
                

        </form>

      
       </div>
    </div>
  )
}

export default AdminCreateActivity