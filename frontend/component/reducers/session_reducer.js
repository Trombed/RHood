import { RECEIVE_CURRENT_USER } from "../actions/session_action";

const _nullSession = {
  id: null,
}

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return {id: action.user.id}

    // case LOGOUT_CURRENT_USER:
    //   return _nullSession
    default:
      return state;
  }
}