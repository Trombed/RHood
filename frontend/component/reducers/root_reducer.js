import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import { sessionReducer } from "./session_reducer";
import { searchReducer } from "./search_reducer";
import stockProfileReducer  from "./stock_profile_reducer"
import stockPriceReducer from "./stock_price_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer,
  stockProfile: stockProfileReducer,
  stockPrice: stockPriceReducer
});

export default rootReducer;

