import React, { useContext} from 'react'
import { updatelistContext } from '../Globalcontext'

function Updatelist() {

    const {updatelist} = useContext(updatelistContext)

  return (
    <div className='tertiary borderradius-lg padding12'>
        <h4>Classlist Update</h4>
        

        {updatelist!= undefined &&
         <div className='margintop12'>
            <h5 className='margintop12'>Added Classes</h5>
               <table >
                <thead className='primary'>
                <tr>
                    <th className='padding12'>Classes Id</th>
                    <th className='padding12'>Year and Section</th>
                    <th className='padding12'>Subject</th>
                   </tr>
                </thead>
                <tbody>
                    {updatelist.addedclasses.map((item, key)=>(
                        <tr key={key}>
                            <td>{item.classes_id}</td>
                            <td>{item.yearandsection}</td>
                            <td>{item.subject}</td>
                        </tr>
                    ))}
                </tbody>             
            </table>


            <h5 className='margintop12'>Updated Classes</h5>
               <table >
                <thead className='primary'>
                   <tr>
                    <th className='padding12'>Classes Id</th>
                    <th className='padding12'>Year and Section</th>
                    <th className='padding12'>Subject</th>
                   </tr>
                </thead>
                <tbody>
                    {updatelist.updatedclasses.map((item, key)=>(
                        <tr key={key}>
                            <td>{item.classes_id}</td>
                            <td>{item.yearandsection}</td>
                            <td>{item.subject}</td>
                        </tr>
                    ))}
                </tbody>             
            </table>


            <h5 className='margintop12'>Added Subject</h5>
               <table>
                <thead className='primary'>
                   <tr>
                    <th className='padding12'>Subject Id</th>
                    <th className='padding12'>Subject Code</th>
                    <th className='padding12'>Description</th>
                   </tr>
                </thead>
                <tbody>
                    {updatelist.addedsubj.map((item, key)=>(
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.sub_code}</td>
                            <td>{item.sub_name}</td>
                        </tr>
                    ))}
                </tbody>             
            </table>

            <h5 className='margintop12'>Updated Subject</h5>
               <table>
                <thead className='primary'>
                <tr>
                    <th className='padding12'>Subject Id</th>
                    <th className='padding12'>Subject Code</th>
                    <th className='padding12'>Description</th>
                   </tr>
                </thead>
                <tbody>
                    {updatelist.updatedsubj.map((item, key)=>(
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.sub_code}</td>
                            <td>{item.sub_name}</td>
                        </tr>
                    ))}
                </tbody>             
            </table>



            
           


         </div>

            
        }


    </div>


  )
}

export default Updatelist