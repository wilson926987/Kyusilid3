import React from 'react'
import Classpanel from '../components/Classpanel'

function Archived() {
  const tempclass = {
    'classId' : 3,
    'classname' : 'Automata',
    'classSched_from' : '6:00',
    'classSched_to' : '8:00',
    'classDay' : 'Monday',
    'classbanner' : 1,
    'subjectcode' : 'Auto1111',
    'profname' : 'Juan delacruz'
  }

  return (
    <div>

    <div className='classcontainer'>
        <div className="row">
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            <Classpanel classitem = {tempclass}/>  
            
        </div>
      </div>

    </div>
  )
}

export default Archived