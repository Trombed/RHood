import { connect } from "react-redux";
import { signup, clearError } from "../actions/session_action";
import NewUserSession from "./new_user_session";


const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  session: state.session,
  formType: "signup"
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  clearError: () => dispatch(clearError())
})

export default connect(
  mSTP,
  mDTP,
)(NewUserSession)