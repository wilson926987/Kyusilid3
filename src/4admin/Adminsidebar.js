import React, { useContext,  useState } from 'react'
import kyusilidlogo from '../assets/images/Kyusilid.jpg'
import {MdSpaceDashboard ,MdDashboard, MdBrightness1 ,MdOutlineDashboard} from 'react-icons/md'
import { RiDashboardLine ,RiDashboardFill ,RiProfileLine} from 'react-icons/ri'
import { themeContext , departmentsContext, currentdeptContext, userInfoContext } from '../Globalcontext'

import {BiChevronsLeft ,BiChevronsRight} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function Adminsidebar() {
    const {theme} = useContext(themeContext);
    const {departments} = useContext(departmentsContext)
    const {setcurrentdept} = useContext(currentdeptContext);
    const [sidebar, setsidebar] = useState(true);
    const {userinfo} = useContext(userInfoContext);




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
{sidebar && <h6 className='smallfont'>Online Classroom Application</h6>   }
{sidebar && <div className='sidebarcontent'>
    <ul>

        {(userinfo.admintype === 1 || userinfo.admintype === 3) ? 
            departments.map((item)=>(
             <li key={item.dep_id} className='sidebarmenu ellipsis ' onClick={()=>{ setcurrentdept(item); navigate('department'); localStorage.setItem('history', '/kyusilidAdmin')}}> <div className="highlight"></div> {item.dep_name} </li>
        )):
        <li className='sidebarmenu'> <div className="highlight" onClick={()=>{navigate('adminhead'); localStorage.setItem('history', '/kyusilidAdmin/adminhead')}}></div> Admin Accounts </li>
       
    
    }
     <li className='sidebarmenu margintop12' onClick={()=>{navigate('adminlog'); localStorage.setItem('history', '/kyusilidAdmin/adminlog')}}> <div className="highlight"></div> Admin log</li>
     

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

export default Adminsidebar