import { connect } from "react-redux";
import { logout } from "../actions/session_action";
import Home from "./home";
import { watchListInfo } from "../actions/stock_action"

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  watchList: Object.values(state.watchList)
 
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  watchListInfo: () => dispatch(watchListInfo())
  
})


export default connect(
  mSTP,
  mDTP
)(Home)