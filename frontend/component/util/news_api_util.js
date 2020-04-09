//20b75c0584fd4cbb9c58cc639ba881eb key 
export const fetchNews = (stockName) => (
        $.ajax({
            method: "GET",
            url: `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=20b75c0584fd4cbb9c58cc639ba881eb`
        })
)




export const fetchAllNews = () => (
        $.ajax({
            method: "GET",
            url: `https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol}`
        })
)
