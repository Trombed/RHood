import { connect } from "react-redux";
import WatchListButton from "./watch_list_button";
import { addStockToWatchList, removeStockfromWatchList} from "../../actions/watch_list_actions"

const mSTP = (state, ownProps) => ({
  watchList: state.watchList

 
})

const mDTP = dispatch => ({
 addStockToWatchList: (stockId) => dispatch(addStockToWatchList(stockId)),
 removeStockfromWatchList: (stockId) => dispatch(removeStockfromWatchList(stockId))
  
})


export default connect(
  mSTP,
  mDTP
)(WatchListButton)