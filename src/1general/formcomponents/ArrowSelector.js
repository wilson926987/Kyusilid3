import React, { useEffect, useState } from 'react'
import {GoTriangleUp , GoTriangleDown} from 'react-icons/go'
import './formcomponents.css'

function ArrowSelector( {options, startingvalue, value}) {
    const [tempoptions, setoptions] = useState(options)

    const [marker, setmarker] = useState(startingvalue)

    const arrowup= ()=>{
        setmarker(Math.min(options.length-1 ,(marker+1)))
        
    }

    const arrowdown =()=>{
        setmarker(Math.max(0, marker-1))
    }


  return (
    <div className='arrowselector'>
        <div> 

            <GoTriangleUp  onClick={arrowup}/>
            <GoTriangleDown onClick={arrowdown} />  



        </div>
        <div>
           {tempoptions[marker].text}
        </div>

    </div>
  )
}

export default ArrowSelector