import React, { useContext,  useState } from 'react'
import kyusilidlogo from '../assets/images/Kyusilid.jpg'
import {MdSpaceDashboard ,MdDashboard, MdBrightness1 ,MdOutlineDashboard} from 'react-icons/md'
import { RiDashboardLine ,RiDashboardFill ,RiProfileLine} from 'react-icons/ri'
import { themeContext , departmentsContext, currentdeptContext, userInfoContext } from '../Globalcontext'

import {BiChevronsLeft ,BiChevronsRight} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {FaUpload} from 'react-icons/fa'
import ImportClass from './ImportClass'
import ImportClass2 from './ImportClass2'
import ImportStudent from './ImportStudent'
import ImportProfessor from './ImportProfessor'



function Adminsidebar() {
    const {theme} = useContext(themeContext);
    const {departments} = useContext(departmentsContext)
    const {setcurrentdept} = useContext(currentdeptContext);
    const [sidebar, setsidebar] = useState(true);
    const {userinfo} = useContext(userInfoContext);
    const [upclass, setupclass] = useState('false');

    const [createclassmodal , setcreateclassmodal] = useState(false) 
    const [createstudmodal, setcreatestudmodal] = useState(false)

    const [updatelist, setupdatelist] = useState();
    const [upstud, setupstud] = useState(false)
    const [createproffmodal , setcreateproffmodal] = useState(false)
    const [upproff, setupproff] = useState(false)



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
    

    </ul>  
   {userinfo.admintype ===3 &&
   <>
    <hr className='margintop12'/>
    <h6 className='smallfont' >Update classlist and accounts</h6>

    <ul className='margintop12'>
    <li className='sidebarmenu' onClick={()=>{setcreateclassmodal(true)}}> <div className="highlight"></div> Update Class list</li>
    <li className='sidebarmenu' onClick={()=>{setcreatestudmodal(true)}}> <div className="highlight"></div> Update Student list</li>
    <li className='sidebarmenu' onClick={()=>{setcreateproffmodal(true)}}> <div className="highlight"></div> Update Prof list</li>
    </ul> </>
   
   
   }



    <hr className='margintop12'/>

    <ul className='margintop12'>
    <li className='sidebarmenu' onClick={()=>{navigate('adminlog'); localStorage.setItem('history', '/kyusilidAdmin/adminlog')}}> <div className="highlight"></div> Admin log</li>
     </ul>            
</div>}
<div className='sidebarfooter'>
<BiChevronsLeft className='sidebarfootertoggle' onClick={togglesidebar}/>

</div>





    </div>
    </div>
</div>



{createclassmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreateclassmodal(false) ; setupclass("false")}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
      {upclass==="false"? 
          <>     
          <div className='sideoption borderradius-md'onClick={()=>{setupclass('safe')}} > <BiEdit/><h2>UPLOAD FILE</h2>
            <div>
         
                <ul>
                <li>Add new Classes</li>
                <li>Add new Source Modules</li>
                <li>Update Existing Classes</li>
                </ul>
            </div>
          </div>
          <div className='sideoption borderradius-md' onClick={()=>{setupclass('reset')}}> <FaUpload/><h2>RESET AND UPLOAD FILE</h2>
          <div>
          
            <ul>
                <li>Reset the Class list</li>
              <li>Add new Classes</li>
              <li>Add new Source Modules</li>
              <li>Update Existing Classes</li>
            </ul>
          </div>
          </div>
          </> 
          :
            upclass==="reset" ?    
          <div><ImportClass setcreateclassmodal= {setcreateclassmodal}/></div>
          :
          <div><ImportClass2 setcreateclassmodal= {setcreateclassmodal}/></div>
          
        }
      </div>
          
</div>
     }


{createstudmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreatestudmodal(false) ; setupstud(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
        {!upstud ? 
          <>
          {/* <div className='sideoption borderradius-md'onClick={()=>{navigate('createstud') ; setcreatestudmodal(false) }} > <BiEdit/><h2>ADD CLASS MANUALLY</h2></div> */}
          <div className='sideoption borderradius-md' onClick={ ()=>{setupstud(true)}}> <FaUpload/><h2>Upload file</h2>
          <div>
          <h3>Uploading a student list file will:</h3>
            <ul>
              <li>Add new Student Accounts</li>
              <li>Update existing students</li>
             
            </ul>
          </div>
        
          </div>
          </>
          :
          <div><ImportStudent setcreatestudmodal={setcreatestudmodal}/></div>
          }
      </div>
          
</div>
     }

{createproffmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreateproffmodal(false) ; setupproff(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
{!upproff ?  
        <> 
        <div className='sideoption borderradius-md' onClick={()=>{setupproff(true) }}> <FaUpload/><h2>Upload file</h2>
        <div>
          <h3>Uploading a professor list file will:</h3>
            <ul>
              <li>Add new Professor Accounts</li>
              <li>Update existing professors</li>
             
            </ul>
          </div>
        </div></>
        :
        <div><ImportProfessor setcreateproffmodal={setcreateproffmodal}/></div>
}
      </div>
          
</div>
     }






        </div>


 
  
  )
}

export default Adminsidebar