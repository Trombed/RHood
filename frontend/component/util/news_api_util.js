
export const fetchNews = (stockName) => {
    var name = stockName.split(" ")
    console.log(name)
    return (
        $.ajax({
            method: "GET",
            url: `https://newsapi.org/v2/everything?q=${name[0]}&apiKey=${window.newsAPIKey}`    
        })
    )
}




export const fetchAllNews = () => (
        $.ajax({
            method: "GET",
            url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${window.newsAPIKey}`
        })
)
