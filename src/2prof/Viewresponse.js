import React, { useContext, useEffect, useState } from 'react'
import { responseContext } from '../Globalcontext'
import { SiAeromexico } from 'react-icons/si'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Viewresponse() {



    const [score, setscore] = useState()
    const [uploadedFile, setUploadedFile] = useState('')
    const [ifsaved, setsaved] = useState(false)

    const {responseinfo} = useContext(responseContext)

    const [filelist, setfilelist] = useState([]);
    const navigate= useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [min, setmin] = useState(0);
    const [max, setmax] = useState(0)


    useEffect(()=>{

      if(responseinfo !== undefined){

        axios.get('https://api.kyusillid.online/api/activityassignfiles/' + responseinfo.assign_id).then(
            response => setfilelist(response.data)
        )

        axios.get('https://api.kyusillid.online/api/getgradinginfo/' + responseinfo.assign_id).then(
          response => {
              console.log(responseinfo.assign_id)
            console.log(response.data)
              if(response.data.gradingtype=== "Percentage"){
                setmax(100);
                setmin(50);
              }else{
                setmax(response.data.points)
                setmin(0);
              }
              
          }
      )
      }



    },[responseinfo])


    function handlesetnumber(e){
        var temp = Math.max(min, Math.min(max, e));
        setscore(temp)


    }

  


    const tt = async (e)=>{

      e.preventDefault();
        const temp = {
            "assign_id": responseinfo.assign_id,
            "score" : score,
         
        }
  
        await  axios.post('https://api.kyusillid.online/api/setGrade' , temp).then(

        ()=>{
          
            
            Swal.fire({
                icon: 'success',
              
                text: 'Successfully saved',
             
              })
            setsaved(true)
        }
        ).catch()

    }

    const returnActivity = () =>{
  
        if(score ===undefined || score === null){
            Swal.fire({
                icon: 'error',               
                text: "grade must be set",
            
              })
            return
        }
        const temp = {
            assign_id : responseinfo.assign_id
        }

       axios.post('https://api.kyusillid.online/api/returnActivity', temp).then(
            ()=>{       
                Swal.fire({
                    icon: 'success',               
                    text: "activity returned",
                
                  })
            }
          
        ).catch();
        
    }

    useEffect(()=>{
        if(responseinfo !== undefined){
            setscore(responseinfo.grade)

       // Call the API endpoint to get the uploaded file for the student
       axios
       .get(`https://api.kyusillid.online/api/getFile/${responseinfo.assign_id}`)
       .then((response) => {
       if (response.data.success) {
           setUploadedFile(response.data.url);
         
       } else {
  
           setUploadedFile(response.data.url);
         
       }
       })
       .catch((error) => {
       console.log(error.response.data);
     
       });
    }



},[responseinfo])



  
function handleClick() {
    setShowModal(true);
  }



  return (
    <div>
  

     <div className="flex">
     <button className='commonbutton lighttext secondary col-lg-3 ellipsis' onClick={()=>{navigate('/classes/sampleclass/activity/activityId')}}>Back to Response list</button>
     {responseinfo.status === "graded" || responseinfo.status === "submitted" ?
    <button className='commonbutton secondary lighttext widthset' onClick={()=>{returnActivity()}}>Return</button>
    : null
}

            <h4 className='marginleftauto'>Score</h4>
            <form action="" onSubmit={tt}>
            <input type="number" required  className="commontextbox primaryborder  col-lg-3 minwidth80" value={score} onChange={(e)=>{handlesetnumber(e.target.value)}}/>
            {!ifsaved ?
                <button type='submit' className='commonbutton secondary lighttext widthset' >Set Grade</button> 
                :
                <button className='commonbutton secondary lighttext widthset' >Saved </button>}
            </form>

 

     </div>


        <div className=" margintop12 marginleft12"> 
             <h4>{responseinfo.name}'s Work , {responseinfo.status} </h4>
             <div className="flex"><h6 className='smallfont'>{responseinfo.date_submitted && 'Turned in ' + responseinfo.date_submitted} {responseinfo.updated_at && responseinfo.date_submitted !== null && ", resubmitted at " + responseinfo.updated_at}</h6></div>
      
        </div>
    

        <div className="margintop12">
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
              <div className='materialpanel primary borderradius-md' style={{height:'auto', width:'50%'}} onClick={handleClick}>
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
        </div>

        
    </div>
  )
}

export default Viewresponse
