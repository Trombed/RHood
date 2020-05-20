import { connect } from "react-redux";
import MainContent from "./main_content";
import {getAllNews } from "../../actions/news_action"
import {getValuation} from "../../actions/valuation_action"

const mSTP = (state, ownProps) => ({
    valuation: state.valuation,
    news: Object.values(state.news)
})




const mDTP = dispatch => ({
    getAllNews: () => dispatch(getAllNews()),
    getValuation: () => dispatch(getValuation())
})



export default connect(
  mSTP,
  mDTP
)(MainContent)