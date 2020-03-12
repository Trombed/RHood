export const stockSymGetter = (objArr) => {
    const list = []
    objArr.forEach( (obj) => (
        list.push(obj.ticker_symbol)
    ))
    return list
}

