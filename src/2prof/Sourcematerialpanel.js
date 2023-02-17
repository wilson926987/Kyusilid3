import React, { useContext, useState } from 'react'
import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { sourceMaterialContext } from '../Globalcontext'


function Sourcematerialpanel({actItem}) {

  const [materialcontent, setmaterialcontent] = useState(false);
  const {setsourcematerial} = useContext(sourceMaterialContext);
  const togglematerialcontent =()=>{
    setmaterialcontent(!materialcontent)
  }

  const navigate = useNavigate()

  const postsource=()=>{
   

    navigate('/classes/sampleclass/createnew');
    setsourcematerial(actItem)
    console.log(actItem);
  }

  return (
    <>
      <div className='width100 relative'>
            <div className="row " onClick={togglematerialcontent}>
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                        {actItem.activity_type==='Material' ?
                          <RiBookFill />:
                          actItem.activity_type==='Questionnaire' ?
                          <MdQuiz/> :
                          actItem.activity_type==='Assignment' ?
                          <MdAssignment/> :
                          <FaClipboardList/>                                 
                      }
                       </div>
                    </div>
          
                    <div className="col-lg-7 ">
                      <div className=' activitypanelsub1'>
                      <h5>{actItem.activity_title}</h5>
                      <p>{actItem.category} {actItem.activity_type} {actItem.activitytype==='material' && `, ${actItem.materialcount} files`}</p>
                    </div>
                    </div>

               
          </div>
            <div className={`materialcontent ${materialcontent && 'materialcontent-active'}`}>

                  <div>
                  {actItem.description}
                      <div className='margintop12'>
                             
              
                          {actItem.activitytype==='Questionnaire' &&
                                  <div className="flex">
                                  <div className='questionnairepanel primary borderradius-md'>
                                    <h4>Quizz 1</h4>
                                    <hr />
                                    <div className='margintop12'>
                                    <h5> 20 items</h5>
                                    <h5> 50 points</h5>
                                    </div>
                                    <div className='questionnairefooter flex'>               
                                    </div>
                                </div>
                                </div>
                          }
                       
                      </div>            
                  </div>
                      
            </div>

            {materialcontent && 
              <div className='postsourcematerial'>
                  <button className='secondary commonbutton borderradius-md' onClick={postsource}>Post</button>
              </div>
            }


      </div>

            
     

       
    </>
  )
}

export default Sourcematerialpanel