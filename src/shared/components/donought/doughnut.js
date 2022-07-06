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
              backgroundColor: ['#06152b', '#4b0fab', '#23d9d9'],
              borderColor: 'transparent',
              radius: 10,
              fill: true,
              maxBarThickness: 10,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutCharts;
