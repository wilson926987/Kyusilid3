import React from 'react'
import { Outlet , Link } from 'react-router-dom'

function ClassContainer() {
  return (
    <div>

      <h4>Class Container</h4>
     
      <br />
      <br />
      <br />
      (for classbanner)
      <ul>
        <li>## Classname#</li>
        <li>##ProfName#</li>
        <li>## Schedule#</li>
      </ul>

      
      
       

      <br />
      <br />
      <br />

        (navigation)
        <ul>
          <li> <Link to={'/classes/sampleclass'}> Class Stream</Link></li>
          <li> <Link to={'info'}> Class info </Link></li>
          <li> <Link to={'activities'}> Activities</Link></li>
          <li><Link to={'marks'}> Marks</Link></li>
          <li><Link to={'modules'}> Class Modules</Link></li>
        </ul>
        <br /><br /><br /><br /><br /><br />

        (content)
        <Outlet></Outlet>
    </div>

  )
}

export default ClassContainer