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

    useEffect(()=>{
  
        axios.get('https://api.kyusillid.online/api/activityassignfiles/' + responseinfo.assign_id).then(
            response => setfilelist(response.data)
        )

    },[])

  


    const tt = async (e)=>{

      e.preventDefault();
        const temp = {
            "assign_id": responseinfo.assign_id,
            "score" : score,
         
        }
        console.log(JSON.stringify(temp))
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

    const returnActivity = async() =>{
  
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

        await axios.post('https://api.kyusillid.online/api/returnActivity', temp).then(
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
    }

    console.log(responseinfo)

},[responseinfo])



  




  return (
    <div>
  

     <div className="flex">
     <button className='commonbutton lighttext secondary col-lg-3' onClick={()=>{navigate('/classes/sampleclass/activity/activityId')}}>Back to Response list</button>
     <button className='commonbutton secondary lighttext widthset' onClick={()=>{returnActivity()}}> Return</button>
            <h4 className='marginleftauto'>Score</h4>
            <form action="" onSubmit={tt}>
            <input type="number" required min={0} max={100} className="commontextbox primaryborder  col-lg-1 minwidth80" defaultValue={score} onChange={(e)=>{setscore(e.target.value)}}/>
            {!ifsaved ?
                <button type='submit' className='commonbutton secondary lighttext widthset' >Set Grade</button> 
                :
                <button className='commonbutton secondary lighttext widthset' >Saved </button>}
            </form>

 

     </div>


        <div className=" margintop12 marginleft12"> 
             <h4>Student's Work , {responseinfo.status} </h4>
             <div className="flex"><h6 className='smallfont'>{responseinfo.date_submitted && 'Turned in ' + responseinfo.date_submitted} {responseinfo.updated_at && responseinfo.date_submitted !== null && ", resubmitted at " + responseinfo.updated_at}</h6></div>
      
        </div>
    

        <div className="margintop12">
        {filelist !== undefined && filelist.map((item, key)=>(
            <a 
            href={"https://api.kyusillid.online/laravel" + item.stringpath} target="_blank" key={key} 
            className='col-lg-6' rel="noopener noreferrer" onClick={() => {
              if (item.file_name.endsWith('.docx') || item.file_name.endsWith('.pptx') || item.file_name.endsWith('.xlsx')) {
                window.open(
                  "https://view.officeapps.live.com/op/embed.aspx?" + 
                  "src=" + encodeURIComponent("https://api.kyusillid.online/laravel" + item.stringpath),
                  "_blank"
                );
                return false;
              }
            }}
          >
                <div className='primary padding12  borderradius-md margintop12'>
                    <h3>{item.file_name}</h3>
                </div>
            </a>
        ))}
        </div>

        
    </div>
  )
}

export default Viewresponse
