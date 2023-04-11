import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import {AiFillFile } from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import axios from 'axios';
import { subjectmoduleContext , userInfoContext} from '../Globalcontext';
import { useNavigate } from 'react-router-dom';


function AdminCreateActivity() {

  const {topicid} = useContext(subjectmoduleContext)
  const {userinfo} = useContext(userInfoContext)
  const navigate = useNavigate();



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
  const [category, setcategory] = useState(categorylist[0].value);
  const [topiclist, settopiclist] = useState([]);
  const [questionlink, setquestionlink] = useState();


  useEffect(()=>{
    console.log( 'topicid ' + topicid)

    axios.get('https://api.kyusillid.online/api/gettopicstring/' + topicid).then(
      response=> {
          settopiclist(response.data.map(item=>(
            {'value': item.topic_id , 'label' : item.topic_name}
          )))

      }
    ).catch();

    
  },[topicid])




  const handleSubmit = (e)=>{
    e.preventDefault()
    const temp = {
      'topic_id' : topic,
      'title' : title,
      'created_by' : userinfo.user.acc_id,
      'description' : description,
      'activity_type' : activitytype != undefined ? activitytype : "Material",
      'category' : category != undefined ? category : "Lecture",
      'questionlink': questionlink

    }

    axios.post('https://api.kyusillid.online/api/admincreatemodule2' , temp).then().catch();

    navigate('/kyusilidAdmin/department')






  }


  return (
    <div className='tertiary borderradius-lg padding12' >
       <h4>Creating a new activity for  #</h4>

       <div className=' margintop12 admincreateactivity padding12'>

        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col-lg-6 vertical">
              <div className='createactivitytitle'>
                  <p className="smallfont">TITLE</p><input type="text"   className='primaryborder' placeholder='title' onChange={e=>{settitle(e.target.value)}}/> 
              </div>

              <div className='margintop12 createactivitytitle'>
               <p className="smallfont">DESCRIPTION</p><textarea name="" id="" cols="30" rows="6" className='primaryborder' onChange={e=>{setdescription(e.target.value)}}></textarea><br />
                           
                 
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

              <div className="margintop12 createactivitytitle">
              <p className="smallfont">Select Topic</p>
              <Dropdown
                                options={topiclist}
                                onChangeHandler= {settopic}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue= 'select topic'
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