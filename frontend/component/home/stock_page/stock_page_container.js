import { connect } from "react-redux";
import { companyInfo, oneDayStockInfo } from "../../actions/stock_action"
import StockPage from "./stock_page";



const mSTP = state => ({
    company: state.stockProfile,
    price: state.stockPrice
})

const mDTP = dispatch => (

    {
    companyInfo: (stockSymbol) => dispatch(companyInfo(stockSymbol)),
  
    oneDayStockInfo: (prices) => dispatch(oneDayStockInfo(prices))
})


export default connect(mSTP,mDTP)(StockPage)