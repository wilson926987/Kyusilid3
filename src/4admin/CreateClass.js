import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import Textbox from '../1general/formcomponents/Textbox'

function CreateClass() {

    const[subjectlist, setsubjectlist] = useState([
        {'value' : '', 'label': ''}
    ])
 
    const yearoption = [
        {'value' : 1 ,'label' : 1},
        {'value' : 2 ,'label' : 2},
        {'value' : 3 ,'label' : 3},
        {'value' : 4 ,'label' : 4}

    ]

    const dayoption = [
        {'value' : 1 , 'label': 'Monday'},
        {'value' : 2, 'label': 'Tuesday'},
        {'value' : 3 , 'label': 'Wednesday'},
        {'value' : 4 , 'label': 'Thursday'},
        {'value' : 5 , 'label': 'Friday'},
        {'value' : 6 , 'label': 'Saturday'}

    ]

    const [classcomment, setclasscomment] = useState();
    const [schedfrom1, setschedfrom1] = useState();
    const [schedfrom2, setschedfrom2] = useState();

    const [schedto1, setschedto1] = useState();
    const [schedto2, setschedto2] = useState();
    
    const [sessionname1, setsessionname1] = useState();
    const [sessionname2, setsessionname2] = useState();
    const [sectionlist, setsectionlist] = useState();
    const [sec_id, setsec_id] = useState();
    const [yearlvl, setyearlvl] = useState(yearoption[0].value);
    const [day, setday] = useState(dayoption[0].value);
    const [sub_id , setsub_id] = useState(null);


    const handleSubmit = async(e)=>{
        e.preventDefault();

        const temp = {
            'dep_id': 1,
            'sec_id' :1,
            'sub_id' :1,
            'day_id' :day,
            'sched_from' :schedfrom1 ,
            'sched_to' : schedto1,
            'sessionname1' :sessionname1 ,
            'sessionname2' : sessionname2 ,
            'sched_from2' :schedfrom2,
            'sched_to2' : schedto2 ,
            'moduleSource' :5,
            'yearlvl' : yearlvl,
            'sub_id' : sub_id,
            'sec_id' : sec_id,
            'comment' : classcomment

        }
        console.log(JSON.stringify(temp));
        await axios.put('https://api.kyusillid.online/api/createclass' , temp).catch();

    }

        useEffect(()=>{
            axios.get('https://api.kyusillid.online/api/getcreateclassvalue/1')
            .then(response=>
                {setsubjectlist(response.data.subjectlist.map(function (obj) {
                    return {'value': obj.sub_id, 'label': obj.sub_code + "-" + obj.sub_name}
                   }) );
                   setsectionlist(response.data.sectionlist.map(function (obj){
                    return {'value' : obj.sec_id, 'label' : obj.sec_name}
                })) 

                }                  
            )
            .catch();
            console.log(sectionlist)
        
        },[])
    


  return (
    <div className='tertiary padding12 borderradius-md'>
        
        <h3>Create Classroom</h3>


        <form onSubmit={handleSubmit}>
        <div className="row">

<div className="col-lg-7">
  <Textbox 
    value={classcomment}
    handleChange={setclasscomment}
    placeholdervalue={'Class description'}
  />
</div>
<div className="col-lg-6">
<Textbox 
    value={sessionname1}
    handleChange={setsessionname1}
    placeholdervalue={'session name 1'}
  />
</div>
<div className="col-lg-3">
   schedfrom  1 <input type="time"  required  onChange={(e)=>{setschedfrom1(e.target.value)}}/>
</div>
<div className="col-lg-3">
   sched to 1 <input type="time"  required  onChange={(e)=>{setschedto1(e.target.value)}}/>
</div>
<div className="col-lg-6">
<Textbox 
    value={sessionname2}
    handleChange={setsessionname2}
    placeholdervalue={'session name 2 (optional)'}
  />
</div>
<div className="col-lg-3">
   schedfromule 2 <input type="time"  required onChange={(e)=>{setschedfrom2(e.target.value)}}/>
</div>
<div className="col-lg-3">
   sched to 2 <input type="time" required  onChange={(e)=>{setschedto2(e.target.value)}}/>
</div>
<div className="col-lg-6">
   year level  
   <Dropdown
                                options={yearoption}
                                onChangeHandler= {setyearlvl}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                             
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>
<div className="col-lg-6">
   day
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

<div className="col-lg-6">
    subject
<Dropdown
                                options={subjectlist}
                                onChangeHandler= {setsub_id}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                               
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>
<div className="col-lg-6">
    section
<Dropdown
                                options={sectionlist}
                                onChangeHandler= {setsec_id}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'                           
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>







</div>

 <button type='submit' className='commonbutton lighttext secondary'> Submit</button>
        </form>

       





    
    </div>
  )
}

export default CreateClass