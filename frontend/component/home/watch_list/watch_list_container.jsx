import { connect } from "react-redux";
import WatchList from "./watch_list";
import { watchListInfo, watchListCurPrices } from "../../actions/watch_list_actions";
import { stockSymGetter } from "../../util/stock_util";

const mSTP = (state, ownProps) => ({
  watchList: Object.values(state.watchList),
  watchListPrice: state.watchListPrice
})

const mDTP = dispatch => ({
watchListInfo: () => dispatch(watchListInfo()),
watchListCurPrices: (watchPrices) => dispatch(watchListCurPrices(watchPrices)),
stockSymGetter: (list) => stockSymGetter(list)
  
})


export default connect(
  mSTP,
  mDTP
)(WatchList)

// watchPrices: stockSymGetter(Object.values(state.watchList)).join(","),