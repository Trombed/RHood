import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS  } from "../actions/session_action";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state) 
  switch (action.type) {
    case  RECEIVE_SESSION_ERRORS:
      let errorArr = action.errors
      return errorArr
    case RECEIVE_CURRENT_USER:
      return state
    default:
      return state
  }
}

export default sessionErrorsReducer