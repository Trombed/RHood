import { connect } from "react-redux";
import { signup } from "../actions/session_action";
import NewUserSession from "./new_user_session";


const mSTP = (state, ownProps) => ({
  errors: state.errors,
  session: state.session,
  formType: "signup"
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect(
  mSTP,
  mDTP,
)(NewUserSession)