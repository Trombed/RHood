import {RECEIVE_CURRENT_USER} from '../actions/session_action';

const _nullSession = {
  id: null,
};

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return {id: action.user.id};

    default:
      return state;
  }
};
