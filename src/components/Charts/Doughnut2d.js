// STEP 1 - Include Dependencies
// Include react
import React from 'react'
import ReactDOM from 'react-dom'

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

const ChartComponent = ({ data }) => {
  // const newData = data
  //   .sort((a, b) => {
  //     return b.stars - a.stars
  //   })
  //   .map((item) => {
  //     const { label, stars } = item
  //     return { label, value: stars }
  //   })
  //   .slice(0, 5)
  // console.log(newData)
  const chartConfigs = {
    type: 'Doughnut2d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Stars per language',
        //Set the theme for your chart
        theme: 'candy',
        DoughnutRadius: '55%',
        showPercentValues: 0,
      },
      // Chart Data
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}
// class App extends React.Component {
//   render() {
//     return <ReactFC {...chartConfigs} />
//   }
// }

export default ChartComponent
