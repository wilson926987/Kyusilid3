import React from 'react';
//import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';

function areachart()

{
    /*
    const [ActStatus, setActStatus]= useState([]);
    const [medal, setMedal]= useState([]);

    useEffect( ()=>{
     const getdata= async()=>{
          const ActStatus=[];
          const getmedal=[];

        const reqData= await fetch("http://localhost/reactgraphtutorial/medals"); 
        const resData= await reqData.json();
        for(let i=0; i<resData.length; i++)
        {
            
            ActStatus.push(resData[i].ActStatus);
            getmedal.push(parseInt(resData[i].medals));
        }
    
        setActStatus(ActStatus);
        setMedal(getmedal);
       
     }
    
     getdata();
    
    },[]);
*/
    return(
        
          <React.Fragment>

<Chart  

type="radialBar"
height= {'155'}
series={[470,50,392,212]}

options={{
    
labels:['1st Year','2nd Year','3rd Year', '4th Year'],

 /*
 title:{
    text:"Desc",
   // align:"center",
 },
 */
 chart: {
    animations: {
        enabled: false,
        animateGradually: {
            enabled: false,
        },
   
    },
    //text-color legends
    
    foreColor: 'black'},

    

    //circle-color side
    stroke: {
        width: 0,

      },
      
 plotOptions:{
    
 pie:{

    donut:{
        
        //circle color -'Total'
        background:'',
        labels:{
            
        
            show:true,
     
       
        
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return "249";
              }
                
            }
            
        }
        
    
        
     
    }
 }

 },
 

legend:{
position:"right",
offsetX: 100
},
dataLabels: {
enabled: false,



},


 fill: {
    
    type: 'gradient',
    
    gradient: {
        shade: 'light',
        shadeIntensity: 0.3,
    }
  }


}}

/>


</React.Fragment>

    );
}
export default areachart;