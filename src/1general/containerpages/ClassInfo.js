import React, { useContext, useEffect, useState } from 'react'
import Classinfoitem from '../components/Classinfoitem'
import axios from 'axios';
import { currentclassContext , personlistContext } from '../../Globalcontext';

function ClassInfo() {



  const {personlist} = useContext(personlistContext)







  return (
    <div>

      <div className="persontable">
        <div className='classinfotitle'>
            <h4>Professors</h4>
      
        </div>
        {personlist!== undefined && personlist.filter(temp=>{
          return temp.usertype=== 'prof'
        }).map((personitem, key)=>(
          <Classinfoitem key={key} personitem = {personitem}/>
        ))}

     

      


     

      </div>


        <div className="persontable">
          <div className='classinfotitle'>
            <div>
                <h4>Students</h4>        
                <h6> {personlist !== undefined  && personlist.filter(temp=>{
                  return temp.usertype === 'stud'
                }).length} total students</h6>
            </div>
          
            <input type="text"  placeholder='search'/>
          
          </div>

          {personlist!== undefined && personlist.filter(temp=>{
          return temp.usertype=== 'stud'
        }).map((personitem, key)=>(
          <Classinfoitem key={key} personitem = {personitem}/>
        ))}
  
       
   
    
        </div>
    </div>
  )
}

export default ClassInfo