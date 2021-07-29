import { AuthConstants } from "../../constant/action";

const initialState = {
  loading: false,
  error: ""
};

const LoginReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return {
        loading: action.loading,
        error: action.error
      };

    case AuthConstants.LOGIN_SUCCESS:
      return {
        loading: action.loading,
        error: action.error
      };

    case AuthConstants.LOGIN_FAILURE:
      return {
        loading: action.loading,
        error: action.error
      };

    default:
      return state;
  }
};

export default LoginReducer;
