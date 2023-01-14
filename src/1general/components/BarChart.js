import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  return (
    <React.Fragment>

        <Chart

            height = '85%'
            width = '95%'
            type= "bar"
            series= {[
              
              {
                name: 'Pending',
                type: 'column',
                data: [21, 23, 31, 34, 44, 44, 56, 58]
              },
              {
                name: "Done",
                type: 'column',
                data: [10, 19, 27, 26, 34, 35, 40, 38]
              },
              {
                name: "Missing",
                type: 'column',
                data: [14, 2, 25, 15, 25, 28, 38, 46]
              },
            ]}
          options={{
            dataLabels: {
              enabled: false
            },
            colors: ['#08F03B', '#68EC16', '#026FA2'],
            
            stroke: {
              width: [2, 2, 2]
            },
            plotOptions: {
              bar: {
                columnWidth: "50%",
                position:'center'
              }
            },
            
            xaxis: {
              categories: ['Class #1', 'Class #2', 'Class #3', 'Class #4', 'Class #5', 'Class #6', 'Class #7', 'Class #8'],
              labels: {
              style: {
                fontSize:  '10px',
              }
            }
            },
            yaxis: [
              {
                seriesName: 'Pending',
                axisTicks: {
                  show: true
                },
                axisBorder: {
                  show: true,
                },
                title: {
                  text: ""
                },
              

              },
              {
                seriesName: 'Done',
                show: false
              }, {
                opposite: true,
                seriesName: 'Missing',
                show:false,
                axisTicks: {
                  show: true
                },
                axisBorder: {
                  show: true,
                },
                title: {
                  text: ""
                }
              }
            ],
            tooltip: {
              shared: false,
              intersect: true,
              x: {
                show: false
              }
            },
            legend: {

              position:"right",
              /*markers:
              {
                colors: ['#F44336', '#E91E63', '#9C27B0']
             },*/
              //horizontalAlign: "right",
              offsetX: -5,
              offsetY: 15
              
         
            }
          
          }}
        
        ></Chart>

    </React.Fragment>
  );
}

export default Barchart;