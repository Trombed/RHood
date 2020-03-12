import { connect } from "react-redux";
import WatchListItems from "./watch_list_items";



const mSTP = (state) => ({
  price: state.watchListPrice,
  stockInfo: state.stockInfo
})



export default connect(
  mSTP,
  null
)(WatchListItems)

// watchPrices: stockSymGetter(Object.values(state.watchList)).join(","),