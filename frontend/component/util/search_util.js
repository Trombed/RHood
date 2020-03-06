const APISearchUtil = {
    stock_search: (stock) => (
       
    $.ajax({
        method: 'GET',
        url: "/api/stocks",
        data: {
            stock
        }})
    )}


export default APISearchUtil

