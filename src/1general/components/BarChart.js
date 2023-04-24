import React from "react";
import Chart from "react-apexcharts";

function Barchart({item}) {
  return (
    <React.Fragment>

        <Chart

            height = '150%'
            width = '95%'
            type= "bar"
            series= {[
              
              {
                name: 'Pending',
                type: 'column',
                data: item.pendinglist
              },
              {
                name: "Done",
                type: 'column',
                data: item.donelist
              },
              {
                name: "Missing",
                type: 'column',
                data: item.missinglist
              },
            ]}
          options={{
            chart: {
              //background: '#00ff00',
                toolbar:{
              show:true,
              offsetX: 35,
              tools: {
                download: true,
                selection: false,
                home:false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false | '<img src="/static/icons/reset.png" width="20">',
                customIcons: []
              },
              export: {
                csv: {
                  filename: undefined,
                  columnDelimiter: ',',
                  headerCategory: 'category',
                  headerValue: 'value',
                  dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                  }
                },
                svg: {
                  filename: undefined,
                },
                png: {
                  filename: undefined,
                }
              },
              autoSelected: 'menu' 
            
                }

            },
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
              categories: item.classlist,
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