import axios from "axios";
import { AuthConstants } from "../../constant/action";
import { ENV } from "../../constant/env";
import { useHistory } from "react-router";
import { LocalStorage } from "../../constant/localStorage";


export const loginLoading = () => ({
    type: AuthConstants.LOGIN_REQUEST,
    loading: true,
    error: ""
  });


  export const loginSuccess = () => ({
    type: AuthConstants.LOGIN_SUCCESS,
    loading: false,
    error: ""
  });

  export const loginFailure = (errMsg) => ({
    type: AuthConstants.LOGIN_FAILURE,
    loading: false,
    error: errMsg
  });

  export const loginAction = (form) => async (dispatch) => {
      let history = useHistory();
    dispatch(loginLoading());
  
    await axios
      .post(`${ENV.BASE_URL}/auth/login`, form)
      .then(response => {
        if (response.data.appStatusCode === 0) {
  
          localStorage.setItem(LocalStorage.MOBILE_NO, form.get('username'));
          localStorage.setItem(LocalStorage.TOKEN, response.data.payloadJson[0]['X-csquare-api-token']);
          localStorage.setItem(LocalStorage.CUST_ID, response.data.payloadJson[0]['X-csquare-api-key']);
          // Set Roles array here
  
          dispatch(loginSuccess());
          history.push("/home");
  
        } 
        else {
          dispatch(loginFailure(response.data.messages[0]));
        }
      })
      .catch(error => {
        dispatch(loginFailure("Something went wrong, Please try again later!"));
      });
  };
  