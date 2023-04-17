import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../assets/images/avatar.jpg'
import { currentclassContext } from '../../Globalcontext'
import classbanner1 from '../../assets/images/classbanner1.png'
import classbanner2 from '../../assets/images/classbanner2.png'
import classbanner3 from '../../assets/images/classbanner3.png'
import classbanner4 from '../../assets/images/classbanner4.png'
import classbanner5 from '../../assets/images/classbanner5.png'
import classbanner6 from '../../assets/images/classbanner6.png'
import classbanner7 from '../../assets/images/classbanner7.png'
import classbanner8 from '../../assets/images/classbanner8.png'
import axios from 'axios';


function Classpanel({classitem}) {
  const navigate = useNavigate()
  const {setcurrentclass} = useContext(currentclassContext);
  const classbanner = [classbanner1, classbanner1,classbanner2, classbanner3, classbanner4, classbanner5 , classbanner6, classbanner7, classbanner8]
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    async function fetchProfilePic() {
      try {
        const response = await axios.get(`https://api.kyusillid.online/api/getprofilepic/${classitem.acc_id}`);
        setProfilePic(response.data.profile_pic);
        console.log(response.data.profile_pic);
      
      } catch (error) {
        console.error(error.response.data);
        console.log(classitem);
      }
    }
    fetchProfilePic();
  }, [classitem.acc_id]);
 
  return (
   
    <div className="col-lg-3 classpanel-min">
        <div className='classpanel borderradius-md primary' onClick={()=>{setcurrentclass(classitem); navigate('/classes/sampleclass')}}>
            <div className='classpanelheader secondary' 
              style={{
                backgroundImage: `url(${classbanner[classitem.classbanner]})`
              }}> 
              
                      
            </div>
            <div className='classpaneltitle'>
                    <div className='classpanelprofile'>
                    <img src={profilePic} alt="" />
                    </div>
                <div>
                  <h4 className='ellipsis'>{classitem.sub_code +'- ' + classitem.sub_name}</h4>
                  <h5 className='ellipsis'> {classitem.yearlvl + classitem.sec_name}</h5>

                </div>
                <div className='classpanelclosed'>
                <h6>{classitem.classDay}</h6>
           

                </div>
         
                <div className='classpanelopen'>
                   
                    <h5 className='ellipsis'>{classitem.title} {classitem.firstname} {classitem.lastname} {classitem.suffix}</h5>
                    <h5 className='ellipsis'>{classitem.day_label} {classitem.sched_from} - {classitem.sched_to}</h5>

                </div>
               
                
              </div>
             
             

        </div>
     </div>
  )
}

export default Classpanel