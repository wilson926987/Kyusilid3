
import React from "react";
import Chart from "react-apexcharts";

function statprofstud() {
  return (
    <React.Fragment>

        <Chart
        
            height = '250%'
            width = '88%'
            type= "line"
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
                toolbar:{
              show:true,
              offsetX: 150,
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
              
              colors: ["#0000FF", "#00FF00"],
              stroke: {
                width: [4, 4]
              },
              plotOptions: {
               toolbar:{
                show:false,
               }
              },
              xaxis: {
                categories: [' ', 'AL101','AL102','CC106','SAM101','SIA101'],
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
                                 title: {
                                    text: "Semestral Period",
                                    style: {
                                        color: "#00008B",
                                        fontSize: '13px',
                                    }
                                  }
                 
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
            }
              
          
          }}
     
        ></Chart>

    </React.Fragment>
  );
}

export default statprofstud;