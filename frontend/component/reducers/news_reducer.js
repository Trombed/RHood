import {RECEIVE_NEWS, RECEIVE_ALL_NEWS} from '../actions/news_action';

const newsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWS:

      return action.news.articles;
    case RECEIVE_ALL_NEWS:

      return action.news.articles;
    default:
      return state;
  }
};

export default newsReducer;
