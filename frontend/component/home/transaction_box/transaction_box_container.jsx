import { connect } from "react-redux";
import TransactionBox from "./transaction_box";
import {buyTransaction, sellTransaction} from "../../actions/transactions_action"
import { currentShares } from "../../actions/stock_action";
import {openModal} from '../../actions/modal_action';

const mSTP = ( state, ownProps) => ({

    currentUser: state.entities.users[state.session.id],
    sharesPrice: state.stockCurrentPrice,
    stockInfo: state.stockInfo,
    stockShares: state.stockShares,
    currentPrice: state.stockCurrentPrice
})

const mDTP = (dispatch) => ({
  buyTransaction: (stock) => dispatch(buyTransaction(stock)),
  sellTransaction: (stock) => dispatch(sellTransaction(stock)),
  currentShares: (stockId) => dispatch(currentShares(stockId)),
  openModal: (info) => dispatch(openModal(info))
})


export default connect(
  mSTP,
  mDTP
)(TransactionBox)