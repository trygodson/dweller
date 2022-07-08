import React from 'react';

import { Doughnut } from 'react-chartjs-2';

const DoughnutCharts = () => {
  const label = ['Jan', 'Feb', 'Mar'];

  return (
    <div>
      <Doughnut
        width={175}
        height={175}
        legend={false}
        options={{ maintainAspectRatio: false, cutoutPercentage: 80 }}
        data={{
          labels: label,
          datasets: [
            {
              barPercentage: 10,
              label: 'No of Stocks',
              data: [20, 33, 24],
              backgroundColor: ['rgb(249 115 22)', 'rgb(55 48 163)', 'rgb(13 148 136)'],
              borderColor: 'transparent',
              radius: 10,
              fill: true,
              borderDashOffset: 4,
              maxBarThickness: 10,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutCharts;
