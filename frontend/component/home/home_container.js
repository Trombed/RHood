import { connect } from "react-redux";
import { logout } from "../actions/session_action";
import Home from "./home";
import { getAllNews } from '../actions/news_action'


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  news: Object.values(state.news)
 
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  getAllNews: () => dispatch(getAllNews())
  
})


export default connect(
  mSTP,
  mDTP
)(Home)