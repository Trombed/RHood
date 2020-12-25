import {connect} from 'react-redux';
import Confirmation from './confirmation';
import {closeModal} from '../../actions/modal_action';

const mSTP = (state) => ({
  confirm: state.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(
    mSTP,
    mDTP,
)(Confirmation);
