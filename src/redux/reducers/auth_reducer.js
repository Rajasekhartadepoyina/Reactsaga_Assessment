import { AuthTypes } from "../action_types/auth_types";
const initialState = {};

export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }

  console.log(action.type)
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS: {
      localStorage.setItem("token", 123)
      return {
        // ...action.data,
      };
    }
    case AuthTypes.LOGOUT_SUCCESS: {
      localStorage.clear();
      return {
        // ...action.data,
      };
    }
    default:
      return state;
  }
}
