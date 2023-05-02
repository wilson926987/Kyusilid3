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

import * as XLSX from "xlsx"; 

import Swal from 'sweetalert2';



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
  const [edittitle, setedittitle] = useState()
  const [editdescription, seteditdescription] = useState();
  const [activitystatus, setactivitystatus]= useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(()=>{
  //   console.log
  // },[])
  
  
  
  useEffect(()=>{

    if(currentactivity!==undefined){
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
      
        }
      ).catch();
     }

     axios
     .get(`https://api.kyusillid.online/api/getFile2/${currentactivity.activity_id}`)
     .then((response) => {
     if (response.data.success) {
         setfiletemp(response.data.url);
        
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



     setedittitle(currentactivity.activity_title)
     seteditdescription(currentactivity.description)


    }


   


     



  },[currentactivity])






  const [mark, setmark] = useState();
  const [fileuploads, setfileuploads] = useState();
  const [uploadedFile, setUploadedFile] = useState(null);

  const [isassigned, setisassigned] = useState(false);

  const [filelist , setfilelist] = useState([]);
  const [filesubmitlist, setfilesubmitlist] = useState([])


  const [statusfilter , setstatusfilter] = useState("All");

  const [selectedFile, setSelectedFile] = useState(null);
  const [submitedfilename, setsubmitedfilename] = useState();

  const [showModal, setShowModal] = useState(false);


 



  const [filelinktemp, setfiletemp]= useState();

  const deletesubmittedfile = (e)=>{

 
    if(activitystatus.status === 'assigned'){
      setfilesubmitlist(filesubmitlist.filter(item=> item.id !== e))
    }

  }

    
  useEffect(()=>{
    


    if(activitystatus !== undefined && userinfo.user.usertype==="stud"){
      axios.post('https://api.kyusillid.online/api/markview' ,{"assign_id" : activitystatus.assign_id}).then().catch(
        error=>console.log(error.data)
      )
    }

    if(userinfo.user.usertype ==="stud" && activitystatus !== undefined && activitystatus.assign_id !== undefined ){
      axios.get('https://api.kyusillid.online/api/activityassignfiles/' + activitystatus.assign_id).then(
      response=>{
        setfilesubmitlist(response.data.map(item=>({
          "id" : item.file_id,
          "filename" :  item.file_name,
          "url" : item.stringpath
        })))

       
      }
      ).catch(error=> console.log(error.data));
      axios.get('https://api.kyusillid.online/api/score/' + activitystatus?.assign_id).then(
       response=>{
         console.log(response.data);
 
          if(response.data.status == "submitted") {
           setIsSubmitted(true);
          }
       }
      ).catch(error=> console.log(error)).finally(() =>setIsLoading(false));
 
     }
 
 
   },[activitystatus])




  const takequiz= ()=>{
    window.open('/Quizanswer/' + currentactivity.quiz_link + "/" + activitystatus.assign_id , '_blank')
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
     
      Swal.fire('successfully edited');
      navigate('/classes/sampleclass/modules');
    }
    ).catch(error => console.log(error.data))

  }

  const handledelete = async (e) =>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete('https://api.kyusillid.online/api/deleteactivity/' + e).then(
          response=>{
          
            
            Swal.fire(
              'Deleted!',
              'Activity has been deleted.',
              'success'
            )
            navigate('/classes/sampleclass/modules');
          }
        )

  .catch();

     
      }
    })

    

   
  
  }


  const posttomodule = async()=>{
  
  
    let temp = {
      "activity_title" : currentactivity.activity_title,
      "activity_type": currentactivity.activity_type,
      "category" : currentactivity.category,
      "description" : currentactivity.description,
      "created_by" : userinfo.user.acc_id,
      "topic_name" : currentactivity.topic_name,
      "classes_id" : currentclass.moduleSource,
      "quiz_link" : currentactivity.quiz_link
      
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

    //console.log(filesubmitlist)
    
  },[selectedFile])




  

 

  const handIn = async (e) => {

    if(activitystatus.status === 'returned'){
      return
    }

  
    if(filesubmitlist.length===0 || filesubmitlist === undefined){
      Swal.fire({
   
        text: "Turn in without submitted files?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Turn In'
      }).then((result) => {
        if (result.isConfirmed) {

          const temp = {
            assign_id: e,
            filelist: filesubmitlist
          };
          axios.post("https://api.kyusillid.online/api/handIn", temp)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      
          axios.get('https://api.kyusillid.online/api/getactivitystatus/' + currentactivity.activity_id + '/' + userinfo.user.acc_id).then(
            response=>{
            
              if(response.data !== "unassigned"){
                setactivitystatus(response.data);
                setisassigned(true);
              }
            }
           ).catch()
       
        }
      })
    }else{
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
       
          if(response.data !== "unassigned"){
            setactivitystatus(response.data);
            setisassigned(true);
          }
        }
       ).catch()
    }

    
   
  };


  
  
  
  

const unSubmit= async (e)=>{

  if(activitystatus.status ==="returned"){
    return
  }
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



function exportGrades() {
  if(responselist){
    const exportData = responselist.map((item) => {
   return{
    Name: item.name ? item.name : '',
    Status: item.status ? item.status : '',
    Grade: item.grade ? item.grade : 0,
    Temp : "tyemp" 
  };
});
  const date = new Date().toISOString().slice(0, 10);
  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Grades");
  XLSX.writeFile(workbook, `${currentclass.sub_name} - ${currentactivity.activity_title} Responses (${date}).xlsx`);
  }
}
 



function handleClick() {
  setShowModal(true);
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

       


       {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') && (currentactivity.activity_type !== 'Material') &&
        <div className= {`flex activitytab ${activitytab === 'responses'  ? 'primary' : 'background'}`} onClick={()=>{setactivitytab('responses') ; setactivitysettings(false)}}>
            
         <h4>Responses</h4>




 
        </div>
       
       }


{(userinfo.usertype==='prof' || userinfo.usertype ==='admin') &&
   
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
               {filelist !== undefined && filelist.map((item, key)=>(
                  <a 
                   key={key} 
                    className='padding12' rel="noopener noreferrer" download="" onClick={() => {
                      if (item.file_name.endsWith('.docx') || item.file_name.endsWith('.pptx') || item.file_name.endsWith('.xlsx')) {
                        window.open(
                          "https://view.officeapps.live.com/op/embed.aspx?" + 
                          "src=" + encodeURIComponent("https://api.kyusillid.online/laravel" + item.stringpath),
                          "_blank"
                        );
                        return false;
                      }else if (item.file_name.endsWith('.mp4') || item.file_name.endsWith('.png') || item.file_name.endsWith('.jpg') || item.file_name.endsWith('.jpeg') || item.file_name.endsWith('.gif')) {
                        // Open modal to display the MP4 or image file
                        var modal = document.createElement('div');
                        modal.style.display = 'block';
                        modal.style.position = 'fixed';
                        modal.style.top = '50%';
                        modal.style.left = '50%';
                        modal.style.width = 'auto';
                        modal.style.height = 'auto';
                        modal.style.background = '#fff';
                        modal.style.zIndex = '999';
                        modal.style.opacity = '1';
                        modal.style.transition = 'opacity 0.3s';
                        modal.style.transform = 'translate(-50%, -50%)';
                        
                        var overlay = document.createElement('div');
                        overlay.style.display = 'block';
                        overlay.style.position = 'fixed';
                        overlay.style.top = '0';
                        overlay.style.left = '0';
                        overlay.style.width = '100%';
                        overlay.style.height = '100%';
                        overlay.style.background = '#000';
                        overlay.style.opacity = '0.7';
                        overlay.style.zIndex = '1';
                        overlay.style.transition = 'opacity 0.3s';
                        
                        var modalHeader = document.createElement('div');
                        modalHeader.style.height = '50px';
                        modalHeader.style.backgroundColor = '#f1f1f1';
                        modalHeader.style.display = 'flex';
                        modalHeader.style.alignItems = 'center';
                        
                        var closeButton = document.createElement('span');
                        closeButton.style.fontSize = '40px';
                        closeButton.style.fontWeight = 'bold';
                        closeButton.innerHTML = '&times;';

                        var closeButtonContainer = document.createElement('div');
                        closeButtonContainer.style.display = 'flex';
                        closeButtonContainer.style.alignItems = 'center';
                        closeButtonContainer.style.paddingRight = '20px';
                        closeButtonContainer.style.backgroundColor = 'red';
                        closeButtonContainer.appendChild(closeButton);
                        closeButtonContainer.style.marginLeft = 'auto';

                        modalHeader.appendChild(closeButtonContainer);


                        var modalContent = document.createElement('div');
                        modalContent.style.margin = 'auto';
                        modalContent.style.textAlign = 'center';
                        
                        if (item.file_name.endsWith('.mp4')) {
                          var video = document.createElement('video');
                          video.style.width = '100%';
                          video.style.height = '100%';
                          video.controls = true;
                          var source = document.createElement('source');
                          source.src = 'https://api.kyusillid.online/laravel' + item.stringpath;
                          source.type = 'video/mp4';
                          video.appendChild(source);
                          modalContent.appendChild(video);
                        } else {
                          var img = document.createElement('img');
                          img.style.maxWidth = '100%';
                          img.style.maxHeight = '100%';
                          img.src = 'https://api.kyusillid.online/laravel' + item.stringpath;
                          modalContent.appendChild(img);
                        }
                      
                        modal.appendChild(modalHeader);
                        modal.appendChild(modalContent);
                        document.body.appendChild(overlay);
                        document.body.appendChild(modal);
                      
                        // Add event listener to close modal when clicked on close button or outside the content area
                        closeButton.addEventListener('click', function() {
                          modal.style.opacity = '0';
                          overlay.style.opacity = '0';
                          setTimeout(function() {
                            modal.remove();
                            overlay.remove();
                          }, 300);
                        });
                      
                        overlay.addEventListener('click', function() {
                          modal.style.opacity = '0';
                          overlay.style.opacity = '0';
                          setTimeout(function() {
                            modal.remove();
                            overlay.remove();
                          }, 300);
                        });
                      }
                      else if(item.file_name.endsWith('.pdf')) {
                        window.open(
                          "https://api.kyusillid.online/laravel" + item.stringpath,
                          "_blank"
                        );
                        }
                      
                      
                    }}
                  >
                    <div className='materialpanel primary borderradius-md' style={{height:'auto', width:'auto'}} onClick={handleClick}>
                    {item.stringpath.endsWith(".docx") || item.stringpath.endsWith(".pptx") || item.stringpath.endsWith(".xlsx") ? (
                    <iframe
                      src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent("https://api.kyusillid.online/laravel" + item.stringpath)}`}
                      title="Thumbnail"
                      width="100%"
                      height="200px"
                      style={{ pointerEvents: "none", overflow: "hidden", transform: "scale(1)" }}
                    ></iframe>
                  ) : (
                    <iframe
                      src={`https://api.kyusillid.online/laravel${item.stringpath}`}
                      title="Thumbnail"
                      width="100%"
                      height="200px"
                      style={{ pointerEvents: "none", overflow: "hidden", transform: "scale(1)" }}
                    ></iframe>
                  )}

                      <p className='textcenter'>{item.file_name}</p>
                    </div> 
                  </a>
              ))}
{showModal && (
        <div className="modal">
          {/* Add modal content here */}
        </div>
      )}
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
                 
                        {(userinfo.usertype==='prof' || userinfo.usertype ==='admin') ? <button className='secondary'

                          type="button"
                          onClick={() => {
                            window.open("/Quiz/"+currentactivity.quiz_link, "_blank");
                          }}
                        >view quiz</button> :  !isLoading ? !isSubmitted && <button className='secondary' onClick={takequiz}>take quiz </button> : "Loading,"}
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
                {activitystatus.status === 'graded' ?
                 <h4>Grade {activitystatus.grade} / {activitystatus.points}</h4>
                 :
                 activitystatus.status ==='returned'?
                 <h4>Returned {activitystatus.grade} / {activitystatus.points}</h4>
                 :
                 activitystatus.status ==='handed in late'?
      
                 <h4>Handed in Late  </h4>
                 :

                 activitystatus.status ==='submitted'?
      
                 <h4>Submitted </h4>
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
              <button className='secondary' disabled={activitystatus.status !== 'assigned'} onClick={()=>{document.getElementById('addfile').click();}}>Add file</button>
            }
             
                
                <input  className ='secondary' type="file"  id='addfile' hidden onChange={handleFileInput} />


             
                    {isassigned ? 
                    <>
                    {activitystatus.status === 'assigned' ?
                    <button className='secondary' onClick={()=>{handIn(activitystatus.assign_id)}}> Turn In</button>
                  :
                  <button className='tertiary' onClick={()=>{unSubmit(activitystatus.assign_id)}} > Unsubmit</button>
                  }

                    </>

                    :
                    <button className='secondary' disabled > Not assigned</button>

                       
                    

                       
                    
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
    
        <button className='commonbutton secondary lighttext padding12'  onClick={() => exportGrades()} >Export activity status as excel</button>
      

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
