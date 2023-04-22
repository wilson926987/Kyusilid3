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

    const returnActivity = async() =>{
        const temp = {
            assign_id : responseinfo.assign_id
        }

        await axios.post('https://api.kyusillid.online/api/returnActivity', temp).then(
            ()=>{
                alert("activity returned");
              

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
            <input type="number" min={0} max={100} className="commontextbox primaryborder  col-lg-1" defaultValue={score} onChange={(e)=>{setscore(e.target.value)}}/>
            {!ifsaved ?
                <button className='commonbutton secondary lighttext widthset' onClick={tt}>Set Grade and Return</button> 
                :
                <button className='commonbutton secondary lighttext widthset' >Saved </button>}

 

     </div>


        <div className="flex margintop12 marginleft12"> 
             <h4>Student's Work , {responseinfo.status} </h4>
      
        </div>
    

        <div className="margintop12">
        {filelist !== undefined && filelist.map((item)=>(
            <a href={"https://api.kyusillid.online/laravel"+item.stringpath} target='_blank' className='col-lg-6 ' >
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
