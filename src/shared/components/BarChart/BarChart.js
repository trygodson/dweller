import React from 'react';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
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
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'Quotation Reviews',
    },
  },
};

const labels = [
  'J',
  'F',
  'M',
  'A',
  'M',
  'J',
  'J',
  'A',
  'S',
  'O',
  'N',
  'D',
  'J',
  'A',
  'S',
  'O',
  'N',
  'D',
];

export const data = {
  labels,

  datasets: [
    {
      label: 'Purchased',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#156bbb',
      borderWidth: 2,
      barThickness: 6,
    },
    {
      label: 'Sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#052053',
      borderWidth: 2,
      barThickness: 6,
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} legend={false} />;
}
