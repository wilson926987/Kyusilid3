import axios from 'axios';
import { th, tr } from 'date-fns/locale';
import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../1general/formcomponents/Dropdown';
import { useNavigate } from 'react-router-dom';
import { userInfoContext } from '../Globalcontext';
import Swal from 'sweetalert2';

function SuperAdmin() {

  const [adminlist, setadminlist] = useState([]);
  const [ deplist , setdeplist] = useState();
  const {userinfo} = useContext(userInfoContext)


  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [dep_id, setdep_id] = useState();

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [middle , setmiddle] = useState();
  const [title, settitle] = useState(); 
  const [suffix, setsuffix]= useState()
  const navigate= useNavigate();

  const [password, setpassword] =useState();
  const [password2, setpassword2] = useState();


  useEffect(()=>{

    if(userinfo.admintype ===1){
      navigate('/kyusilidAdmin');
    }
    axios.get('https://api.kyusillid.online/api/manageadmin').then(
      response=>{
        setadminlist(response.data.adminlist);
        setdeplist(response.data.departmentlist);
    

      }
    ).catch();


  },[])

  const handlesubmit= async(e)=>{
    e.preventDefault()

    const temp = {
      'firstname' :firstname,
      'lastname' : lastname,
      'middle' : middle,
      'suffix' : suffix,
      'email' : email,
      'username' : username,
      'dep_id' : dep_id,
      'password' :password
    }


    console.log("dep_id : " + dep_id)

    if(dep_id === undefined){
      Swal.fire({
        icon: 'error',
        text: 'Department must be set',  
      })
      return
    }

  

    if(password !== password2 ){
      Swal.fire({
        icon: 'error',
      
        text: 'Passwords must match',
     
      })
      return
    }

         // Check if email ends with "qcu.edu.ph"
  const emailPattern = /^.+@qcu\.edu\.ph$/i; // regular expression pattern
  if (!emailPattern.test(email)) {
    Swal.fire({
      icon: "error",
      text: "Invalid email format. Email must end with qcu.edu.ph",
    });
    return;
  }

    await axios.put('https://api.kyusillid.online/api/createAdmin' , temp).then((response)=>{
   
      Swal.fire(response.data)
      axios.get('https://api.kyusillid.online/api/manageadmin').then(
          response2=>{
            setadminlist(response2.data.adminlist);
            e.target.reset(); 
          }
        ).catch();
       

    }).catch(error=> console.log(error.data))
    e.target.reset();  
  
  }

  const changedept = async (id, dep_id)=>{
      const temp = {
        'acc_id' : id,
        'dep_id' : dep_id
      }

     
     
      await axios.post('https://api.kyusillid.online/api/updatedept' , temp).then(()=>{
        axios.get('https://api.kyusillid.online/api/manageadmin').then(
          response=>{
            setadminlist(response.data.adminlist);
            console.log(response.data)
          }
        ).catch();
      }

      ).catch(error=> console.log(error.data))


  }

  const updateactive = async (id, type, active) =>{
    const temp ={
      'acc_id' : id,
      'active' : active
    }

    if(type == 0 ){


      Swal.fire({
        icon: 'error',
      
        text: "Changing Active status is disabled for Admin Heads",
     
      })
      return;
    }



    await axios.post('https://api.kyusillid.online/api/setadminactive' , temp).then(()=>{
      axios.get('https://api.kyusillid.online/api/manageadmin').then(
        response=>{
          setadminlist(response.data.adminlist);

        }
      ).catch();
    }

    ).catch(error=> console.log(error.data))
  }



  
  return (
    <div>
      <h3>Kyusilid Admin List</h3>


      <div className="row">
        <div className="col-lg-12">
          <div className="tertiary padding12 borderradius-lg">
          <h4>Account list</h4>
              <table className="width100">

                <thead className='primary padding12 borderradius-md'>
                  <tr>
                    <td><h4>Name</h4></td>
                    <td><h4>Department</h4></td>
                    <td><h4>Active/Not Active</h4></td>
                  </tr>
                </thead>

                <tbody>

                  {adminlist !==undefined && adminlist.map((item)=>(
                    <tr key={adminlist.acc_id}> 
                      <td className='padding12'> {item.title} {item.firstname} {item.middle} {item.lastname}</td>
                      <td className='padding12'>
                          <select name="wat" id="" className='commontextbox col-lg-4 primary' onChange={(e)=> {changedept(item.acc_id, e.target.value)}}>
                            {deplist.map((item2, key)=>(
                              <option key={key} value={item2.value} selected={item2.value == item.dep_id}> {item2.label}</option>
                            ))}
                          </select>
                </td>
                      <td className='padding12'>

                        {item.active === 1 ?
                        <button className='commonbutton secondary lighttext' onClick={e=>{updateactive(item.acc_id ,item.ad_type, 0)}}> Active {item.admintype}</button>:
                        <button className='commonbutton background lighttext' onClick={e=>{updateactive(item.acc_id ,item.ad_type, 1)}}> Deactivated</button>
                        
                        
                      }
                        
                        
                        
                       </td>
                    </tr>
                  ))}
           
            
                </tbody>
            
            </table>
          </div>
        </div>

        <div className="col-lg-8 margintop12">
          <div className="tertiary padding12 borderradius-lg">
            <h4>Create New Admin Account</h4>

            <form action="" onSubmit={handlesubmit} className='margintop12'>

              <div className="row">
               
                <div className='margintop12 flex col-lg-12'> 




                <div className="margintop12 col-lg-5">
                <label htmlFor="email"><h5>Email</h5></label>
                 <input type="text" id='email' className='commontextbox primaryborder width100'  required defaultValue={email} onChange={e=>setemail(e.target.value)} placeholder='Enter Email'/>
           
                </div>
                 <div className='margintop12 col-lg-6'> 
                 <label htmlFor="department"><h5>Department</h5></label>
                 <Dropdown
                                options={deplist}
                                onChangeHandler= {setdep_id}
                                mainClass= 'dropdownmain primary borderradius-md'
                                itemClass= 'dropdownitem'
                                placeholderValue= 'Select Department'
                                controlClass='dropdowncontrol'
                                menuClass='dropdownmenu primary'
                                controlActiveClass='dropdowncontrolactive'
                                mainActiveClass='dropdownmain-active'
                                
                            />   

              </div>
           
           
           
              </div>
               <div className='margintop12 col-lg-12'> 
                 <label htmlFor="email"><h5>Password</h5></label>
                 <input type="password" id='email' className='commontextbox tertiary primaryborder width100 passwordscale'  required defaultValue={password} onChange={e=>setpassword(e.target.value)} placeholder='Enter Password'/>
              </div> <div className='margintop12 col-lg-12'> 
                 <label htmlFor="email"><h5>Confirm Password</h5></label>
                 <input type="password" id='email' className='commontextbox tertiary primaryborder width100 passwordscale'  required defaultValue={password2} onChange={e=>setpassword2(e.target.value)} placeholder='Confirm Password'/>
              </div> 



              <div className='margintop12 col-lg-1 '> 
                 <label htmlFor="title"><h5>Title</h5></label>
                 <input type="text" id='title' className='commontextbox primaryborder  width100' defaultValue={title} onChange={e=>settitle(e.target.value)}  placeholder='Title'/>
              </div>

              <div className='margintop12 col-lg-4 '> 
                 <label htmlFor="firstname"><h5>Firstname</h5></label>
                 <input type="text" id='firstname' className='commontextbox primaryborder  width100' required defaultValue={firstname} onChange={e=>setfirstname(e.target.value)}  placeholder='Enter Firstname'/>
              </div>
              <div className='margintop12 col-lg-4 '> 
                 <label htmlFor="lastname"><h5>Lastname</h5></label>
                 <input type="text" id='lastname' className='commontextbox primaryborder  width100' required defaultValue={lastname} onChange={e=>setlastname(e.target.value)}  placeholder='Enter Lastname'/>
              </div>

              <div className='margintop12 col-lg-1 '> 
                 <label htmlFor="middle"><h5>M.I.</h5></label>
                 <input type="text" id='middle' className='commontextbox primaryborder  width100' required defaultValue={middle} onChange={e=>setmiddle(e.target.value)}  placeholder='M.I'/>
              </div>

              <div className='margintop12 col-lg-2 '> 
                 <label htmlFor="suffix"><h5>Suffix</h5></label>
                 <input type="text" id='suffix' className='commontextbox primaryborder  width100' defaultValue={suffix} onChange={e=>setsuffix(e.target.value)}  placeholder='Suffix'/>
              </div>

          





              </div>

           

             










            
              <div className='margintop12'> 
              <button className="commonbutton secondary lighttext">Confirm</button>
                
             </div>


          </form>
          </div>
        </div>

      </div>


    </div>
  )
}

export default SuperAdmin