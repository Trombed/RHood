import { connect } from "react-redux";
import { logout } from "../../actions/session_action";
import StockMain from "./stock_main";


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  info: ownProps,
  stockCurPrice: state.stockCurrentPrice

})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
 
})


export default connect(
  mSTP,
  mDTP
)(StockMain)