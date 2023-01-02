
import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';

function Donutchart()
{
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

    return(
        
          <React.Fragment>

<Chart  

type="donut"
width={300}
height={300}
series={[47,50]}

options={{
    
labels:['Total Discussions','Total Attended'],

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
     
       
        
            total:{
                
//show label Note: Do not showAlways because if you hover cant be change the label
                show:false,
                /*showAlways:true,*/
                 //formatter: () => '343',
                fontSize:18,
                color: 'black',
                
            }
            
        }
        
    
        
     
    }
 }

 },
 

legend:{
position:"right"
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
export default Donutchart;