import { connect } from "react-redux";
import { login } from "../actions/session_action";
import LoginUser from './login_session'

const mSTP = (state, ownProps) => ({
  errors: state.errors,
  session: state.session,
  formType: "login"
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(
  mSTP,
  mDTP,
)(LoginUser)