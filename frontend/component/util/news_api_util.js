export const fetchNews = (stockName) => {
  const name = stockName.split(' ');
  return (
    $.ajax({
      method: 'GET',
      url: `/api/news/${name[0]}`,
    })
  );
};


export const fetchAllNews = () => (
  $.ajax({
    method: 'GET',
    url: `/api/news/`,
  })
);
