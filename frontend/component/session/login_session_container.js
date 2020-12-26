import {connect} from 'react-redux';
import {login, demoLogin, clearError} from '../actions/session_action';
import LoginUser from './login_session';

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  session: state.session,
  formType: 'login',
});

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin()),
  clearError: () => dispatch(clearError()),
});

export default connect(
    mSTP,
    mDTP,
)(LoginUser);
