import { connect } from "react-redux";
import HomeNavBar from './home_nav_bar'
import { stock_search } from "../actions/stock_action";
import { logout } from "../actions/session_action";


const mSTP = state => ({
    search: Object.values(state.search)
})

const mDTP = dispatch => ({
    stock_search: (search) => dispatch(stock_search(search)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(HomeNavBar)