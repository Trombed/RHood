import { connect } from "react-redux";
import { watchListInfo } from "../../actions/stock_action"
import WatchList from "./watch_list";

const mSTP = (state, ownProps) => ({
  watchList: Object.values(state.watchList)

 
})

const mDTP = dispatch => ({
watchListInfo: () => dispatch(watchListInfo())

  
})


export default connect(
  mSTP,
  mDTP
)(WatchList)