import React, { useContext, useEffect } from 'react'
import { updatelistContext } from '../Globalcontext'

function Updatelistproff() {
    const {updatelist} = useContext(updatelistContext)

  return (
    <div className='tertiary borderradius-lg padding12'>
    <h4>Professor list Update</h4>
    

    {updatelist!= undefined &&
     <div className='margintop12'>
        <h5 className='margintop12'>Added Professor Accounts</h5>
           <table >
            <thead className='primary'>
            <tr>
                <th className='padding12'>Faculty ID</th>
                <th className='padding12'>Name</th>
            
               </tr>
            </thead>
            <tbody>
                {updatelist.addedproff.map((item, key)=>(
                    <tr key={key}>
                        <td>{item.faculty_id}</td>
                        <td>{item.proffname}</td>
                     
                    </tr>
                ))}
            </tbody>             
        </table>

        <h5 className='margintop12'>Updated Professor Accounts</h5>
           <table >
            <thead className='primary'>
            <tr>
                <th className='padding12'>Faculty ID</th>
                <th className='padding12'>Name</th>
            
               </tr>
            </thead>
            <tbody>
                {updatelist.updatedproff.map((item, key)=>(
                    <tr key={key}>
                        <td>{item.faculty_id}</td>
                        <td>{item.proffname}</td>
                     
                    </tr>
                ))}
            </tbody>             
        </table>

     </div>
       
    }


</div>
    
  )
}

export default Updatelistproff