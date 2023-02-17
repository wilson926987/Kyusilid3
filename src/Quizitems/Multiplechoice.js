import React, { useState } from 'react'

function Multiplechoice( {questioninfo}) {
    const [option, setoptions] = useState([
        {
            "optionindex" : 1,
            "optionname":"option 1"
        },
        {
            "optionindex" : 2,
            "optionname":"option 2"
        },
        {
            "optionindex" : 3,
            "optionname":"option 3"
        }
    

    ])

    const [correctanswer, setcorrectanswer] = useState();
    

    const changeoption = (e  , i)=>{
        const temp = [...option]
        temp[i] = e.target.value
        setoptions(temp);
    }
  return (

    <div>

        

        multiple choiceasdfasfsa

<div className='flex'>
<div>
{option.map((item)=>(
    <div key={item.optionindex}>
        <input type={'text'} defaultValue={item.optionname} onChange={e => changeoption(e, item.optionindex)}/>
 

    </div>
 ))}
</div>
<div>
    <select onChange={e=> setcorrectanswer(e.target.value)}>
            {option.map((item, key)=>(
                <option key={key} value={item.optionname}> {item.optionname} </option>
            ))}
    </select>
</div>
</div>


       

    </div>
  )
}

export default Multiplechoice