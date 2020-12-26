import React from 'react';
import News from '../../news/news';

const StockNews = ({data}) => {
  const news = (data.length <= 0) ?
      null :
      data.map( (page, idx) => (
        <News page={page} idx={idx} key={`${idx}`} />
      ));


  return (
    <div className="Main-News-Container">
      {news}
    </div>

  );
};


export default StockNews;
