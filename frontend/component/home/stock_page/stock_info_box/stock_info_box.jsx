import React from 'react';

const StockInfoBox = (props) => {
  const {
    ceo,
    description,
    ticker_symbol,
    sector,
    industry} = props;
  return (
    <div>
      <div className="Stock-Container-About">
      About
      </div>
      <div className="Stock-Container-Description">
        {description}
      </div>
      <div className="Stock-Container-Company-Info">
        <div>
        CEO
          <br/>
          {ceo}
        </div>

        <div>
        Symbol
          <br/>
          {ticker_symbol}
        </div>

        <div>
        Sector
          <br/>
          {sector}
        </div>

        <div>
        Industry
          <br/>
          {industry}
        </div>
      </div>
    </div>
  );
};

export default StockInfoBox;
