import { connect } from "react-redux";
import { companyInfo, oneDayStockInfo, fetchStockFromDB, oneWeekStockInfo, oneMonthStockInfo, threeMonthStockInfo, oneYearStockInfo, fiveYearStockInfo, currentPriceInfo } from "../../actions/stock_action"
import StockPage from "./stock_page";
import { watchListInfo } from "../../actions/watch_list_actions";





const mSTP = (state, ownProps) => ({
    company: state.stockProfile,
    price: state.stockPrice,
    info: state.stockInfo,
    oneWeekPrice: state.stockOneWeekPrice,
    oneMonthPrice: state.stockOneMonthPrice,
    threeMonthPrice: state.stockThreeMonthPrice,
    oneYearPrice: state.stockOneYearPrice,
    fiveYearPrice: state.stockFiveYearPrice,
    currentPrice: state.stockCurrentPrice,
    watchList: state.watchList
})

const mDTP = dispatch => ({
    fetchStockFromDB: (id) => dispatch(fetchStockFromDB(id)),
    companyInfo: (stockSymbol) => dispatch(companyInfo(stockSymbol)),
    oneDayStockInfo: (prices) => dispatch(oneDayStockInfo(prices)),
    oneWeekStockInfo: (prices) => dispatch(oneWeekStockInfo(prices)),
    oneMonthStockInfo: (prices) => dispatch(oneMonthStockInfo(prices)),
    threeMonthStockInfo: (prices) => dispatch(threeMonthStockInfo(prices)),
    oneYearStockInfo: (prices) => dispatch(oneYearStockInfo(prices)),
    fiveYearStockInfo: (prices) => dispatch(fiveYearStockInfo(prices)),
    currentPriceInfo: (price) => dispatch(currentPriceInfo(price)),
    watchListInfo: () => dispatch(watchListInfo())
})


export default connect(mSTP,mDTP)(StockPage)
