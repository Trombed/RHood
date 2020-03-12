import moment from "moment"


export const stockSymGetter = (objArr) => {
    const list = []
    objArr.forEach( (obj) => (
        list.push(obj.ticker_symbol)
    ))
    return list
}


export const oneYearStats = (fiveYearArr) => {

    let oneYearPrior = moment()
    oneYearPrior.subtract(1,"year")
    oneYearPrior = oneYearPrior.format("YYYY-MM-DD");

    return fiveYearArr.filter( (dates) => dates.date >= oneYearPrior)

}

export const threeMonthStats = (oneYearData) => {
    let threeMonthsPrior = moment()
    threeMonthsPrior.subtract(3,"month")
    threeMonthsPrior = threeMonthsPrior.format("YYYY-MM-DD")
    return oneYearData.filter( (dates) => dates.date >= threeMonthsPrior)
}


export const oneMonthStats = (threeMonthData) => {
    let oneMonthsPrior = moment()
    oneMonthsPrior.subtract(1,"month")
    oneMonthsPrior = oneMonthsPrior.format("YYYY-MM-DD")
    return threeMonthData.filter( (dates) => dates.date >= oneMonthsPrior)
}