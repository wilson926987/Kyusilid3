
import React from "react";
import Chart from "react-apexcharts";

function areachart() {
  return (
    <React.Fragment>

        <Chart
        height = '120%'
        width = '88%'
        type= "area"
        stacked = "false"
       
        series = {[
            {
            name: 'Student Enrolled',
            data: [3100, 4000, 2008, 5100, 4200, 1090, 1000]
          }, 
          {
            name: 'Professor Employed',
            data: [11, 32, 45, 32, 34, 52, 41]
          }]
        }
    
            
          options={{
            
            //toolbar
            chart: {
              //background: '#00ff00',
                toolbar:{
              show:true,
              offsetX: 125,
              offsetY: 22,
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
            
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.35
          }

            },


            dataLabels: {
                enabled: false
              },
              
              colors: ["#0000FF", "#00FF00"],
              stroke: {
                width: [4, 4],
                          curve: 'smooth'

              },
              plotOptions: {
               toolbar:{
                show:false,
               }
              },
              xaxis: {
                tickPlacement: 'on',
                type: "datetime",
                categories: [
                  "2023-01-19T00:00:00.000Z",
                  "2023-01-19T01:30:00.000Z",
                  "2023-01-19T02:30:00.000Z",
                  "2023-01-19T03:30:00.000Z",
                  "2023-01-19T04:30:00.000Z",
                  "2023-01-19T05:30:00.000Z",
                  "2023-01-19T06:30:00.000Z"
                ],
                labels: {
                    style: {
                      fontSize:  '12px',
                      fontWeight: '600',
                    }
                  }
              },
              yaxis: [
                {
                  axisTicks: {
                    show: true,
                    color: "#00008B"
                  },
                  axisBorder: {
                    show: true,
                    color: "#00008B"
                  },
                  labels: {
                    style: {
                      colors: "#00008B"
                    }
                  }
                  
                },
                {
                  opposite: true,
                  axisTicks: {
                    show: false
                  },
                  axisBorder: {
                    show: false,
                                 },
                  labels: {
                    show:false,
                    style: {
                      colors: "#00008B"
                    }
                  },
                                //  title: {
                                //     text: "Semestral Period",
                                //     style: {
                                //         color: "#00008B",
                                //         fontSize: '13px',
                                //     }
                                //   }
                 
                }
              ],
              tooltip: {
                
                shared: false,
                intersect: false,

                x: {
                  show: true,
                  format: "dd/MMM/yy HH:mm"
                }
              },  
              legend: {
                fontSize: '12px',
                horizontalAlign: "center",
            },
            grid: {
              show: true,
              borderColor: 'green',
              strokeDashArray: 2,
              position: 'back',
              xaxis: {
            
                  lines: {
                      show: false
                  }
              },   
              yaxis: {
                  lines: {
                      show: true
                  }
              },  
              row: {
                  colors: undefined,
                  opacity: 0.5
              },  
              column: {
                  colors: undefined,
                  opacity: 0.5
              },  
              padding: {
                top: 10,
                right: 0,
                bottom: 0,
                left: 25
              },  
          }
              
          
          }}
     
        ></Chart>

    </React.Fragment>
  );
}

export default areachart;