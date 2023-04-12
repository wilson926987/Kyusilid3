import React, { useContext, useEffect, useState } from 'react'
import { responseContext } from '../Globalcontext'
import { SiAeromexico } from 'react-icons/si'
import axios from 'axios'


function Viewresponse() {



    const [score, setscore] = useState()
    const [uploadedFile, setUploadedFile] = useState('')
    const [ifsaved, setsaved] = useState(false)

    const {responseinfo} = useContext(responseContext)

    const tt = async ()=>{

        const temp = {
            "assign_id": responseinfo.assign_id,
            "score" : score,
         
        }
        console.log(JSON.stringify(temp))
        await  axios.post('https://api.kyusillid.online/api/setGrade' , temp).then(

        ()=>{
            alert("Successfully saved");
            setsaved(true)
        }
        ).catch()

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
            <h4>Student's Work</h4>  
            <div className="flex marginleftauto">
                <h4>Score</h4>
                <input type="text" className="commontextbox primaryborder col-lg-4" defaultValue={score} onChange={(e)=>{setscore(e.target.value)}}/>
                {!ifsaved ?
                <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Mark response</button>
            :
            <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Saved </button>}
            </div>
        </div>
        <h4>{responseinfo.status}</h4>
  {/* Display the uploaded file if it exists */}
      {responseinfo.file_name !== undefined &&
    
     <a href={uploadedFile} target="_blank" className='responsefile primary borderradius-md '>{responseinfo.file_name}</a>
      
      }

        
    </div>
  )
}

export default Viewresponse
