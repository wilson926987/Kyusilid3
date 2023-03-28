import React, { useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import Textbox from '../1general/formcomponents/Textbox';

function CreateClass() {
 
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
    const [yearlvl, setyearlvl] = useState(yearoption[0].value);
    const [day, setday] = useState(dayoption[0].value);


    const handleSubmit = (e)=>{
        e.preventDefault();

        const temp = {
            "dep_id": 1,
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
            'yearlvl' : yearlvl


   
        }
        console.log(JSON.stringify(temp));
    }
    


  return (
    <div className='Createeee tertiary padding12 borderradius-md'>
        
        <h3>Create Classroom</h3>


        <form onSubmit={handleSubmit}>
        <div className="row">

<div className="CD col-lg-7">
  <Textbox 
    value={classcomment}
    handleChange={setclasscomment}
    placeholdervalue={'Class description'}
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
   schedfrom  1 <input type="time"  required  onChange={(e)=>{setschedfrom1(e.target.value)}}/>
</div>
<div className="Schedd1">
   sched to 1 <input type="time"  required  onChange={(e)=>{setschedto1(e.target.value)}}/>
</div>
<div className="CD col-lg-6">
<Textbox 
    value={sessionname2}
    handleChange={setsessionname2}
    placeholdervalue={'session name 2'}
  />
</div>
<div className="Schedd ">
   schedfrom 2 <input type="time"  required onChange={(e)=>{setschedfrom2(e.target.value)}}/>
</div>
<div className="Schedd1 ">
   sched to 2 <input type="time" required  onChange={(e)=>{setschedto2(e.target.value)}}/>
</div>
<div className="col-lg-6">
   year level  
   <Dropdown
                                options={yearoption}
                                onChangeHandler= {setyearlvl}
                                mainClass= 'dropdownmain primary    '
                                itemClass= 'dropdownitem'
                             
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                              
                            />  
</div>
<div className="CD col-lg-6">
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





</div>

 <button type='submit' className='commonbuttons lighttext secondary'> Submit</button>
        </form>

       





    
    </div>
  )
}

export default CreateClass