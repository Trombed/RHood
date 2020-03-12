import { connect } from "react-redux";
import TransactionBox from "./transaction_box";


const mSTP = (state, ownProps) => ({

    currentUser: state.entities.users[state.session.id],
    sharesPrice: state.stockCurrentPrice
   
})

const mDTP = dispatch => ({

  
})


export default connect(
  mSTP,
  mDTP
)(TransactionBox)