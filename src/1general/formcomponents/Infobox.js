import React from 'react'
import {BsQuestionSquareFill} from 'react-icons/bs'

function Infobox( {infocontent}) {
  return (
    <div className='infobox'>
    <BsQuestionSquareFill />

    <div className='infobox-content borderradius-md smallfont'>
       {infocontent}
    </div>

    </div>
  )
}

export default Infobox