import React, { useContext, useEffect, useState } from 'react'
import {FaBell ,FaSearch} from 'react-icons/fa'
import {BsFillGearFill} from 'react-icons/bs'
import Profilepic from '../../assets/images/avatar.jpg'
import RGB from '../../assets/images/rgb.png'
import { themeContext } from '../../Globalcontext'
import { useLocation } from 'react-router-dom'
import {GrMail} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { userInfoContext } from '../../Globalcontext'
import {RiSunFill ,RiMoonFill} from 'react-icons/ri'
import axios from 'axios'




function Profilenotif() {
    const {theme, settheme} = useContext(themeContext);
    const [searchbar, setsearchbar] = useState(false);
    const [searchfilled,setfilled] = useState(false);
    const [search, setsearch]= useState('');
    const [currentpage, setcurrentpage] = useState();
    const location = useLocation();
    const {userinfo, setuserinfo}= useContext(userInfoContext);
    const [imageUrl, setImageUrl] = useState(null);

    const [title, settitle] = useState(); 

    const [profilePic, setProfilePic] = useState('');
 

    const [profilepanel, setprofilepanel] = useState(false);


    const navigate = useNavigate()

   

    const toggleprofilepanel= ()=>{
        setprofilepanel(!profilepanel)
    }

    
    const gotoprofile= ()=>{
        toggleprofilepanel();
        navigate('/profile');
        localStorage.setItem('history', '/profile')
    }

    const logout =()=>{
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('history')
        setprofilepanel(false) 
        setuserinfo();
    }

    useEffect(()=>{
        setprofilepanel(false)
     
        if(userinfo!== undefined){
            console.log(userinfo)


            if(userinfo.temp !== undefined){
                settitle(userinfo.temp)
            }else if(userinfo.adminttype === 99){
                settitle("MIS")
            }else if(userinfo.adminttype === 98){
                settitle("Registrar")
            }else{
                
            }
        }
     
    },[userinfo])

 

    useEffect(()=>{
        search.length>0 ? setfilled(true) : setfilled(false)
    },[search])
  
    const switchtheme =()=>{

        if(theme ==='dark'){
            settheme('default');
        }else{
            settheme('dark')
        }
    
    }

    useEffect(() => {
        async function fetchProfilePic() {
          try {
            const response = await axios.get(`https://api.kyusillid.online/api/getprofilepic/${userinfo.user.acc_id}`);
            setProfilePic(response.data.profile_pic);
          
          } catch (error) {
            console.error(error);
          }
        }
        fetchProfilePic();
      }, [userinfo.user.acc_id]);

   

  return (
    <div className='profilenotif'>
     
        
        
        <div className='notificationicon marginleftauto' >
            {theme==='default' ?
            <RiSunFill onClick={switchtheme}/> : <RiMoonFill onClick={switchtheme}/>    
        }
         

            
        
        </div>

    


        <div className='profilenotifcontent'>
             <h5>{userinfo.user.acc_username}</h5>
             <h6>{title}</h6>
  
        </div>
        
        <div className='profileicon' >
             
            <img src={profilePic} alt="" onClick={toggleprofilepanel}/>
            {profilepanel &&
                <div >
                <div className="modalbackground" onClick={toggleprofilepanel}>
                    
                </div>
                <div className='profilemodal background borderradius-md'>
                        <img src={profilePic} alt=""/>

                        {userinfo.user.usertype !== 'admin' && 
                        <button className='secondary commonbutton' onClick={ gotoprofile}>Go to Account</button>}
                    
                    <button className='secondary commonbutton' onClick={logout}>Logout</button>

                </div>

                </div>}

        </div>

     

    </div>
  )
}

export default Profilenotif