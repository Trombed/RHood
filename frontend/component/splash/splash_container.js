import { connect } from "react-redux";
import Splash from "./splash";
import { logout } from "../actions/session_action";


const mSTP = (state) => ({
  sessionId: state.session.id
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
  
})


export default connect(
  mSTP,
  mDTP
)(Splash)