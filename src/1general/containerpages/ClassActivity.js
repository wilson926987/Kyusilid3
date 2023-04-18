import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {responseContext, currentclassContext, currentActivityContext , userInfoContext , modulelistContext} from '../../Globalcontext'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment, MdSend} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import {BsGearFill} from 'react-icons/bs'
import axios from 'axios';
import Textbox from '../formcomponents/Textbox';



function ClassActivity() {

  const {setresponseinfo} = useContext(responseContext) 

  const {setmodulelist} = useContext(modulelistContext)
  const navigate = useNavigate();
 const {currentclass} = useContext(currentclassContext);
  const {currentactivity} = useContext(currentActivityContext);
  const {userinfo} = useContext(userInfoContext);
  const [activitytab ,setactivitytab] = useState( 'default');

  const [act_commentlist, set_actcommnentlist] = useState([]);
  const [commentinput, setcommentinput] = useState();
  const [activitysettings, setactivitysettings] = useState(false);
  const [edittitle, setedittitle] = useState(currentactivity.activity_title)
  const [editdescription, seteditdescription] = useState(currentactivity.description);



  const [mark, setmark] = useState();
  const [activitystatus, setactivitystatus]= useState();
  const [fileuploads, setfileuploads] = useState();
  const [uploadedFile, setUploadedFile] = useState(null);

  const [isassigned, setisassigned] = useState(false);

  const [filelist , setfilelist] = useState([]);
  const [filesubmitlist, setfilesubmitlist] = useState([])


  const [statusfilter , setstatusfilter] = useState("All");

  const [selectedFile, setSelectedFile] = useState(null);
  const [submitedfilename, setsubmitedfilename] = useState();



  const [filelinktemp, setfiletemp]= useState();

  const deletesubmittedfile = (e)=>{

 
    if(activitystatus.status !== 'pending'){
      setfilesubmitlist(filesubmitlist.filter(item=> item.id !== e))
    }
    

    
  }





  const postcomments = async ()=>{

    if(commentinput != ""){
      const temp = {
        "acc_id" : userinfo.user.acc_id,
        "activity_id" : currentactivity.activity_id,
        "comment_content" : commentinput
      }
    
  
      await axios.put('https://api.kyusillid.online/api/createactivitycomment', temp).then(response =>{
        set_actcommnentlist(response.data);
        
        
      }).catch(error => {
        console.log(error);
      });

      setcommentinput('');
    } 
  }

  const handledit = async (e)=>{
    e.preventDefault();

    const temp = {
      "title" : edittitle, 
      "description" : editdescription,
      "activity_id" : currentactivity.activity_id
    }

    await axios.post('https://api.kyusillid.online/api/updateactivity', temp).then(
    response=>{
      alert('successfully edited');
      navigate('/classes/sampleclass/modules');
    }
    ).catch(error => console.log(error.data))

  }

  const handledelete = async (e) =>{

    if(window.confirm('delete this activity?') === true){
        await axios.delete('https://api.kyusillid.online/api/deleteactivity/' + e).then(
          response=>{
            alert('successfully deleted');
            navigate('/classes/sampleclass/modules');
          }
        )

  .catch();

    }
  
  }


  const posttomodule = async()=>{
    console.log(currentclass)
  
    let temp = {
      "activity_title" : currentactivity.activity_title,
      "activity_type": currentactivity.activity_type,
      "category" : currentactivity.category,
      "description" : currentactivity.description,
      "created_by" : userinfo.user.acc_id,
      "topic_name" : currentactivity.topic_name,
      "classes_id" : currentclass.moduleSource
    }

   
    

    await axios.post("https://api.kyusillid.online/api/posttomodule", temp).then(
      response=> console.log(response.data)
    ).catch()

    await axios.get('https://api.kyusillid.online/api/get-topiclist/' + currentclass.moduleSource)
    .then(response => {
      setmodulelist(response.data);
     
    
    })
    .catch(error => {
      console.log(error);
    });



    navigate('/classes/sampleclass');
  }


  const [responselist, setresponselist] = useState();

  const deletecomment = async(e)=>{
    if(window.confirm('delete this comment?') === true){
      await axios.delete('https://api.kyusillid.online/api/deleteactivitycomment/' + e).then(
       
      set_actcommnentlist( act_commentlist.filter(ee=> ee.comment_id != e))

  ).catch();

    }

  }

  //Upload file
  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadFile = () => {
   
    
    //pagkaupload nito kunin ung url
  }



  useEffect(()=>{

    if(currentactivity===undefined){
        navigate('/')
    }
     axios.get('https://api.kyusillid.online/api/getactivitycommentlist/' + currentactivity.activity_id).then(response=>
      {set_actcommnentlist(response.data)}
     )

     axios.get('https://api.kyusillid.online/api/getactivitystatus/' + currentactivity.activity_id + '/' + userinfo.user.acc_id).then(
      response=>{
        if(response.data !== "unassigned"){
          setactivitystatus(response.data);
          setisassigned(true);
        }
      }
     ).catch()


     if(userinfo.user.usertype ==="prof"){
      axios.get('https://api.kyusillid.online/api/getactivityresponses/' + currentactivity.activity_id).then(
        response =>{
          setresponselist(response.data);
          console.log(response.data)
        }
      ).catch();
     }

     axios
     .get(`https://api.kyusillid.online/api/getFile2/${currentactivity.activity_id}`)
     .then((response) => {
     if (response.data.success) {
         setfiletemp(response.data.url);
         console.log(response.data.url)
     } else {
         console.log(response.data.message);
         setUploadedFile(response.data.url);
         console.log(response.data.url)
     }
     })
     .catch((error) => {
     console.log(error.response.data);
   
     });

     axios.get('https://api.kyusillid.online/api/activityfiles/' + currentactivity.activity_id).then(
      response=>{
        setfilelist(response.data)
      }
     ).catch(error=> console.log(error.data));


  },[currentactivity])


  useEffect(()=>{
    
    if(selectedFile !== null && selectedFile !== undefined){
      const formData = new FormData();
    formData.append("file_link", selectedFile);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.kyusillid.online/api/uploadfile2");
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setfilesubmitlist(filesubmitlist =>[...filesubmitlist, {
          "id" : response.id,
          "filename" :  response.data.name,
          "url" : response.url

        }])
       

      }
    };
    xhr.send(formData);
    }else{
   
      console.log('no selected file')
    }

    console.log(filesubmitlist)
    
  },[selectedFile])




  

 

  const handIn = async (e) => {

    const temp = {
      assign_id: e,
      filelist: filesubmitlist
    };
    await axios.post("https://api.kyusillid.online/api/handIn", temp)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    await axios.get('https://api.kyusillid.online/api/getactivitystatus/' + currentactivity.activity_id + '/' + userinfo.user.acc_id).then(
      response=>{
        console.log(response.data)
        if(response.data !== "unassigned"){
          setactivitystatus(response.data);
          setisassigned(true);
        }
      }
     ).catch()
   
  };


  
  
  
  

const unSubmit= async (e)=>{
  var temp = {
    "assign_id" : e
  }

  await axios.post('https://api.kyusillid.online/api/unSubmit' , temp).then(
    response=>{
      console.log(response.data)
    }
  )

  await axios.get('https://api.kyusillid.online/api/getactivitystatus/' + currentactivity.activity_id + '/' + userinfo.user.acc_id).then(
    response=>{
      console.log(response.data)
      if(response.data !== "unassigned"){
        setactivitystatus(response.data);
        setisassigned(true);
      }
    }
   ).catch()

}












  
  if(currentactivity=== undefined){
    return (<div></div>)
  }else{
    return (
      <div>

        <div className='flex'>
        <div className={`flex activitytab ${(activitytab ==='default' || userinfo.usertype==='stud') ? 'primary' : 'background'}`} onClick={()=>{setactivitytab('default') ; setactivitysettings(false)}}>
       <div className='activityiconcontainer'>  
                      <div className='activityicon tertiary marginright12'>
                        {currentactivity.activitytype==='Material' ?
                          <RiBookFill />:
                          currentactivity.activitytype==='Questionnaire' ?
                          <MdQuiz/> :
                          currentactivity.activitytype==='Assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
        </div>
          
        <h4 className='ellipsis'> { currentactivity.topic_name !== 'no topic' &&  currentactivity.topic_name + ': '} {currentactivity.activity_title}</h4>

       </div>

       


       {userinfo.usertype ==='prof' && (currentactivity.activity_type !== 'Material') &&
        <div className= {`flex activitytab ${activitytab === 'responses'  ? 'primary' : 'background'}`} onClick={()=>{setactivitytab('responses') ; setactivitysettings(false)}}>
            
         <h4>Responses</h4>




 
        </div>
       
       }


{userinfo.usertype === 'prof' &&
   
   <div className='flex activitytab background relative' >
      <div  onClick={()=>{setactivitysettings(!activitysettings)}}>
      <BsGearFill />
      </div>
    
       {activitysettings && 
  
           <div className='activitysettings tertiary borderradius-md'>
        <ul>
          <li className='padding12' onClick={()=>{setactivitytab('edit') ; setactivitysettings(false) }}>Edit {currentactivity.activity_type}</li>
          <li className='padding12' onClick={()=>{handledelete(currentactivity.activity_id)}}>Delete {currentactivity.activity_type}</li>
          <li className='padding12' onClick={()=>{setactivitytab('postmodule') ; setactivitysettings(false) }}>Post to Source Modules</li>

         </ul>
         </div>        
      }

   </div>  
   } 

        <div className="marginleftauto smallfont">
          <p>Date posted : {currentactivity.date_schedule}</p>
         {currentactivity.activity_type !== 'Material' ?  <p>Date Due : {currentactivity.date_due !== null ? currentactivity.date_due : 'no due date' }</p> : <p>&nbsp;</p>}
        </div>
        </div>
        <hr/>

       {activitytab === 'default' ?
        <React.Fragment>
      

        <div className="row">
          <div className="col-lg-8 ">
          <div className='activitydescription'> 
          {currentactivity.description}



        </div>
          <div className='activitycontent'>
    
            {currentactivity.activity_type ==='Material' ?
              <div className="flex">
               {filelist.map((item, key)=>(
                <a href={item.stringpath} target="_blank" key={key} className='padding12'>

                <div className='materialpanel primary borderradius-md'>
                  <RiBookFill />
                  <p className='textcenter'>{item.file_name}</p>
                 </div> 
                </a>
               ))}
              </div>
            :currentactivity.activity_type==='Questionnaire' ?
                  <div className="flex">
                    <div className='questionnairepanel primary borderradius-md'>
                      <h4>Quizz</h4>
                      <hr />
                      <div className='margintop12'>
                      {/* <h5> 20 items</h5>
                      <h5> 50 points</h5> */}
                      </div>
                      <div className='questionnairefooter flex'>
                 
                        {userinfo.usertype==='prof' ? <button className='secondary'>view quiz</button> : <button className='secondary'>take quiz</button>}
                      </div>
                  </div>
                  </div>
            :
            <div></div>
          }
        </div>

          </div>
           
         {userinfo.usertype==='stud' && (currentactivity.activity_type!== 'Material' && currentactivity.activity_type !=='Questionnaire') &&
           <div className="col-lg-4">
            {
              isassigned ?
          
              <div className=" background borderradius-md margintop12 padding12">
                {activitystatus.status === 'marked' ?
                 <h4>Marked {activitystatus.grade} / {activitystatus.points}</h4>
                 :
                 activitystatus.status ==='handed in late'?
      
                 <h4>Handed in Late  </h4>
                 :

                 activitystatus.status ==='done'?
      
                 <h4>Done </h4>
                 :

                 <h4>Assigned </h4>
                
                }
                
              </div>
              :         
              <div><h4>Activity not Assigned </h4></div>
            }
             


           <div className=" background borderradius-md submissionpanel margintop12">
             <h4>Your work</h4>
             <div className='flex '>

              <div className='padding12'>
                {filesubmitlist.map((item, key)=> (

                  <div key={key} className=' margintop12 relative submitted-activity' onClick={()=> {deletesubmittedfile(item.id)}}>
                    <div className='primary borderradius-md padding12'>
                        {item.filename} 
                    </div>

                    

                    <div >
                      <AiFillDelete />
                    </div>


                  </div>
                  
                ))}
              </div>

              {activitystatus != undefined &&
              <button className='secondary' disabled={activitystatus.status !== 'pending'} onClick={()=>{document.getElementById('addfile').click();}}>Add file</button>
            }
             
                
                <input  className ='secondary' type="file"  id='addfile' hidden onChange={handleFileInput} />


             
                    {isassigned ? 
                    <>
                    {activitystatus.status === 'pending' ?
                    <button className='secondary' onClick={()=>{handIn(activitystatus.assign_id)}}> Hand In</button>
                  :
                  <button className='tertiary' onClick={()=>{unSubmit(activitystatus.assign_id)}} > Unsubmit {activitystatus.status}</button>
                  }

                    </>

                    :
                    <button className='secondary' disabled > Not assinged</button>

                       
                    

                       
                    
                  }
                    
               
            
               
             </div>
           </div>
          </div>}
        </div>
       

        <div className="activitycomments">
          <h4>Class comments</h4>
          <hr/>  
          {act_commentlist.map((item)=>(
            <div key={item.comment_id} className='margintop12'>
              <div className='flex commentheader'> <h6>{item.firstname} {item.middle} {item.lastname} {item.suffix}</h6>   <button className='commentbutton commonbutton secondary lighttext' onClick={()=>{deletecomment(item.comment_id)}}>delete</button> <p className='smallfont marginleftauto'>{item.date_posted}</p></div>
              <div> {item.comment_content}</div>
            </div>
          ))}

<div className='relative'>
<textarea name="Text1"  cols='1' rows="2"  placeholder='Enter comment' className='commontextarea primaryborder margintop12' value={commentinput} onChange={(e)=> setcommentinput(e.target.value)} ></textarea>
   
   <div className='sendbutton' onClick={postcomments}>   <MdSend/></div> 
</div>
        
          
        
        </div>
        </React.Fragment> :

        activitytab ==='responses' ?
        <div>

<div class="row ">
            

        {/* <div className="col-lg-2 margintop12">
          <div className='primary borderradius-md '>
              <a  className='btn' onClick={() => setstatusfilter('Pending')}>
                <h4>2</h4>
                <h6>Pending</h6>
              </a>
          </div>
        
        </div>
        <div className="col-lg-2 margintop12">
          <div className='primary borderradius-md '>
              <a  className='btn' onClick={() => setstatusfilter('Done')}>
                <h4>0</h4>
                <h6>Done</h6>
              </a>
          </div>
        
        </div>
        <div className="col-lg-2 margintop12">
          <div className='primary borderradius-md '>
              <a  className='btn' onClick={() => setstatusfilter('Missing')}>
                <h4>0</h4>
                <h6>Missing</h6>
              </a>
          </div>
        
        </div>
        <div className="col-lg-2 margintop12">
          <div className='primary borderradius-md '>
              <a  className='btn' onClick={() => setstatusfilter('Late')}>
                <h4>0</h4>
                <h6>Late</h6>
              </a>
          </div>
        
        </div>
        <div className="col-lg-2 margintop12">
          <div className='primary borderradius-md '>
              <a  className='btn' onClick={() => setstatusfilter('Unassigned')}>
                <h4>50</h4>
                <h6>Unassigned</h6>
              </a>
          </div>
        
        </div> */}

      

      </div>



          <table className='width100 margintop12'>
            <thead >
              <tr className='primary borderradius-md'>
                <th className='padding12'>Name</th>
                <th className="padding12">Status</th>
                <th className="padding12">Grade</th>
             
             
              </tr>
            </thead>
            <tbody>
              {responselist != undefined && responselist.map((item , key)=>(
                <tr key={key}> 
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.grade !== null ?  item.grade : '?'} / {item.points}</td>
                  <td> <button className='commonbutton secondary lighttext' onClick={()=>{setresponseinfo(item); navigate('/classes/sampleclass/activity/activityId/response')}}> view</button></td>
                </tr>
              ))}
              
            </tbody>
          </table>
           


        
        </div>
        :
        activitytab ==="postmodule"?
        <div className='flex postmodule'>
          <h4>{currentactivity.activity_title} will be posted to source modules.</h4>

          <button className='commonbutton lighttext secondary' onClick={posttomodule}>Confirm</button>

          


        </div>
        :
        <div> 
          {/* edit activity */}

          <form onSubmit={handledit} >
            <div className="col-lg-6">
            <Textbox value={edittitle}  handleChange={setedittitle} placeholdervalue={'new title'}/> 
            </div>

            <div className="col-lg-6 creatactivitytitle">
            <textarea name="" id="" cols="30" rows="6" className='primaryborder commontextarea width100 marginleft10'  value={editdescription} placeholder='new description' onChange={(e)=>{seteditdescription(e.target.value)}}></textarea>
          
            </div>

          <div className='flex editactivityfooter'>
           <button type='submit' className='commonbutton secondary lighttext '>Confirm changes</button>

          </div>
            


          </form>





        </div>

      
      
      }

     
  
  
      </div>
    )

  }
  
}

export default ClassActivity