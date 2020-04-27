import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
});

export const login = (email, password) => (dispatch) =>
  api.user.login(email, password).then((user) => dispatch(userLoggedIn(user)));
export const logout = () => {};
