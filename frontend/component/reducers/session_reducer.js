import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_action";

const _nullSession = {
  id: null,
}

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    //   const mainK = parseInt(Object.keys(action.user)[0])
    //   debugger
    //   newState["id"] = action.user[mainK].id
    return {id: action.user.id}
    //   return newState;
    
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}