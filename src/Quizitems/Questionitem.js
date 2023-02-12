import React, { useState } from 'react'
import Multipleselect from './Multipleselect'
import Multiplechoice from './Multiplechoice'
import Identification from './Identification'


function Questionitem( {questioninfo}) {
    const[ option, setoptions] = useState('multiplechoice')




                                           

  return (
  

    <div className='primary borderradius-lg padding12'>

        <select onChange={(e)=>{setoptions(e.target.value)}}> 
            <option value={'multiplechoice'}> multiplechoice</option>
            <option value={'multipleselect'}> multi select</option>
            <option value={'identification'}> Identification</option>
        </select>

       
        {option === "multiplechoice" ? <Multiplechoice questioninfo={questioninfo}/> :
         option === 'identification' ? <Identification questioninfo={questioninfo}/> :
         option === "multipleselect" ?<Multipleselect questioninfo={questioninfo}/>: <></>
         }



    </div>


  )
}

export default Questionitem