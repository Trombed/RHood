import APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

 

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((response) => (dispatch(receiveErrors(response.responseJSON))))
}

export const demoLogin = () => (dispatch) => { 
  return APIUtil.demoLogin()
    .then( (user => dispatch(receiveCurrentUser(user))))
}

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user))).fail((response) => (dispatch(receiveErrors(response.responseJSON))))
)

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)

export const clearError = () => dispatch => dispatch(receiveErrors([]))




