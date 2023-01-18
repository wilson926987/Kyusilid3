import React from 'react'
import { Outlet , useNavigate , Link} from 'react-router-dom'

function Department() {
    const navigate = useNavigate()
  
    return (
    <div>
       <ul>
            <li><Link>Department</Link></li>
            <li><Link>Subjects</Link></li>         
            <li><Link>Sections</Link></li>
            <li><Link>Professors</Link></li>
            <li><Link>Students</Link></li>
            <li><Link>Event Calendar</Link></li>

        </ul>
        <div className='margintop12'>
        <Outlet/>
        </div>
    </div>

  )
}

export default Department