import { background, Box } from '@chakra-ui/react'
import React from 'react'
import Chart from 'react-apexcharts'

const options = {
  labels: ['Expense',  'Income'],
  colors: ['#FD5E53', '#213ebf'],
  chart: {
    width: "50px"
  },
  states: {
    hover: {
      filter: {
        type: 'none',
    },
    },
  },
  legend: {
    show: false,
   },
   dataLabels: {
    enabled: false,
   },
   hover: {
    mode: null
   },
   plotOptions: {
    donut: {
      expandOnClicks:  false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
   },
   fill: {
    colors: ["#FD5E53", "#21BF73"],

   },
   tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000"
    }
   }
}

const Chart1 = ({expense= 100,  income = 200}) => {
  return ( <Chart
  options={options}
  series={[income, expense]}
  type='pie'
  width={'100%'}
  height={'100%'}
    
    />
   
  )
}

export default Chart1
