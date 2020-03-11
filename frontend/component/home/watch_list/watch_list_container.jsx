import { connect } from "react-redux";
import WatchList from "./watch_list";
import { watchListInfo } from "../../actions/watch_list_actions";

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