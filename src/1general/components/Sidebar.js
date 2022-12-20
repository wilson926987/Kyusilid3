import React, { useContext, useEffect, useState } from 'react'
import kyusilidlogo from '../../assets/images/Kyusilid.jpg'
import {MdSpaceDashboard} from 'react-icons/md'
import {FaBookReader, FaDove} from 'react-icons/fa'
import {RiSettingsFill} from 'react-icons/ri'
import { themeContext } from '../../Globalcontext'
import {BiChevronsLeft ,BiChevronsRight} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
    const {theme ,settheme} = useContext(themeContext);

    const [sidebar, setsidebar] = useState(true);

    const shorten = (text)=>{
        return text.length>20 ? text.slice(0,18)+ "..." : text
    }

    const togglesidebar=()=>{
        setsidebar(!sidebar)
    }


   const navigate = useNavigate();

  return (

    <div >
          <div className='relative'>

<div className={theme} >
    {!sidebar &&

        <div className="togglebuttonbody">
               <div className='sidebarclosed primary' onClick={togglesidebar}>
            <div className='dimmer'>
                    <BiChevronsRight/>

            </div>

        </div>

        </div>
     
    }
    <div className= {`sidebarbody borderradius-lg  primary ${theme==='default' ? 'darktext lightinset' :'lighttext'}   ${!sidebar ? ' sidebarnotactive' : 'sidebaractive'}` }>
<div className='sidebardesign'></div>
<img src={kyusilidlogo} alt=""  className='rounded'/>
{sidebar && <h4>Kyusilid</h4>}
{sidebar && <h6>Online Classroom Application</h6>   }
{sidebar && <div className='sidebarcontent'>
    <ul>
        <li className='sidebarmenu' onClick={()=>{navigate('/')}}> <div className="highlight"></div> <MdSpaceDashboard />  Dashboard</li>
        <li className="sidebarmenu" onClick={()=>{navigate('/classes')}}> <div className="highlight"></div> <FaBookReader />  Classes ##classlist#</li>  
   
        <li className="sidebarsubmenu " onClick={()=>{navigate('/classes/sampleclass')}}><div className="highlight"></div> {shorten('##subject name')} </li>
        <li className="sidebarsubmenu"><div className="highlight"></div> {shorten('##subject name')}</li>

        <li className="sidebarmenu" onClick={()=>{navigate('/archived')}}> <div className="highlight"></div>  <FaBookReader /> Archived</li>
    </ul>              
</div>}
<div className='sidebarfooter'>
<BiChevronsLeft className='sidebarfootertoggle' onClick={togglesidebar}/>

</div>




    </div>
    </div>
</div>
        </div>


 
  
  )
}

export default Sidebar