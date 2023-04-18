import React, { useContext, useEffect, useState } from 'react'
import { responseContext } from '../Globalcontext'
import { SiAeromexico } from 'react-icons/si'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


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
             <button className='commonbutton lighttext secondary' onClick={()=>{navigate('/classes/sampleclass/activity/activityId')}}>Back to Response list</button> <h4>Student's Work , {responseinfo.status}</h4>
            <div className="flex marginleftauto">
                <h4>Score</h4>
                <input type="number" min={0} max={100} className="commontextbox primaryborder col-lg-4" defaultValue={score} onChange={(e)=>{setscore(e.target.value)}}/>
                {!ifsaved ?
                <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Mark response</button>
            :
            <button className='commontextbox secondary lighttext col-lg-4' >Saved </button>}
            </div>
        </div>
    

        {filelist !== undefined && filelist.map((item)=>(
            <a href={item.stringpath} target='_blank'>
                <div className='primary padding12  borderradius-md col-lg-6'>
                    <h3>{item.file_name}</h3>
                </div>
            </a>
        ))}

        
    </div>
  )
}

export default Viewresponse
