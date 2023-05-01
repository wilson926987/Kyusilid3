import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import Textbox from '../1general/formcomponents/Textbox';
import { currentdeptContext, subjectlistContext, userInfoContext} from '../Globalcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CreateClass() {
  const {currentdept} = useContext(currentdeptContext)  
  const {subjectlist} = useContext(subjectlistContext)
  const [subjectoptions, setsubjectoptions] = useState([]);
  const {userinfo} = useContext(userInfoContext)
  const navigate = useNavigate();


    useEffect(()=>{
    if(subjectlist !== undefined){
      setsubjectoptions(subjectlist.map(item=>({
        'value' : item.sub_id,
        'label' : item.sub_code
      })))
    }
    },[subjectlist])

 
 
    const dayoption = [
        {'value' : 1 , 'label': 'Monday'},
        {'value' : 2, 'label': 'Tuesday'},
        {'value' : 3 , 'label': 'Wednesday'},
        {'value' : 4 , 'label': 'Thursday'},
        {'value' : 5 , 'label': 'Friday'},
        {'value' : 6 , 'label': 'Saturday'}

    ]

    const section =[
      {'value' : 1 , 'label' : "A"},
      {'value' : 2 , 'label' : "B"},
      {'value' : 3 , 'label' : "C"},
      {'value' : 4 , 'label' : "D"},
      {'value' : 5 , 'label' : "E"},
      {'value' : 6 , 'label' : "F"},
      {'value' : 7 , 'label' : "G"},
      {'value' : 8 , 'label' : "H"},
      {'value' : 9 , 'label' : "I"},
      {'value' : 10 , 'label' : "J"},
      {'value' : 11 , 'label' : "K"}

    ]

    const [classcomment, setclasscomment] = useState();
    const [schedfrom1, setschedfrom1] = useState();
    const [schedfrom2, setschedfrom2] = useState();

    const [schedto1, setschedto1] = useState();
    const [schedto2, setschedto2] = useState();
    
    const [sessionname1, setsessionname1] = useState("Lecture");
    const [sessionname2, setsessionname2] = useState();

    const [day, setday] = useState(1);
    const [selectedsection, setsection]  = useState();
    const [selectedsub,setselectedsub] = useState();


    const handleSubmit = async(e)=>{
        e.preventDefault();

        const temp = {
            "dep_id": currentdept.dep_id,
            'sec_id' :selectedsection,
            'sub_id' :selectedsub,
            'day_id' :day,
            'sched_from' :schedfrom1 ,
            'sched_to' : schedto1,
            'sessionname1' :sessionname1 ,
            'sessionname2' : sessionname2 ,
            'sched_from2' :schedfrom2,
            'sched_to2' : schedto2 ,
            'moduleSource' :5,

        }

        const temp2 = {
          "acc_id" : userinfo.user.acc_id,
          "action" : "manual add class"
        }


  
    await axios.put('https://api.kyusillid.online/api/createclass' , temp).then(
      response=> {console.log(response.data) ;
        Swal.fire({
          icon: 'success',
        
          text: 'Successfully saved',
       
        })
                 axios.put('https://api.kyusillid.online/api/adminlog', temp2).catch(error => console.log(error.data))


                })
      .catch(
        
      );

      navigate("/kyusilidAdmin/department")

    

    }
    


  return (
    <div className='Createeee tertiary padding12 borderradius-md'>
        
        <h3>Create Classroom</h3>


        <form onSubmit={handleSubmit}>
        <div className="row">

<div className="CD col-lg-7 margintop12">
        Subject
        <Dropdown
                                options={subjectoptions}
                                onChangeHandler= {setselectedsub}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                             
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
 
</div>
<div className="CD col-lg-6">
<Textbox 
    value={sessionname1}
    handleChange={setsessionname1}
    placeholdervalue={'session name 1'}
  />
</div>
<div className="Schedd">
   schedfrom  1 <input type="time" className='timescale'  required  onChange={(e)=>{setschedfrom1(e.target.value)}}/>
</div>
<div className="Schedd1">
   sched to 1 <input type="time" className='timescale'  required  onChange={(e)=>{setschedto1(e.target.value)}}/>
</div>
<div className="CD col-lg-6">
<Textbox 
    value={sessionname2}
    handleChange={setsessionname2}
    placeholdervalue={'session name 2'}
  />
</div>
<div className="Schedd ">
   schedfrom 2 <input type="time" className='timescale'    onChange={(e)=>{setschedfrom2(e.target.value)}}/>
</div>
<div className="Schedd1 ">
   sched to 2 <input type="time" className='timescale'   onChange={(e)=>{setschedto2(e.target.value)}}/>
</div>

<div className="col-lg-2">
    Section 
   <Dropdown
                                options={section}
                                onChangeHandler= {setsection}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                             
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>


<div className="CD col-lg-3">
   Day
   <Dropdown
                                options={dayoption}
                                onChangeHandler= {setday}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                               
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>





</div>

 <button type='submit' className='commonbuttons lighttext secondary'> Submit</button>
        </form>

       





    
    </div>
  )
}

export default CreateClass