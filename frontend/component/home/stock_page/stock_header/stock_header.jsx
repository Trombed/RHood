import React from 'react';

const StockHeader = (props) => {
  const {companyName, price, change, percentageChange} = props;

  const text = () =>{
    if (price === undefined) {
      return '$0.00';
    } else {
      return price.toLocaleString('en', {
        style: 'currency', currency: 'USD'});
    }
  };

  const activePrice = () => {
    if (change === '') {
      return `$0.00`;
    } else {
      return change;
    }
  };

  const percentage = () => {
    if (percentageChange === '') {
      return;
    } else {
      return '(' + percentageChange + '%' + ')';
    }
  };

  return (
    <div className='Stock-Container-Title'>
      <div className='Stock-Container-Header'>

        <div className="Stock-Container-Company-Name">
          {companyName}
        </div>

        <div className="Stock-Container-Company-Price">
          <br/>
          {text()}
        </div>

        <div className='Stock-Container-Company-Changes'>
          {activePrice()}
          {percentage()}
        </div>
      </div>
    </div>
  );
};

export default StockHeader;
