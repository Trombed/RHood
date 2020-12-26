import React, {} from 'react';

const ChartNavigation = (props) => {
  const {
    handleChart,
    color1,
    color2,
    color3,
    color4,
    color5,
    activeTab 
  } = props;

  return (
    <div className="Stock-Container-Chart-Navigation">
      <div className="Stock-Container-Chart-Time">
        <button
          className={`Stock-Button Stock-Data-1   ${ activeTab === 1 ?  color1 : `` } `}
          id="Stock-Data-1"
          onClick={() => handleChart(1)}
        >
            1D
        </button>
        <button
          className={`Stock-Button Stock-Data-2   ${ activeTab === 2 ?  color2 : `` } `}
          id="Stock-Data-2"
          onClick={() => handleChart(2)} >
            1W
        </button>
        <button
          className={`Stock-Button Stock-Data-3   ${ activeTab === 3 ?  color3 : `` } `}
          id="Stock-Data-3"
          onClick={() => handleChart(3)} >
            1M
        </button>
        <button
          className={`Stock-Button Stock-Data-4   ${ activeTab === 4 ?  color4 : `` } `}
          id="Stock-Data-4"
          onClick={() => handleChart(4)} >
            3M
        </button>
        <button
          className={`Stock-Button Stock-Data-5   ${ activeTab === 5 ?  color5 : `` } `}
          id="Stock-Data-5"
          onClick={() => handleChart(5)} >
            1Y
        </button>
      </div>
    </div>
  );
};

export default ChartNavigation;
