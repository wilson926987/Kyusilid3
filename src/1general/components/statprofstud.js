
import React from "react";
import Chart from "react-apexcharts";

function statprofstud() {
  return (
    <React.Fragment>

        <Chart
        
            height = '140%'
            width = '95%'
            type= "area"
            stacked = "false"
       
            series= {[
              
                {
                    name: "Middle Term",
                    data: [0,90,87,97,85,89]
                  },
                  {
                    name: "Final Term",
                    data: [0,80,82,87,90,95]
                  },
                  
            ]}
            
          options={{
            
            //toolbar
            chart: {
              //background: '#00ff00',
                toolbar:{
              show:true,
              offsetX: 65,
              offsetY: 10,
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
                categories: ['', 'AL101','AL102','CC106','SAM101','SIA101'],
                labels: {
                    style: {
                      fontSize:  '15px',
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
                    
                 
                }
              ],
              tooltip: {
                
                shared: false,
                intersect: false,

                x: {
                  show: false
                }
              },  
              legend: {
                fontSize: '15px',
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
                  top: 0,
                  right: 20,
                  bottom: 10,
                  left: 25
              },  
          }
              
          
          }}
     
        ></Chart>

    </React.Fragment>
  );
}

export default statprofstud;