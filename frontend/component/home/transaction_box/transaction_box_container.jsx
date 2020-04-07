import { connect } from "react-redux";
import TransactionBox from "./transaction_box";
import {buyTransaction, sellTransaction} from "../../actions/transactions_action"


const mSTP = (state, ownProps) => ({

    currentUser: state.entities.users[state.session.id],
    sharesPrice: state.stockCurrentPrice,
    stockInfo: state.stockInfo
   
})

const mDTP = dispatch => ({
  buyTransaction: (stock) => dispatch(buyTransaction(stock)),
  sellTransaction: (stock) => dispatch(sellTransaction(stock))
})


export default connect(
  mSTP,
  mDTP
)(TransactionBox)