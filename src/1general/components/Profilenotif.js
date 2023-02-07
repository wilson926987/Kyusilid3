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




function Profilenotif() {
    const {theme, settheme} = useContext(themeContext);
    const [themecontainer, setthemecontainer] = useState(false);
    const [searchbar, setsearchbar] = useState(false);
    const [searchfilled,setfilled] = useState(false);
    const [search, setsearch]= useState('');
    const [currentpage, setcurrentpage] = useState();
    const location = useLocation();
    const {userinfo, setuserinfo}= useContext(userInfoContext);
    const [theme1 , settheme1] = useState('themeactive');
    const [theme2, settheme2] = useState();

    const [profilepanel, setprofilepanel] = useState(false);


    const navigate = useNavigate()

    const togglecontainer = ()=>{
        setthemecontainer(!themecontainer)
        console.log('hello');
    }

    const toggleprofilepanel= ()=>{
        setprofilepanel(!profilepanel)
    }

    
    const gotoprofile= ()=>{
        toggleprofilepanel();
        navigate('/profile');
    }

    const logout =()=>{
        setprofilepanel(false) 
        setuserinfo();
    }

    useEffect(()=>{
        setprofilepanel(false)
    },[userinfo])

 

    useEffect(()=>{
        search.length>0 ? setfilled(true) : setfilled(false)
    },[search])
  
    const switchtheme =(e)=>{
       if(e==='default'){
        settheme1('themeactive');
        settheme2('')
        settheme('default')
       }else{
        settheme1('')
        settheme2('themeactive');
        settheme('dark');
       }
    }



    useEffect(()=>{   
        setcurrentpage(
            temp(location.pathname)
        );
    },[location])

    function temp(r){
        switch(r){
            case '/' : return "Dashboard";
            case '/classes' : return 'Classes';
            case '/archived' : return 'Archived' ;
            default: return 'Classname' ; 
        }
    }

  return (
    <div className='profilenotif'>
     
        
        
        <div className='notificationicon marginleftauto' >  <BsFillGearFill onClick={togglecontainer}/>
            {themecontainer && 
                    <div>
                   
                    <div className="modalbackground" onClick={togglecontainer}></div>
                    <div className='themegroupbody background'>
                        <div className={`themeitem ${theme1}`} onClick={()=>{switchtheme('default')}} > <img src={RGB} alt="" /> </div>
                        <div className={`themeitem ${theme2}`} onClick={()=>{switchtheme('dark')}}> <div className='darkicon'></div></div>
                    </div>
                    </div>
            }
        
        </div>
        <div className="notificationicon"> <GrMail  onClick={()=>{navigate('messages')}}/></div>
        <div className='profilenotifcontent'>
             <h5>{userinfo.user.acc_username}</h5>
             <h6>{userinfo.temp}</h6>
        </div>
        
        <div className='profileicon' >
             
            <img src={Profilepic} alt="" onClick={toggleprofilepanel}/>
            {profilepanel &&
                <div >
                <div className="modalbackground" onClick={toggleprofilepanel}>
                    
                </div>
                <div className='profilemodal background borderradius-md'>
                        <img src={Profilepic} alt=""/>
                    <button className='secondary commonbutton' onClick={ gotoprofile}>Go to Account</button>
                    <button className='secondary commonbutton' onClick={logout}>Logout</button>

                </div>

                </div>}

        </div>

     

    </div>
  )
}

export default Profilenotif