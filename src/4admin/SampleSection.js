import React from 'react'
import Classpanel from '../1general/components/Classpanel'

function SampleSection() {

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
        <div className="flex primary borderradius-lg padding12"> <h4>SBIT - 4J</h4></div>
        <div className="margintop12">
            <div className="row">
                <Classpanel classitem={tempclass} />      <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
                <Classpanel classitem={tempclass} />   
            </div>
        </div>
    </div>
  )
}

export default SampleSection