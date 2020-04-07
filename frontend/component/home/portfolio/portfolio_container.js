import { connect } from "react-redux";
import { allTransaction } from "../../actions/transactions_action";
import Portfolio from "./portfolio";


const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    session: state.session,
    portfolio: Object.values(state.portfolio)
})

const mDTP = (dispatch) => ({
    allTransaction: () => dispatch(allTransaction())
})

export default connect(
  mSTP,
  mDTP,
)(Portfolio)