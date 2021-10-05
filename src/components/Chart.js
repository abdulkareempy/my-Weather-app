import {Line} from "react-chartjs-2";
import React from 'react'

function Chart({dailyData}) {
    const data = {
        labels: dailyData.xAxis,
        datasets: [
          {
            label: 'Daily Temp in *C',
            data: dailyData.yAxis,
            fill: false,
            backgroundColor: ['rgb(255, 99, 132)'],
            borderColor: 'rgba(25, 25, 132, 0.9)',
          },
          {
            label: 'Daily fareh in *k',
            data: [29.5,28.7,29,28],
            fill: false,
            backgroundColor: ['rgb(22, 199, 132)'],
            borderColor: 'rgba(250, 25, 132, 0.9)',
          }
        ],
      };
      
      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      
    return (
        <div style={{backgroundColor:"currentcolor"}}>
            <Line 
            data = {data}
            options={options}/>
        </div>
    )
}

export default Chart
