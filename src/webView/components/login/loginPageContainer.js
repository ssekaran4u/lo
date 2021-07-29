import LoginPage from "./loginPage";
import { State } from "../../../rootReducer";
import { connect } from "react-redux";
import { loginAction } from "../../../common/action/loginAction";


const mapStateToProps = (state) => ({
    loginResult: state.login,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    loginAction: (form) => dispatch(loginAction(form))
  });
  
  export const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage);