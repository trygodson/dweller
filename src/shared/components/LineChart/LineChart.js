import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const TheLineCharts = () => {
  const label = [
    'Jan',
    'Feb',
    'Mar',
    `Apr`,
    `May`,
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

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
          // ticks: {
          //   display: false,
          // },
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
          labels: [
            'Jan',
            'Feb',
            'Mar',
            `Apr`,
            `May`,
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'No of Stocks',
              data: [20, 33, 24, 45, 23, 13, 63, 32, 78, 22, 54, 12],
              backgroundColor: '#06152b',
              borderColor: '#06152b',
              fill: false,
            },
            {
              label: 'No of Remaining Stocks',
              data: [43, 22, 54, 33, 12, 44, 23, 35, 66, 44, 35, 76],
              backgroundColor: '#2db2ff',
              borderColor: '#2db2ff',
              fill: false,
            },
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

export default TheLineCharts;
