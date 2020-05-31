
export const fetchNews = (stockName) => {
    var name = stockName.split(" ")
    return (
        $.ajax({
            method: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${name[0]}&apiKey=${window.newsAPIKey}`,
              
        })
    )
}




export const fetchAllNews = () => (
        $.ajax({
            method: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${window.newsAPIKey}`
        })
)
