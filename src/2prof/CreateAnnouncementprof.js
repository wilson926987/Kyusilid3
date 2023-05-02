import React, { useState , useContext} from 'react'
import Multiselector from '../1general/formcomponents/Multiselector';
import Dropdown from '../1general/formcomponents/Dropdown';
import axios from 'axios';
import { announcementlistContext , myClasesContext , currentclassContext, userInfoContext} from '../Globalcontext';
import {AiFillCaretDown}  from 'react-icons/ai'

function CreateAnnouncementprof() {
    const[announcementcontent, setannouncementcontent] = useState();
    const[announcementtitle, setannouncementtitle] = useState();
    const {announcementlist, setannouncementlist} = useContext(announcementlistContext);
    const {currentclass} = useContext(currentclassContext);
    const {userinfo} = useContext(userInfoContext);
    const {myclasses} = useContext(myClasesContext);
    const [saveannouncementready, setsaveannouncement] = useState(true);
    const [dropdown, setdropdown]= useState(false)


  
    const [posttype, setposttype] = useState('postnow')
    const [selectedclass, setselectedclass] =useState([]) 

    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const [postdate, setpostdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));
   
    const [currentdate  , setcurrentdate] = useState(new Date(Date.now() -tzoffset).toISOString().slice(0, -8));

   
   
    var days = {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6};
  
    

   function getdaysfromnow(day){
     const currentday = new Date().getDay();
     const targetday = days[day]
   
     if(targetday> currentday){
        return targetday - currentday;

     }else{
        return  targetday - currentday + 7;
     }
      
   }

   function gethours(time){
    time = time.replace(':' , " ");
    const temp = time.split(" ")
        if(temp.length===3){
           return temp[0]
        }
        return 0;
   }

   function getminutes(time){
    time = time.replace(':' , " ");
    const temp = time.split(" ")
        if(temp.length===3){



           return temp[1]
        }
        return 0;
   }




    function setfuturedate(day , time){
        const currdate= new Date()
        const targetdate= new Date();
      
        targetdate.setDate(currdate.getDate() + getdaysfromnow(day))
        targetdate.setHours(gethours(time))
        targetdate.setMinutes(getminutes(time))


        return targetdate;
    }


    async function saveAnnouncement(e){
        e.preventDefault();
    
    
        if(saveannouncementready===true){
            setsaveannouncement(false);
            console.log(selectedclass)

            if(selectedclass.length>0){
              for(let x =0 ; x < selectedclass.length; x++){
                if(selectedclass[x].selected){
                    let ggt = {
                        "an_title" : announcementtitle,
                        "an_content" : announcementcontent,
                        "acc_id" : userinfo.user.acc_id,
                        "classes_id" : selectedclass[x].value.classes_id,
                        "schedule" : posttype==='postnow' ? new Date(currentdate).toISOString().slice(0, 19).replace('T', ' ') : 
                        new Date(postdate).toISOString().slice(0, 19).replace('T', ' ')
                    }
                    //    

                   
                    console.log(JSON.stringify(ggt))
                
                    await axios.post('https://api.kyusillid.online/api/add-announcement' , ggt)
                    .then()
                    .catch(error => {
                      console.log(error);
                    });


                }
       
              }

            }else{

              let ggt = {
                "an_title" : announcementtitle,
                "an_content" : announcementcontent,
                "acc_id" : userinfo.user.acc_id,
                "classes_id" : currentclass.classes_id,
                "schedule" : posttype==='postnow' ? new Date(currentdate).toISOString().slice(0, 19).replace('T', ' ') : 
                new Date(postdate).toISOString().slice(0, 19).replace('T', ' ')
               }
               console.log(JSON.stringify(ggt))
            //    

           
         
        
            await axios.post('https://api.kyusillid.online/api/add-announcement' , ggt)
            .then()
            .catch(error => {
              console.log(error);
            });


            }
             
              
              await axios.get('https://api.kyusillid.online/api/get-announcement/' + currentclass.classes_id)
              .then(response => {
                setannouncementlist(response.data)
               
              })
              .catch(error => {
                console.log(error);
              });

     
                e.target.reset();
                setannouncementcontent();
                setannouncementtitle();
                setsaveannouncement(true);
                setactiv(false)
                

        }
    }

    const [activ, setactiv] = useState(false)

    const temp2= ()=>[
        setactiv(!activ)
    ]

  

  

 


  return (
    <div className='col-lg-12  margintop12 '>

       <div className='tertiary postannouncementcontainer borderradius-lg'>
       {!activ ?
            <div className='relative postannouncementbody'>
                <div className='postannouncementclosed' onClick={temp2}>
                    Post an announcement
                </div>           
            </div>  
            :
            <div className='postannouncement'>

                <div className="row">
                  {userinfo.user.usertype ==='prof' ?
                  <div className="col-lg-4">
                  <p className='smallfont'> Select Classes</p>
              <Multiselector
                  options={myclasses}
                  onChangeHandler = {setselectedclass}
                  mainClass= 'dropdownmain primary borderradius-md'
                  itemClass= 'dropdownitem'
                  controlClass='dropdowncontrol'
                  menuClass='dropdownmenu primary'
                  controlActiveClass='dropdowncontrolactive'
                  mainActiveClass='dropdownmain-active'
                  placeholderValue='Select classes'
                  selectedAndDisabled = {currentclass}
              />
       
              </div>
              :


                    <h4 className='padding12'>this class</h4>
                  
                
                }
                  
                    
              

            
                </div>
                <form action="" onSubmit={(e)=>{saveAnnouncement(e)}}>
                <div className='margintop12'>
                <input type='text' className='commontextarea primaryborder' placeholder='Enter title...' required onChange={(e)=>{setannouncementtitle(e.target.value)}} />
                <textarea name="" id="" cols="30" rows="3" required className='commontextarea primaryborder' placeholder='Enter content...' onChange={(e)=>{setannouncementcontent(e.target.value)}}></textarea>
  
            </div>
                    <div className="postannouncementfooter flex">
                             <button onClick={temp2} className='secondary lighttext commonbutton'> Cancel</button>
                             <div className={`datecontainer ${posttype !== 'postnow'&& 'datecontainer-active'}`}>
                           <input type="datetime-local" className='commonbutton secondary lighttext' defaultValue={postdate}  min={currentdate} onChange={(e)=>{setpostdate(e.target.value)}}/>

                           </div>

                           

                            <input type="submit" className='secondary  lighttext commonbuttonleft' value={posttype === "postnow" ? "Create New" : " Scheduled Post"} />
                           <div className='relative'>
                                <div className="commonbuttonright secondary lighttext" onClick={()=>{setdropdown(!dropdown)}}>
                                    <AiFillCaretDown/>
                                    
                                </div>

                               {dropdown && 
                                <div className='commonbuttondrop tertiary borderradius-md' >
                                <ul>
                                    <li className='padding12' onClick={()=>{setdropdown(false) ;setposttype('postnow')}}>Create New</li>
                                    <li className='padding12' onClick={()=>{setdropdown(false); setposttype('scheduled')}}>Scheduled Post</li>
                                </ul>
                            </div>}
                           </div>

                        
                     

                          
                           
                    </div>  
                </form>
                
            </div>  
    }
       </div>       
    </div>
  )
}

export default CreateAnnouncementprof