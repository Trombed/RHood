import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import { sessionReducer } from "./session_reducer";
import { searchReducer } from "./search_reducer";
import stockProfileReducer  from "./stock_profile_reducer"
import stockPriceReducer from "./stock_price_reducer";
import stockInfoReducer from "./stock_info_reducer";
import StockOneWeekPriceReducer from "./stock_one_week_reducer";
import stockFiveYearReducer from "./stock_five_year_reducer";
import stockCurrentPriceReducer from "./stock_current_price_reducer";
import watchListReducer from './watch_list_reducer'
import watchListPriceReducer from "./watch_list_prices_reducer";
import transactionsReducer from "./transaction_reducer";
import portfolioPriceReducer from "./portfolio_price_reducer";


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer,
  stockProfile: stockProfileReducer,
  stockPrice: stockPriceReducer,
  stockInfo: stockInfoReducer,
  stockOneWeekPrice: StockOneWeekPriceReducer,
  stockFiveYearPrice: stockFiveYearReducer,
  stockCurrentPrice: stockCurrentPriceReducer,
  watchList: watchListReducer,
  watchListPrice: watchListPriceReducer,
  portfolio: transactionsReducer,
  portfolioPrices: portfolioPriceReducer
});

export default rootReducer;

