import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#5F6D7E', '#169872'];

export const CreditScoreChart = ({ creditScore }) => {
  const data = [
    { name: 'Credit Score', value: creditScore },
    { name: 'Remaining', value: 1000 - creditScore },
  ];

  return (
    <div className="">
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={-180}
          innerRadius={50}
          outerRadius={70}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

// export default CreditScoreChart;
