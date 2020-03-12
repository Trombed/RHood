import { connect } from "react-redux";
import { companyInfo, oneDayStockInfo, fetchStockFromDB, oneWeekStockInfo, fiveYearStockInfo, currentPriceInfo } from "../../actions/stock_action"
import StockPage from "./stock_page";
import { watchListInfo } from "../../actions/watch_list_actions";






const mSTP = (state, ownProps) => ({
    company: state.stockProfile,
    price: state.stockPrice,
    info: state.stockInfo,
    oneWeekPrice: state.stockOneWeekPrice,
    fiveYearPrice: state.stockFiveYearPrice,
    currentPrice: state.stockCurrentPrice,
    watchList: state.watchList
})

const mDTP = dispatch => ({
    fetchStockFromDB: (id) => dispatch(fetchStockFromDB(id)),
    companyInfo: (stockSymbol) => dispatch(companyInfo(stockSymbol)),
    oneDayStockInfo: (prices) => dispatch(oneDayStockInfo(prices)),
    oneWeekStockInfo: (prices) => dispatch(oneWeekStockInfo(prices)),
    fiveYearStockInfo: (prices) => dispatch(fiveYearStockInfo(prices)),
    currentPriceInfo: (price) => dispatch(currentPriceInfo(price)),
    watchListInfo: () => dispatch(watchListInfo())
})


export default connect(mSTP,mDTP)(StockPage)
