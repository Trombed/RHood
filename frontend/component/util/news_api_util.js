//20b75c0584fd4cbb9c58cc639ba881eb key 
export const fetchNews = (stockName) => {
    var name = stockName.split(" ")
    console.log(name)
    return (
        $.ajax({
            method: "GET",
            url: `https://newsapi.org/v2/everything?q=${name[0]}&apiKey=20b75c0584fd4cbb9c58cc639ba881eb`    
        })
    )
}




export const fetchAllNews = () => (
        $.ajax({
            method: "GET",
            url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20b75c0584fd4cbb9c58cc639ba881eb`
        })
)
