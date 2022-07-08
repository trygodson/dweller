import React from 'react';
import { Line } from 'react-chartjs-2';

const TheGradientLineCharts = () => {
  var canvas = document.getElementsByClassName('chartjs-render-monitor');
  console.log(canvas);
  // var ctx = canvas[1].getContext('2d');
  // var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, 'rgb(249 115 22)');
  // gradient.addColorStop(1, 'rgb(55 48 163)');
  // gradient.addColorStop(2, 'rgb(13 148 136)');
  // const label = ['Jan', 'Feb', 'Mar', `Apr`, `May`];

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            offsetGridLines: true,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line
        legend={false}
        options={options}
        data={{
          labels: ['Jan', 'Feb', 'Mar', `Apr`, `May`],
          datasets: [
            {
              label: 'No of Stocks',
              data: [20, 33, 24, 45, 23],
              backgroundColor: 'rgb(55 48 163)',
              borderColor: 'transparent',
              fill: false,
            },
            // {
            //   label: 'No of Remaining Stocks',
            //   data: [43, 22, 54, 33, 12, 44, 23, 35, 66, 44, 35, 76],
            //   backgroundColor: '#2db2ff',
            //   borderColor: '#2db2ff',
            //   fill: false,
            // },
          ],
        }}
      />
    </div>
  );
};

// const SmallChart = () => {
//   const label = ['Jan', 'Feb', 'Mar', `Apr`];

//   return (
//     <div>
//       <Line
//         width={200}
//         height={130}
//         options={{
//           maintainAspectRatio: false,
//           responsive: true,
//           legend: false,
//           layout: false,
//           plugins: true,
//         }}
//         data={{
//           labels: label,
//           datasets: [
//             {
//               label: 'No of Stocks',
//               data: [20, 33, 24, 45],
//               backgroundColor: '#06152b',
//               borderColor: '#06152b',

//               fill: false,
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export { SmallChart };

export default TheGradientLineCharts;
