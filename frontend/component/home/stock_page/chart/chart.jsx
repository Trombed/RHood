import React from 'react';
import {LineChart, Line, Tooltip, YAxis, XAxis} from 'recharts';

const Chart = (props) => {
  const {chartData, handleResetPrice, clickHandler} = props;

  const customToolTip = (e) => {
    if (e.label === undefined) return;
    let time;
    if (e.payload.length === 0) {
      time = '';
    } else if (e.payload[0].payload.label.includes(',')) {
      time = e.payload[0].payload.label.split(',')[0];
    } else {
      time = e.payload[0].payload.label;
    }
    return (
      <div className="Stock-Tool-Tip" >
        {e.label} {time}
      </div>
    );
  };

  return (
    <LineChart
      width={600}
      height={250}
      data={chartData}
      onMouseLeave={handleResetPrice}
      onMouseMove={clickHandler}>

      <Line
        type="monotone"
        dataKey="close"
        stroke={
                ((Object.values(chartData).length === 0 ) ||
                (chartData.length === 0) ||
                (chartData[0].close === undefined )) ? 'yellow' :
                       (chartData[chartData.length-1].close >=
                         chartData[0].close ) ?
                         '#21ce99' : '#f45531'
        }
        strokeWidth={1.5}
        dot={false}
      />
      <YAxis
        type="number"
        domain={['dataMin'-5, 'dataMax'+5]}
        axisLine={false}
        hide={true}
      />
      <Tooltip
        position={{y: 0}}
        offset={-50}
        isAnimationActive={false}
        content={customToolTip}
        wrapperStyle={{top: -20}}
      />
      <XAxis
        dataKey='date'
        hide={true}
      />

    </LineChart>

  );
};


export default Chart;
