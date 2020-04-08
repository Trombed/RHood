import { connect } from "react-redux";
import { allTransaction } from "../../actions/transactions_action";
import Portfolio from "./portfolio";
import { currentPortfolioPrices } from '../../actions/stock_action'


const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    session: state.session,
    currentUser: Object.values(state.entities.users),
    portfolio: Object.values(state.portfolio),
    portfolioPrices: state.portfolioPrices
})

const mDTP = (dispatch) => ({
    allTransaction: () => dispatch(allTransaction()),
    currentPortfolioPrices: (symbols) => dispatch(currentPortfolioPrices(symbols))
})

export default connect(
  mSTP,
  mDTP,
)(Portfolio)