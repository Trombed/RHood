import { RECEIVE_NEWS, RECEIVE_ALL_NEWS } from "../actions/news_action"



const newsReducer = (state = {}, action) => {
  Object.freeze(state) 
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_NEWS:
        debugger
        return action.news
    case RECEIVE_ALL_NEWS:
        debugger
        return action.news.articles
    default:
      return state 
  }
}

export default newsReducer